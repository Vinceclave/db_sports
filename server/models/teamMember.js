module.exports = (sequelize, DataTypes) => {
  const TeamMember = sequelize.define('TeamMember', {
    team_member_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    team_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Teams',
        key: 'team_id'
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'user_id'
      }
    },
    join_date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    tableName: 'Team_Members',
    timestamps: false, // Assuming you don't have createdAt and updatedAt columns
    indexes: [
      {
        unique: true,
        fields: ['team_id', 'user_id']
      }
    ]
  });

  TeamMember.associate = function(models) {
    TeamMember.belongsTo(models.Team, { foreignKey: 'team_id' });
    TeamMember.belongsTo(models.User, { foreignKey: 'user_id' });
  };

  return TeamMember;
};