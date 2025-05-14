<template>
  <nav>
    <router-link to="/">Landing</router-link>
    <router-link to="/login">Login</router-link>
    <router-link to="/register">Register</router-link>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

<style scoped>
nav {
  padding: 10px;
  background-color: #f0f0f0;
  text-align: center;
}

nav a {
  margin: 0 10px;
  text-decoration: none;
  color: #333;
}

nav a.router-link-exact-active {
  font-weight: bold;
  color: #007bff;
}
</style>