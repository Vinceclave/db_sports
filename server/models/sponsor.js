module.exports = (sequelize, DataTypes) => {
  const Sponsor = sequelize.define('Sponsor', {
    sponsor_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    sponsor_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    contact_person: {
      type: DataTypes.STRING
    },
    contact_email: {
      type: DataTypes.STRING
    }
  }, {
    tableName: 'Sponsors',
    timestamps: false
  });

  Sponsor.associate = (models) => {
    Sponsor.belongsToMany(models.Event, {
      through: 'Event_Sponsors',
      foreignKey: 'sponsor_id'
    });
  };

  return Sponsor;
};