php
<?php
session_start();

// Check if the user is logged in and has the admin role
if (!isset($_SESSION['user_id']) || $_SESSION['role'] !== 'admin') {
    // Redirect to the login page if not logged in or not an admin
    header("Location: login.php");
    exit();
}

// If the user is an admin, display the dashboard content
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Dashboard</title>
    <style>
        /* Basic styling for demonstration */
        body { font-family: Arial, sans-serif; }
        .container { width: 80%; margin: 20px auto; }
        nav a { margin-right: 15px; }
    </style>
</head>
<body>

    <div class="container">
        <h1>Admin Dashboard</h1>
        <p>Welcome, Admin!</p>

        <nav>
            <a href="#">Dashboard Home</a> |
            <a href="#">Manage Users</a> |
            <a href="#">Manage Events</a> |
            <a href="#">Manage Venues</a> |
            <a href="#">Manage Sports</a> |
            <a href="#">Manage Sponsors</a> |
            <a href="#">Manage Teams</a> |
            <a href="logout.php">Logout</a>
        </nav>

        <hr>

        <h2>Quick Actions</h2>
        <ul>
            <li><a href="#">Add New Event</a></li>
            <li><a href="#">Add New Venue</a></li>
            <li><a href="#">Add New Sport</a></li>
            <li><a href="#">Add New Sponsor</a></li>
            <li><a href="#">Create New Team</a></li>
        </ul>

        <hr>

        <h2>Overview (Placeholders)</h2>
        <div>
            <!-- Placeholder for user statistics -->
            <h3>User Statistics</h3>
            <p>[Display number of users, new registrations, etc.]</p>
        </div>

        <div>
            <!-- Placeholder for event overview -->
            <h3>Event Overview</h3>
            <p>[Display upcoming events, number of registrations per event, etc.]</p>
        </div>

        <div>
            <!-- Placeholder for recent activities -->
            <h3>Recent Activity</h3>
            <p>[Display recent registrations, payments, etc.]</p>
        </div>

        <!-- You will replace these placeholders with actual PHP code to fetch and display data -->

    </div>

<?php include 'includes/footer.php'; ?>
</body>
</html>