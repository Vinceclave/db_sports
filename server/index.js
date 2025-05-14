const express = require('express');
const dbPool = require('./config/config');

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
const teamMemberRoutes = require('./routes/teamMemberRoutes'); // ✅ This line was missing

const app = express();
const port = 3000;

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
app.use('/api/team-members', teamMemberRoutes); // ✅ Mounting the route

// Root route
app.get('/', (req, res) => {
  res.send('Sports Events API is running!');
});

// Test DB connection and start server
async function startServer() {
  try {
    const connection = await dbPool.getConnection();
    console.log('Database connected successfully.');
    connection.release();

    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (err) {
    console.error('Database connection failed:', err.message);
    process.exit(1); // Exit if DB connection fails
  }
}

startServer();
// Handle unhandled promise rejections