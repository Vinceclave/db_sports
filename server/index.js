// server.js
const express = require('express');
const createConnection = require('./config/db'); // Import database connection function

const app = express();
const port = 3000;

// Connect to the database
const db = createConnection();

// Optionally attach db to app locals for later use in routes
app.locals.db = db;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
