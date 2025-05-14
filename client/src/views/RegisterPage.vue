<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-100">
    <div class="w-full max-w-md bg-white rounded-lg shadow-md p-8">
      <h1 class="text-2xl font-bold text-gray-800 text-center mb-6">Create an Account</h1>
      <form @submit.prevent="handleRegister">
        <div class="mb-4">
          <label for="username" class="block text-gray-700 text-sm font-bold mb-2">Username:</label>
          <input type="text" id="username" v-model="username" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
        </div>
        <div class="mb-4">
          <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email:</label>
          <input type="email" id="email" v-model="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
        </div>
        <div class="mb-4">
          <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Password:</label>
          <input type="password" id="password" v-model="password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" required>
        </div>
        <div class="mb-6">
          <label for="confirm-password" class="block text-gray-700 text-sm font-bold mb-2">Confirm Password:</label>
          <input type="password" id="confirm-password" v-model="confirmPassword" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" required>
        </div>
        <div class="flex items-center justify-between">
          <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Register</button>
          <router-link to="/login" class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">Already have an account? Login</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterPage',
  data() {
    return {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  },
  methods: {
    handleRegister() {
      // Handle registration logic here (API call to backend)
      console.log('Register clicked', this.username, this.email, this.password, this.confirmPassword);
      // Add password confirmation validation
      if (this.password !== this.confirmPassword) {
        alert('Passwords do not match!');
        return;
      }
      // ... send data to backend ...
    },
  },
}
</script>

<style scoped>
/* Add some basic styling here if needed */
</style>