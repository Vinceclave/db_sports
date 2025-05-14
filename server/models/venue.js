const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Adjust the path to your sequelize instance

const Venue = sequelize.define('Venue', {
  venue_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  venue_name: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  address: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  capacity: {
    type: DataTypes.INTEGER
  }
}, {
  tableName: 'Venues',
  timestamps: false // Assuming you don't have createdAt and updatedAt columns
});

module.exports = Venue;