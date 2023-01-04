const {
    Sequelize,
    sequelize
} = require('../utils/sequelize');

const ShippingCharges = sequelize.define(
    'shippingCharges', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        distanceFrom: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        distanceTo: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        weightFrom: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        weightTo: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        charge: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    }, {
        timestamps: false,
        tableName: 'shippingCharges',
    },
);

module.exports = ShippingCharges;