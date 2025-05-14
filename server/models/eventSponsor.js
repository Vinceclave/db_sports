'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event_Sponsors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Event_Sponsors.belongsTo(models.Event, {
        foreignKey: 'event_id',
      });
      Event_Sponsors.belongsTo(models.Sponsor, {
        foreignKey: 'sponsor_id',
      });
    }
  }
  Event_Sponsors.init({
    event_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'Events',
        key: 'event_id'
      }
    },
    sponsor_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'Sponsors',
        key: 'sponsor_id'
      }
    },
  }, {
    sequelize,
    modelName: 'Event_Sponsors',
    tableName: 'Event_Sponsors',
    timestamps: false, // Assuming your join table doesn't have timestamps
  });
  return Event_Sponsors;
};