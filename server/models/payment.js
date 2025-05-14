module.exports = (sequelize, DataTypes) => {
  const Payment = sequelize.define('Payment', {
    payment_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    registration_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Registrations',
        key: 'registration_id'
      }
    },
    amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    payment_date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    payment_method: {
      type: DataTypes.STRING
    }
  }, {
    tableName: 'Payments',
    timestamps: false // Assuming no createdAt and updatedAt in your schema
  });

  Payment.associate = (models) => {
    Payment.belongsTo(models.Registration, {
      foreignKey: 'registration_id',
      as: 'registration'
    });
  };

  return Payment;
};