<?php

require_once 'config.php';
require_once 'includes/footer.php'; // Assuming you still want the footer

session_start();

// Check if the user is already logged in
if (isset($_SESSION['user_id'])) {
    // Redirect to a dashboard or user area if logged in
    header('Location: index.php'); // Or wherever your user dashboard is
    exit;
}

$error = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get form data
    $username = trim($_POST['username'] ?? '');
    $password = $_POST['password'] ?? ''; // Password should not be trimmed

    // Validate input
    if (empty($username) || empty($password)) {
        $error = "Please enter both username and password.";
    } else {
        // Create database connection
        $conn = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);

        // Check connection
        if (!$conn) {
            $error = "Database connection failed: " . mysqli_connect_error();
        } else {
            // Prepare a SELECT statement to retrieve the user and their hashed password
            $sql = "SELECT user_id, username, password_hash FROM Users WHERE username = ?";
            $stmt = mysqli_prepare($conn, $sql);

            if ($stmt) {
                // Bind the username parameter
                mysqli_stmt_bind_param($stmt, "s", $username);

                // Execute the statement
                mysqli_stmt_execute($stmt);

                // Get the result
                $result = mysqli_stmt_get_result($stmt);

                // Check if a user with that username exists
                if (mysqli_num_rows($result) === 1) {
                    $user = mysqli_fetch_assoc($result);

                    // Verify the password
                    if (password_verify($password, $user['password_hash'])) {
                        // Password is correct, start the session
                        $_SESSION['user_id'] = $user['user_id'];
                        $_SESSION['username'] = $user['username'];

                        // Redirect to a protected page (e.g., dashboard)
                        header('Location: index.php'); // Or wherever your user dashboard is
                        exit;
                    } else {
                        // Incorrect password
                        $error = "Invalid username or password.";
                    }
                } else {
                    // User not found
                    $error = "Invalid username or password.";
                }

                // Close the statement
                mysqli_stmt_close($stmt);
            } else {
                $error = "Database query error: " . mysqli_error($conn);
            }

            // Close the database connection
            mysqli_close($conn);
        }
    }
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="style.css"> <!-- Assuming you have a style.css file -->
</head>
<body>

    <h2>Login</h2>

    <?php if ($error): ?>
        <p style="color: red;"><?php echo $error; ?></p>
    <?php endif; ?>

    <form action="login.php" method="post">
        <div>
            <label for="username">Username:</label><br>
            <input type="text" id="username" name="username" value="<?php echo htmlspecialchars($username ?? ''); ?>" required>
        </div>
        <div>
            <label for="password">Password:</label><br>
            <input type="password" id="password" name="password" required>
        </div>
        <div>
            <button type="submit">Login</button>
        </div>
        <p>Don't have an account? <a href="register.php">Register here</a>.</p>
    </form>

</body>
</html>