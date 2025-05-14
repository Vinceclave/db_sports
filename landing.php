<?php include 'includes/header.php'; ?>

<main class="container mx-auto px-4 py-8">
    <section id="hero" class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-800 mb-4">Welcome to Sports Event Management</h1>
        <p class="text-xl text-gray-600">Find and register for exciting sports events near you!</p>
        <div class="mt-6 space-x-4">
            <a href="login.php" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">Login</a>
            <a href="register.php" class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full">Register</a>
        </div>
    </section>
    
    <section id="events" class="mb-12">
        <h2 class="text-3xl font-bold text-gray-800 mb-6 text-center">Upcoming Events</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="bg-white p-6 rounded-lg shadow-md">
                <h3 class="text-xl font-semibold mb-2">Football Tournament</h3>
                <p class="text-gray-700">A thrilling football competition.</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-md">
                <h3 class="text-xl font-semibold mb-2">Basketball Championship</h3>
                <p class="text-gray-700">Watch the best basketball teams compete.</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-md">
                <h3 class="text-xl font-semibold mb-2">Running Marathon</h3>
                <p class="text-gray-700">Join or cheer at the annual marathon.</p>
            </div>
        </div>
    </section>

    <section id="sports" class="mb-12">
        <h2 class="text-3xl font-bold text-gray-800 mb-6 text-center">Explore Sports</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div class="bg-gray-200 p-4 rounded-lg text-center">Football</div>
            <div class="bg-gray-200 p-4 rounded-lg text-center">Basketball</div>
            <div class="bg-gray-200 p-4 rounded-lg text-center">Running</div>
            <div class="bg-gray-200 p-4 rounded-lg text-center">Swimming</div>
        </div>
    </section>

    <section id="venues" class="mb-12">
        <h2 class="text-3xl font-bold text-gray-800 mb-6 text-center">Our Venues</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-white p-6 rounded-lg shadow-md">Stadium Arena</div>
            <div class="bg-white p-6 rounded-lg shadow-md">Community Sports Center</div>
        </div>
    </section>

</main>

<?php include 'includes/footer.php'; ?>