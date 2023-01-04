module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('shippingCharges', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true
      },
      distanceFrom: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      distanceTo: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      weightFrom: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      weightTo: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      charge: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('shippingCharges');
  }
};