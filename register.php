<?php
require_once 'config.php';

// Ensure config.php defines the necessary constants
if (!defined('DB_HOST') || !defined('DB_USERNAME') || !defined('DB_PASSWORD') || !defined('DB_NAME')) {
    die("Configuration error: Database constants are not defined in config.php");
}

$message = '';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Basic input validation
    if (empty($_POST['username']) || empty($_POST['email']) || empty($_POST['password'])) {
 $message = "Please fill in all fields.";
    } else {
        // Sanitize input
        $username = trim($_POST['username']);
        $email = trim($_POST['email']);
        $password = $_POST['password'];

        // Hash the password
        $password_hash = password_hash($password, PASSWORD_DEFAULT);


        // Get database connection
        $conn = get_db_connection();

        // Check for database connection error
        if ($conn->connect_error) {
            $message = "Database connection failed: " . $conn->connect_error;
        } else {
            // Check if username or email already exists
            $check_stmt = $conn->prepare("SELECT user_id FROM Users WHERE username = ? OR email = ?");
            if ($check_stmt === false) {
                $message = "Database error: Unable to prepare check statement: " . $conn->error;
            } else {
                $check_stmt->bind_param("ss", $username, $email);
                $check_stmt->execute();
                $check_stmt->store_result();

                if ($check_stmt->num_rows > 0) {
                    $message = "Username or email already exists.";
                } else {
                    $role = 'user'; // Set default role
                    // Insert new user into the database
                    $stmt = $conn->prepare("INSERT INTO Users (username, email, password_hash, role) VALUES (?, ?, ?, ?)");
                    if ($stmt === false) {
                        $message = "Database error: Unable to prepare insert statement: " . $conn->error;
                    } else {
                        $stmt->bind_param("ssss", $username, $email, $password_hash, $role);

                        if ($stmt->execute()) {
                            // Registration successful, redirect to login page
                            header("Location: login.php");
                            exit();
                        } else {
                            $message = "Error: " . $stmt->error;
                        }
                    }
                }
                $check_stmt->close();
            }
            $conn->close();
        }
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Register</title>
    <style>
        body {
            font-family: sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background-color: #f4f4f4;
            margin: 0;
        }
        .register-container {
            background-color: #fff;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            text-align: center;
        }
        .register-container h2 {
            margin-bottom: 20px;
            color: #333;
        }
        .form-group {
            margin-bottom: 15px;
            text-align: left;
        }
        .form-group label {
            display: block;
            margin-bottom: 5px;
            color: #555;
        }
        .form-group input[type="text"],
        .form-group input[type="email"],
        .form-group input[type="password"] {
            width: 100%;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 4px;
            box-sizing: border-box; /* Include padding and border in element's total width */
        }
        button {
            background-color: #5cb85c;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
            transition: background-color 0.3s ease;
        }
        button:hover {
            background-color: #4cae4c;
        }
        .message {
            margin-top: 20px;
            color: #d9534f;
        }
        .message a {
            color: #5cb85c;
            text-decoration: none;
        }
    </style>
</head>
<body>
    <div class="register-container">
        <h2>Register</h2>
        <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
            <div class="form-group">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" required>
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required>
            </div>
            <button type="submit">Register</button>
        </form>
        <?php if ($message): ?>
            <p class="message"><?php echo $message; ?></p>
        <?php endif; ?>
    </div>
</body>
</html>