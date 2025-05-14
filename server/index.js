const express = require('express');
const db = require('./config/db'); // Import database connection
const router = require('./routes/index'); // Import router

const app = express();
const port = 3000;

app.use('/', router); // Use the imported router for routes

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});