<script>
  let email = "";
  let password = "";

  async function handleLogin(event) {
    event.preventDefault();
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const result = await response.json();
      if (response.ok) {
        // Save token if needed
        localStorage.setItem('token', result.token);
        // Route based on role
        if (result.role === 'admin') {
          window.location.href = '/admin';
        } else {
          window.location.href = '/user';
        }
      } else {
        alert(result.message || 'Login failed');
      }
    } catch (err) {
      alert('Login error');
    }
  }
</script>

<div class="flex items-center justify-center min-h-screen px-4 bg-[#f9f9f9]">
  <div class="w-full max-w-md bg-white border border-gray-200 rounded-md shadow-sm p-6 space-y-6">
    <h1 class="text-xl font-semibold text-center">Sign in to your account</h1>
    <form class="space-y-4" on:submit={handleLogin}>
      <input type="email" bind:value={email} placeholder="Email"
        class="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2a9d8f]" required />
      <input type="password" bind:value={password} placeholder="Password"
        class="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2a9d8f]" required />
      <button type="submit"
        class="w-full bg-[#2a9d8f] hover:bg-[#1c7c6c] text-white py-2 px-4 rounded text-sm font-medium">
        Sign In
      </button>
    </form>
    <p class="text-xs text-center text-gray-500">
      <a href="/" class="text-[#2a9d8f] hover:underline">Back to Home</a>
    </p>
  </div>
</div>
