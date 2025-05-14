module.exports = (sequelize, DataTypes) => {
  const Ticket = sequelize.define('Ticket', {
    ticket_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    registration_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Registrations',
        key: 'registration_id'
      }
    },
    issue_date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    qr_code: {
      type: DataTypes.STRING
    }
  }, {
    tableName: 'Tickets',
    timestamps: false
  });

  Ticket.associate = (models) => {
    Ticket.belongsTo(models.Registration, {
      foreignKey: 'registration_id',
      onDelete: 'CASCADE'
    });
  };

  return Ticket;
};