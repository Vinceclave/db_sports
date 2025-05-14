// server.js
const express = require('express');
const db = require('./models'); // Import Sequelize models and connection

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


// Synchronize Sequelize models and then start the server
db.sequelize.sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
