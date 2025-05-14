module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    event_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    event_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    event_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    venue_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Venues',
        key: 'venue_id',
      },
    },
    sport_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Sports',
        key: 'sport_id',
      },
    },
    description: {
      type: DataTypes.TEXT,
    },
    capacity: {
      type: DataTypes.INTEGER,
    },
  }, {
    tableName: 'Events',
    timestamps: false, // Assuming you don't have createdAt and updatedAt columns
  });

  Event.associate = (models) => {
    Event.belongsTo(models.Venue, { foreignKey: 'venue_id' });
    Event.belongsTo(models.Sport, { foreignKey: 'sport_id' });
    Event.hasMany(models.Registration, { foreignKey: 'event_id' });
    Event.hasMany(models.Event_Sponsor, { foreignKey: 'event_id' });
  };

  return Event;
};