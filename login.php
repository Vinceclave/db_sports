php
<CODE_BLOCK>
<?php include 'includes/header.php'; ?>
</CODE_BLOCK>
<?php
require_once 'config.php';

session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $input_username_email = $_POST['username_email'];
    $input_password = $_POST['password'];

    // Prepare a SQL statement to prevent SQL injection
    $stmt = $conn->prepare("SELECT user_id, username, password_hash, role FROM Users WHERE username = ? OR email = ?");
    $stmt->bind_param("ss", $input_username_email, $input_username_email);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows == 1) {
        $stmt->bind_result($user_id, $username, $hashed_password, $role);
        $stmt->fetch();

        // Verify the password
        if (password_verify($input_password, $hashed_password)) {
            // Password is correct, start a new session
            $_SESSION['user_id'] = $user_id;
            $_SESSION['username'] = $username;
            $_SESSION['role'] = $role;

            // Redirect based on role
            if ($role === 'admin') {
                header("Location: admin_dashboard.php"); // Redirect to admin dashboard
            } else {
                header("Location: user_dashboard.php"); // Redirect to user dashboard
            }
            exit();
        } else {
            $error = "Invalid username/email or password.";
        }
    } else {
        $error = "Invalid username/email or password.";
    }

    $stmt->close();
    $conn->close();
}
?>

    <div class="container">
        <h2>Login</h2>
        <?php if (isset($error)) { echo '<p class="error">' . $error . '</p>'; } ?>
        <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
            <div class="form-group">
                <label for="username_email">Username or Email:</label>
                <input type="text" id="username_email" name="username_email" required>
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required>
            </div>
            <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <a href="register.php">Register here</a>.</p>
    </div>

<CODE_BLOCK>
<?php include 'includes/footer.php'; ?>
</CODE_BLOCK>