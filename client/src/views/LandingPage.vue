<template>
  <div class="font-sans text-gray-800 antialiased bg-gray-50">
    <section class="relative h-screen flex items-center justify-center text-center p-8 bg-gradient-to-br from-purple-600 via-blue-500 to-teal-400 text-white">
      <div class="z-10">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 drop-shadow-lg">Ignite Your Passion. Find Your Event.</h1>
        <p class="text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-90">Discover and join a world of exciting sports, music, and community events happening near you. Your next unforgettable experience is just a click away.</p>
        <button class="bg-white text-purple-600 hover:bg-gray-100 transition duration-300 py-4 px-10 rounded-full text-xl font-bold shadow-xl hover:shadow-2xl uppercase tracking-wide">Explore Events</button>
      </div>
    </section>

    <section class="features">
      <div class="container mx-auto px-6 py-16">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">Simplify Your Event Experience</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div class="flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <div class="text-purple-600 text-5xl mb-6">
              <i class="fas fa-search"></i> <!-- Placeholder icon -->
            </div>
            <h3 class="text-xl font-semibold mb-3">Easy Discovery</h3>
            <p class="text-gray-600">Quickly find events based on your interests and location with our powerful search.</p>
          </div>
          <div class="flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <div class="text-blue-500 text-5xl mb-6">
              <i class="fas fa-ticket-alt"></i> <!-- Placeholder icon -->
            </div>
            <h3 class="text-xl font-semibold mb-3">Seamless Registration</h3>
            <p class="text-gray-600">Register for events and get your tickets in just a few clicks, hassle-free.</p>
          </div>
          <div class="flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <div class="text-teal-500 text-5xl mb-6">
              <i class="fas fa-users"></i> <!-- Placeholder icon -->
            </div>
            <h3 class="text-xl font-semibold mb-3">Team Management</h3>
            <p class="text-gray-600">Create and manage teams effortlessly for competitive events and leagues.</p>
          </div>
           <div class="flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <div class="text-red-500 text-5xl mb-6">
              <i class="fas fa-credit-card"></i> <!-- Placeholder icon -->
            </div>
            <h3 class="text-xl font-semibold mb-3">Secure Payments</h3>
            <p class="text-gray-600">Enjoy peace of mind with our secure and reliable payment processing system.</p>
          </div>
           <div class="flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <div class="text-yellow-500 text-5xl mb-6">
              <i class="fas fa-calendar-check"></i> <!-- Placeholder icon -->
            </div>
            <h3 class="text-xl font-semibold mb-3">Personalized Dashboard</h3>
            <p class="text-gray-600">Keep track of your registered events, tickets, and team activities in one place.</p>
          </div>
           <div class="flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <div class="text-indigo-600 text-5xl mb-6">
              <i class="fas fa-map-marker-alt"></i> <!-- Placeholder icon -->
            </div>
            <h3 class="text-xl font-semibold mb-3">Venue Information</h3>
            <p class="text-gray-600">Get detailed information and directions for all event venues.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="upcoming-events">
      <div class="container mx-auto px-6 py-16 bg-gray-100">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">Featured Upcoming Events</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <div class="w-full h-48 bg-cover bg-center" style="background-image: url('https://via.placeholder.com/400x250');"></div> <!-- Placeholder image -->
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">Placeholder Event 1</h3>
              <p class="text-gray-600 text-sm mb-2">Date: MM/DD/YYYY</p>
              <p class="text-gray-600 text-sm">Location: Venue Name</p>
            </div>
          </div>
          <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div class="w-full h-48 bg-cover bg-center" style="background-image: url('https://via.placeholder.com/400x250');"></div> <!-- Placeholder image -->
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">Placeholder Event 2</h3>
              <p class="text-gray-600 text-sm mb-2">Date: MM/DD/YYYY</p>
              <p class="text-gray-600 text-sm">Location: Venue Name</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default { // Ensure there is only one <script> block
  name: 'LandingPage',
};
</script>

<style scoped>
/* Tailwind CSS classes are primarily used for styling. Add any specific custom styles here if needed. */

</style>