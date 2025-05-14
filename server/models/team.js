module.exports = (sequelize, DataTypes) => {
  const Team = sequelize.define('Team', {
    team_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    team_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    sport_id: {
      type: DataTypes.INTEGER,
      allowNull: true, // Assuming it can be nullable based on schema
      references: {
        model: 'Sports', // This is the table name
        key: 'sport_id',
      },
    },
  }, {
    tableName: 'Teams', // Explicitly define the table name
    timestamps: false, // Assuming no timestamps based on schema
  });

  Team.associate = (models) => {
    Team.belongsTo(models.Sport, {
      foreignKey: 'sport_id',
    });
    Team.hasMany(models.TeamMember, {
      foreignKey: 'team_id',
    });
  };

  return Team;
};