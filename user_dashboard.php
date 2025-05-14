php
<?php
session_start();

// Check if the user is logged in and is not an admin
if (!isset($_SESSION['user_id']) || (isset($_SESSION['role']) && $_SESSION['role'] === 'admin')) {
    header("Location: login.php");
    exit();
}

// User-specific content and logic goes here

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Dashboard</title>
    <link rel="stylesheet" href="css/style.css"> <!-- Link to your CSS file -->
</head>
<body>
    <header>
        <h1>Welcome to Your Dashboard, <?php echo htmlspecialchars($_SESSION['username'] ?? 'User'); ?>!</h1>
        <nav>
            <ul>
                <li><a href="user_dashboard.php">Dashboard</a></li>
                <li><a href="events.php">View Events</a></li>
                <li><a href="my_registrations.php">My Registrations</a></li>
                <li><a href="my_tickets.php">My Tickets</a></li>
                <li><a href="my_teams.php">My Teams</a></li>
                <li><a href="profile.php">My Profile</a></li>
                <li><a href="logout.php">Logout</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <h2>User Dashboard</h2>

        <section>
            <h3>Overview</h3>
            <p>This is your personal dashboard. Here you can access your event registrations, tickets, team information, and update your profile.</p>
            <p>Use the navigation above to explore different sections.</p>
        </section>

        <section>
            <h3>Recent Activity</h3>
            <p>[Placeholder for recent activity, e.g., upcoming events, new tickets]</p>
            <?php
                // Example: Fetch and display some recent activity for the user
                // You would connect to the database and retrieve relevant data here
                // For now, this is just a placeholder
            ?>
        </section>

        <section>
            <h3>Quick Links</h3>
            <ul>
                <li><a href="events.php">Find and Register for Events</a></li>
                <li><a href="my_registrations.php">View Your Event Registrations</a></li>
                <li><a href="profile.php">Update Your Profile</a></li>
            </ul>
        </section>

        <?php
            // Placeholder for displaying user-specific content based on features
            // For example:
            // Include a section to display upcoming events the user is registered for
            // Include a section to display their recent tickets
            // Include a section to display the teams they are in
        ?>

    </main>

<?php include 'includes/footer.php'; ?>