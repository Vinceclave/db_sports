const db = require('../config/db');

const handleRootRequest = (req, res) => {
  db.getConnection((err, connection) => {
    if (err) {
      console.error('Error getting database connection:', err);
      return res.status(500).send('Error connecting to the database.');
    }

    // Example query - replace with your actual query
    connection.query('SELECT 1 + 1 AS solution', (error, results) => {
      connection.release(); // Always release the connection

      if (error) {
        console.error('Error executing database query:', error);
        return res.status(500).send('Error querying the database.');
      }

      res.status(200).send('Database connection successful and query executed.');
    });
  });
};

module.exports = {
  handleRootRequest,
};