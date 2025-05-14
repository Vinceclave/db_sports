php
<?php
require_once 'config.php';

// Ensure config.php defines the necessary constants and get_db_connection function
if (!function_exists('get_db_connection')) {
    die("Configuration error: Database connection function not defined in config.php");
}

$admin_username = 'admin';
$admin_email = 'admin@example.com';
$admin_password = 'secure_admin_password'; // **CHANGE THIS TO A STRONG, UNIQUE PASSWORD**

$conn = get_db_connection();

// Check if an admin user already exists
$check_stmt = $conn->prepare("SELECT user_id FROM Users WHERE username = ? OR email = ?");
$check_stmt->bind_param("ss", $admin_username, $admin_email);
$check_stmt->execute();
$check_stmt->store_result();

if ($check_stmt->num_rows > 0) {
    echo "Admin user already exists.";
} else {
    // Hash the admin password
    $hashed_password = password_hash($admin_password, PASSWORD_DEFAULT);

    // Insert the new admin user
    $insert_stmt = $conn->prepare("INSERT INTO Users (username, email, password_hash, role) VALUES (?, ?, ?, 'admin')");
    if ($insert_stmt === false) {
        echo "Database error: Unable to prepare statement for admin insertion.";
    } else {
        $insert_stmt->bind_param("sss", $admin_username, $admin_email, $hashed_password);

        if ($insert_stmt->execute()) {
            echo "Admin user created successfully!";
        } else {
            echo "Error creating admin user: " . $insert_stmt->error;
        }
        $insert_stmt->close();
    }
}

$check_stmt->close();
$conn->close();
?>