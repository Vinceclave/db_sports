// server.js
const express = require('express');
const dbPool = require('./config/config'); // Import mysql2 connection pool

// Import route files
const userRoutes = require('./routes/userRoutes');
const venueRoutes = require('./routes/venueRoutes');
const sportRoutes = require('./routes/sportRoutes');
const eventRoutes = require('./routes/eventRoutes');
const registrationRoutes = require('./routes/registrationRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const sponsorRoutes = require('./routes/sponsorRoutes');
const ticketRoutes = require('./routes/ticketRoutes');
const teamRoutes = require('./routes/teamRoutes');
const teamMemberRoutes = require('./routes/teamMemberRoutes');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Mount routes
app.use('/api/users', userRoutes);
app.use('/api/venues', venueRoutes);
app.use('/api/sports', sportRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/registrations', registrationRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/sponsors', sponsorRoutes);
app.use('/api/tickets', ticketRoutes);
app.use('/api/teams', teamRoutes);
app.use('/api/team-members', teamMemberRoutes);


// Simple route for the root path
app.get('/', (req, res) => {
  res.send('Sports Events API is running!');
});

// Check database connection and start server
dbPool.getConnection((err, connection) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Database connected successfully.');
  connection.release(); // Release the connection

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
});