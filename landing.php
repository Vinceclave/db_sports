<?php include 'includes/header.php'; ?>

<main class="container mx-auto px-4 py-12 md:py-24">
 <section id="hero" class="text-center mb-16 md:mb-24">
 <h1 class="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
 Sports Event Management
 </h1>
 <p class="text-lg text-muted-foreground mb-8 max-w-[700px] mx-auto">
 Discover and join exciting sports events near you. Register easily and experience the thrill!
 </p>
 <div class="flex justify-center space-x-4">
 <a href="register.php" class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-primary text-primary-foreground">
 Get Started
 </a>
 <a href="login.php" class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 border border-input bg-background shadow-sm">
 Login
 </a>
 </div>
 </section>

 <section id="events" class="mb-16 md:mb-24">
 <h2 class="text-3xl md:text-4xl font-bold tracking-tighter mb-8 text-center">Upcoming Events</h2>
 <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
 <div class="rounded-xl border bg-card text-card-foreground shadow">
 <div class="flex flex-col space-y-1.5 p-6">
 <h3 class="text-2xl font-semibold leading-none tracking-tight">Football Tournament</h3>
 <p class="text-sm text-muted-foreground">Stadium Arena - October 26, 2023</p>
 </div>
 <div class="p-6 pt-0">
 <p>A thrilling football competition. Don't miss the action!</p>
 </div>
 <div class="flex items-center p-6 pt-0">
 <button class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-full">
 View Details
 </button>
 </div>
 </div>
 <div class="rounded-xl border bg-card text-card-foreground shadow">
 <div class="flex flex-col space-y-1.5 p-6">
 <h3 class="text-2xl font-semibold leading-none tracking-tight">Basketball Championship</h3>
 <p class="text-sm text-muted-foreground">Community Sports Center - November 10, 2023</p>
 </div>
 <div class="p-6 pt-0">
 <p>Watch the best basketball teams compete.</p>
 </div>
 <div class="flex items-center p-6 pt-0">
 <button class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-full">
 View Details
 </button>
 </div>
 </div>
 <div class="rounded-xl border bg-card text-card-foreground shadow">
 <div class="flex flex-col space-y-1.5 p-6">
 <h3 class="text-2xl font-semibold leading-none tracking-tight">Running Marathon</h3>
 <p class="text-sm text-muted-foreground">City Streets - November 25, 2023</p>
 </div>
 <div class="p-6 pt-0">
 <p>Join or cheer at the annual marathon through the city.</p>
 </div>
 <div class="flex items-center p-6 pt-0">
 <button class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-full">
 View Details
 </button>
 </div>
 </div>
 </div>
 </section>

 <section id="features" class="text-center">
 <h2 class="text-3xl md:text-4xl font-bold tracking-tighter mb-8">Key Features</h2>
 <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
 <div class="rounded-xl border bg-card text-card-foreground shadow p-6">
 <h3 class="text-xl font-semibold mb-2">Easy Registration</h3>
 <p class="text-muted-foreground">Sign up for events quickly and easily.</p>
 </div>
 <div class="rounded-xl border bg-card text-card-foreground shadow p-6">
 <h3 class="text-xl font-semibold mb-2">Event Discovery</h3>
 <p class="text-muted-foreground">Browse a wide range of sports events.</p>
 </div>
 <div class="rounded-xl border bg-card text-card-foreground shadow p-6">
 <h3 class="text-xl font-semibold mb-2">Secure Payments</h3>
 <p class="text-muted-foreground">Process payments safely and reliably.</p>
 </div>
 </div>
 </section>

 <section id="cta" class="text-center mt-16 md:mt-24">
 <h2 class="text-3xl md:text-4xl font-bold tracking-tighter mb-6">Ready to get started?</h2>
 <p class="text-lg text-muted-foreground mb-8">Join thousands of sports enthusiasts and never miss an event.</p>
 <a href="register.php" class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-primary text-primary-foreground">
 Sign Up Now
 </a>
 </section>

 </main>

<?php include 'includes/footer.php'; ?>


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