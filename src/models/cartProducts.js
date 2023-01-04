const {
    Sequelize,
    sequelize
} = require('../utils/sequelize');

// SS model
const CartProducts = sequelize.define(
    'cartProducts', {
        id: {
            allowNull: false,
            primaryKey: true,
            type: Sequelize.INTEGER,
            autoIncrement: true
        },
        productId: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        quantity: {
            type: Sequelize.INTEGER,
            defaultValue: 1
        }
    }, {
        timestamps: false,
        tableName: 'cartProducts',
    }
);
CartProducts.associate = (models) => {
    CartProducts.belongsTo(models.carts, {
        foreignKey: "cartId"
    })
};
module.exports = CartProducts;