<?php
// Assume user is logged in for this minimal landing page
// In a real application, you would check for an active session here
$is_logged_in = true; // Set to true for demonstration
$username = "User"; // Replace with actual username from session if logged in
?>

<main class="container mx-auto px-4 py-12 md:py-24">
    <section id="welcome" class="text-center mb-12 animate-fade-in">
        <h1 class="text-5xl md:text-6xl font-bold text-gray-900 mb-4">Welcome, <?php echo htmlspecialchars($username); ?>!</h1>
        <p class="text-xl text-gray-700">Explore and manage your sports events.</p>
    </section>

    <section id="quick-links" class="mb-12 text-center animate-slide-up">
        <h2 class="text-3xl font-bold text-gray-900 mb-6">Quick Links</h2>
        <div class="flex justify-center space-x-6">
            <a href="#" class="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:-translate-y-1">View Events</a>
            <a href="#" class="bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-700 transition duration-300 ease-in-out transform hover:-translate-y-1">My Registrations</a>
            <?php if ($is_logged_in): ?>
                <a href="#" class="bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-red-700 transition duration-300 ease-in-out transform hover:-translate-y-1">Logout</a>
            <?php endif; ?>
        </div>
    </section>

    <section id="events" class="mb-12">
        <h2 class="text-4xl font-bold text-gray-900 mb-8 text-center animate-fade-in">Upcoming Events</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1 animate-slide-up">
                <div class="flex items-center mb-4">
                    <img src="https://via.placeholder.com/50" alt="Football icon" class="w-12 h-12 rounded-full mr-4">
                    <h3 class="text-2xl font-semibold text-gray-800">Football Tournament</h3>
                </div>
                <p class="text-gray-700 mb-4">A thrilling football competition at Stadium Arena. Don't miss the action!</p>
                <span class="inline-block bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">Stadium Arena</span>
                <span class="inline-block bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded">October 26, 2023</span>
            </div>
            <div class="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1 animate-slide-up delay-100">
                 <div class="flex items-center mb-4">
                    <img src="https://via.placeholder.com/50" alt="Basketball icon" class="w-12 h-12 rounded-full mr-4">
                    <h3 class="text-2xl font-semibold text-gray-800">Basketball Championship</h3>
                </div>
                <p class="text-gray-700 mb-4">Watch the best basketball teams compete at Community Sports Center.</p>
                 <span class="inline-block bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">Community Sports Center</span>
                <span class="inline-block bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded">November 10, 2023</span>
            </div>
            <div class="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1 animate-slide-up delay-200">
                 <div class="flex items-center mb-4">
                    <img src="https://via.placeholder.com/50" alt="Running icon" class="w-12 h-12 rounded-full mr-4">
                    <h3 class="text-2xl font-semibold text-gray-800">Running Marathon</h3>
                </div>
                <p class="text-gray-700 mb-4">Join or cheer at the annual marathon through the city.</p>
                 <span class="inline-block bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">City Streets</span>
                <span class="inline-block bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded">November 25, 2023</span>
            </div>
        </div>
    </section>

    <section id="sports" class="mb-12 text-center">
        <h2 class="text-4xl font-bold text-gray-900 mb-8 animate-fade-in">Explore Sports</h2>
        <div class="flex justify-center space-x-6 animate-zoom-in">
            <div class="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1">Football</div>
            <div class="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1">Basketball</div>
            <div class="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1">Running</div>
            <div class="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1">Swimming</div>
        </div>
    </section>

    <section id="venues" class="mb-12 text-center">
        <h2 class="text-4xl font-bold text-gray-900 mb-8 animate-fade-in">Featured Venues</h2>
        <div class="flex justify-center space-x-6 animate-zoom-in">
            <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1">Stadium Arena</div>
            <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1">Community Sports Center</div>
        </div>
    </section>

 </main>

<?php include 'includes/footer.php'; ?>