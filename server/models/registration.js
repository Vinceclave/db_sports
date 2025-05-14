module.exports = (sequelize, DataTypes) => {
  const Registration = sequelize.define('Registration', {
    registration_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'user_id'
      }
    },
    event_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Events',
        key: 'event_id'
      }
    },
    registration_date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    status: {
      type: DataTypes.ENUM('pending', 'confirmed', 'cancelled'),
      defaultValue: 'pending'
    }
  }, {
    tableName: 'Registrations',
    timestamps: false, // Assuming your schema doesn't have created_at/updated_at
    indexes: [
      {
        unique: true,
        fields: ['user_id', 'event_id']
      }
    ]
  });

  Registration.associate = (models) => {
    Registration.belongsTo(models.User, {
      foreignKey: 'user_id'
    });
    Registration.belongsTo(models.Event, {
      foreignKey: 'event_id'
    });
    Registration.hasMany(models.Payment, {
      foreignKey: 'registration_id'
    });
    Registration.hasMany(models.Ticket, {
      foreignKey: 'registration_id'
    });
  };

  return Registration;
};