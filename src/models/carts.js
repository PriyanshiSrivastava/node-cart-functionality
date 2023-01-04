const {
    Sequelize,
    sequelize
} = require('../utils/sequelize');

const Cart = sequelize.define(
    'carts', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }
    }, {
        timestamps: false,
        tableName: 'carts',
        // createdAt: 'createdAt'
    },
);
Cart.associate = (models) => {
    Cart.hasMany(models.cartProducts, {
        foreignKey: "cartId"
    })
};
module.exports = Cart;