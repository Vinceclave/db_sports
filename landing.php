<?php
// Assume user is logged in for this minimal landing page
// In a real application, you would check for an active session here
// This page serves as the main entry point and does not require login
// In a real application, you might include session checks here if needed
?>

<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="UTF-8">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <title>Sports Event Platform</title>
 <style>
 body { font-family: sans-serif; margin: 0; padding: 0; background-color: #f4f4f4; }
 .container { max-width: 1200px; margin: 0 auto; padding: 20px; text-align: center; }
 h1, h2 { color: #333; }
 .links a { margin: 0 10px; text-decoration: none; color: #007bff; font-size: 1.2em; }
 .links a:hover { text-decoration: underline; }
 </style>
</head>
<body>
 <div class="container">
    <section id="welcome" class="text-center mb-12 animate-fade-in">
        <h1 class="text-5xl md:text-6xl font-bold text-gray-900 mb-4">Welcome to the Sports Event Platform!</h1>
        <p class="text-xl text-gray-700">Find and register for exciting sports events.</p>
    </section>

    <section id="auth-links" class="mb-12 text-center">
        <h2 class="text-3xl font-bold text-gray-900 mb-6">Get Started</h2>
        <div class="links">
            <a href="login.php">Login</a>
            <a href="register.php">Register</a>
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

 </div>
</body>
</html>