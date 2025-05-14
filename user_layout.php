git addphp
<?php
include 'includes/header.php';
?>

<main>
 <nav class="mb-6">
 <ul class="flex space-x-4">
 <li><a href="/user/events" class="text-blue-500 hover:underline">View Events</a></li>
 <li><a href="/user/registrations" class="text-blue-500 hover:underline">My Registrations</a></li>
 <li><a href="/user/tickets" class="text-blue-500 hover:underline">My Tickets</a></li>
 </ul>
 </nav>

    <h1 class="text-3xl font-bold mb-6">User Section</h1>

    <!-- Content for the specific user route will be loaded here -->
    <!-- This file serves as the layout, actual content will be in separate files -->

</main>
<?php
include 'includes/footer.php';
?>