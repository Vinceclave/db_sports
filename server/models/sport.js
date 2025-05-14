const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Sport = sequelize.define('Sport', {
    sport_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    sport_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
    },
  }, {
    tableName: 'Sports',
    timestamps: false, // Assuming your schema doesn't have createdAt and updatedAt
  });

  return Sport;
};