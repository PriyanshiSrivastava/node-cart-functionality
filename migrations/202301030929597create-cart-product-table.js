module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('cartProducts', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.INTEGER,
                autoIncrement: true
            },
            productId: {
                allowNull: false,
                type: Sequelize.INTEGER //would have refered to product table
            },
            cartId: {
                allowNull: false, // fk
                type: Sequelize.INTEGER,
                references: {
                    model: 'carts',
                    key: 'id'
                }
            },
            quantity: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 1
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('cartProducts');
    }
};