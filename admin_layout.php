php
<?php
include 'includes/header.php';
?>
<div class="flex h-screen bg-gray-100">
    <!-- Sidebar -->
    <div class="bg-gray-800 text-white w-64 flex flex-col">
        <div class="p-4 text-2xl font-bold text-center">Admin Panel</div>
        <nav class="flex-1 px-2 py-4 space-y-2">
            <a href="/admin/users" class="block px-4 py-2 rounded hover:bg-gray-700">Manage Users</a>
            <a href="/admin/venues" class="block px-4 py-2 rounded hover:bg-gray-700">Manage Venues</a>
            <a href="/admin/sports" class="block px-4 py-2 rounded hover:bg-gray-700">Manage Sports</a>
            <a href="/admin/events" class="block px-4 py-2 rounded hover:bg-gray-700">Manage Events</a>
            <a href="/admin/registrations" class="block px-4 py-2 rounded hover:bg-gray-700">Manage Registrations</a>
            <a href="/admin/payments" class="block px-4 py-2 rounded hover:bg-gray-700">Manage Payments</a>
            <a href="/admin/sponsors" class="block px-4 py-2 rounded hover:bg-gray-700">Manage Sponsors</a>
            <a href="/admin/teams" class="block px-4 py-2 rounded hover:bg-gray-700">Manage Teams</a>
            <a href="/admin/tickets" class="block px-4 py-2 rounded hover:bg-gray-700">Manage Tickets</a>
        </nav>
    </div>
    <!-- Main Content -->
    <div class="flex-1 flex flex-col overflow-hidden">
        <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
            <div class="container mx-auto px-6 py-8">
                <h3 class="text-gray-700 text-3xl font-medium">Admin Dashboard</h3>
                <div class="mt-4">
                    <div class="flex flex-wrap -mx-6">
                        <div class="w-full xl:w-1/2 px-6">
                            <!-- Content for each route will be loaded here -->
                            <div id="admin-content" class="bg-white rounded-md shadow-md p-6">
                                <h4 class="text-xl font-semibold mb-4">Select a section from the sidebar to manage.</h4>
                                <!-- Specific management content will load here dynamically -->
                            </div>
                        </div>
                        <!-- Additional columns for layout can be added here -->
                    </div>
                </div>
            </div>
        </main>
        <?php include 'includes/footer.php'; ?>
    </div>
</div>

<script>
    // Basic client-side routing example (can be expanded)
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            // In a real application, you would fetch content based on this URL
            console.log('Navigating to:', this.href);
        </div>
        });
    });
</script>