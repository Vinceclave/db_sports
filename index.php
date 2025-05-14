php
<?php
require_once 'config.php';

session_start();

// Redirect if already logged in
if (isset($_SESSION['user_id'])) {
    header('Location: landing.php'); // Or your user dashboard page
    exit();
}

$error_message = '';

// Handle login form submission
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'] ?? '';
    $password = $_POST['password'] ?? '';

    // Input validation
    if (empty($username) || empty($password)) {
        $error_message = "Please enter both username and password.";
    } else {
        // Database connection
        $conn = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
        if (!$conn) {
            die("Connection failed: " . mysqli_connect_error());
        }

        // Prepare statement to fetch user data by username
        $sql = "SELECT user_id, password_hash FROM Users WHERE username = ?";
        $stmt = mysqli_prepare($conn, $sql);

        if ($stmt) {
            // Bind parameters and execute statement
            mysqli_stmt_bind_param($stmt, "s", $username);
            mysqli_stmt_execute($stmt);
            $result = mysqli_stmt_get_result($stmt);

            // Check if a user was found
            if ($result && mysqli_num_rows($result) === 1) {
                $user = mysqli_fetch_assoc($result);
                // Verify the provided password against the stored hash
                if (password_verify($password, $user['password_hash'])) {
                    // Password is correct, start a session
                    $_SESSION['user_id'] = $user['user_id'];
                    // Redirect to landing page or user dashboard
                    header('Location: landing.php');
                    exit();
                } else {
                    $error_message = "Invalid username or password.";
                }
            } else {
                $error_message = "Invalid username or password.";
            }

            // Close the statement
            mysqli_stmt_close($stmt);
        } else {
            // Error preparing statement
            $error_message = "Database error. Please try again later.";
        }

        // Close the database connection
        mysqli_close($conn);
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
</head>
<body>
    <h2>Login</h2>
    <?php if (!empty($error_message)): ?>
        <p style="color: red;"><?php echo $error_message; ?></p>
    <?php endif; ?>
    <form action="index.php" method="post">
        <div>
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required>
        </div>
        <div>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required>
        </div>
        <button type="submit">Login</button>
    </form>
    <p>Don't have an account? <a href="register.php">Register here</a>.</p>
</body>
</html>