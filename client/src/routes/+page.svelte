<!-- src/routes/+page.svelte -->
<script>
  // any script logic if needed
</script>

<!-- Hero and Navigation -->
<div class="min-h-screen bg-white font-sans antialiased">
  <!-- Navigation Bar -->
  <nav class="bg-white border-b border-gray-100">
    <div class="container mx-auto px-6 py-4 flex justify-between items-center">
      <a href="/" class="text-2xl font-bold text-[#264653] hover:text-[#2a9d8f] transition">Sports Events Platform</a>
      <div class="flex space-x-4">
        <a href="#home" class="text-[#264653] hover:text-[#2a9d8f]">Home</a>
        <a href="/login" class="text-[#264653] hover:text-[#2a9d8f]">Login</a>
        <a href="/register" class="text-[#264653] hover:text-[#2a9d8f]">Register</a>
      </div>
    </div>
  </nav>

  <!-- Hero Section -->
  <section id="home" class="bg-[#264653] text-white py-32 text-center px-6">
    <h1 class="text-4xl md:text-5xl font-bold mb-6">Your Hub for Sports Events</h1>
    <p class="text-lg mb-10 text-gray-300">
      Discover, register, and participate in your favorite sports events.
    </p>
    <div class="space-x-4">
      <a href="/register" class="bg-[#f4a261] text-[#264653] px-8 py-4 rounded-full text-xl font-semibold hover:bg-[#e76f51] hover:text-white transition">Join Now</a>
      <a href="/login" class="border border-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-white hover:text-[#264653] transition">Learn More</a>
    </div>
  </section>

    <!-- Features -->
  <section class="py-20 bg-white">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl md:text-4xl font-bold text-center text-[#264653] mb-12">Key Features</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="p-8 bg-white rounded-lg shadow-lg border-t-4 border-[#e9c46a]">
          <h3 class="text-xl font-semibold mb-4 text-[#264653]">Easy Event Registration</h3>
          <p class="text-gray-700">Register for a wide variety of sports events with ease.</p>
        </div>
        <div class="p-8 bg-white rounded-lg shadow-lg border-t-4 border-[#f4a261]">
          <h3 class="text-xl font-semibold mb-4 text-[#264653]">Team Management</h3>
          <p class="text-gray-700">Create or join teams and manage them easily.</p>
        </div>
        <div class="p-8 bg-white rounded-lg shadow-lg border-t-4 border-[#e76f51]">
          <h3 class="text-xl font-semibold mb-4 text-[#264653]">Sponsorship Opportunities</h3>
          <p class="text-gray-700">Connect with sponsors for event funding.</p>
        </div>
        <!-- Add other features similarly -->
      </div>
    </div>
  </section>

    <!-- Footer -->
  <footer class="bg-[#264653] text-white py-8 text-center text-sm">
    <p class="text-gray-400">&copy; 2023 Sports Events Platform. All rights reserved.</p>
  </footer>
</div>