'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('shippingCharges', [{
        distanceFrom: 0,
        distanceTo: 5,
        weightFrom: 0,
        weightTo: 2,
        charge: 12
      },
      {
        distanceFrom: 5,
        distanceTo: 20,
        weightFrom: 0,
        weightTo: 2,
        charge: 15
      },
      {
        distanceFrom: 20,
        distanceTo: 50,
        weightFrom: 0,
        weightTo: 2,
        charge: 20
      },
      {
        distanceFrom: 50,
        distanceTo: 500,
        weightFrom: 0,
        weightTo: 2,
        charge: 50
      },
      {
        distanceFrom: 500,
        distanceTo: 800,
        weightFrom: 0,
        weightTo: 2,
        charge: 100
      },
      {
        distanceFrom: 800,
        distanceTo: null,
        weightFrom: 0,
        weightTo: 2,
        charge: 220
      },
      {
        distanceFrom: 0,
        distanceTo: 5,
        weightFrom: 2.01,
        weightTo: 5,
        charge: 14
      },
      {
        distanceFrom: 5,
        distanceTo: 20,
        weightFrom: 2.01,
        weightTo: 5,
        charge: 18
      },
      {
        distanceFrom: 20,
        distanceTo: 50,
        weightFrom: 2.01,
        weightTo: 5,
        charge: 24
      },
      {
        distanceFrom: 50,
        distanceTo: 500,
        weightFrom: 2.01,
        weightTo: 5,
        charge: 55
      },
      {
        distanceFrom: 500,
        distanceTo: 800,
        weightFrom: 2.01,
        weightTo: 5,
        charge: 110
      },
      {
        distanceFrom: 800,
        distanceTo: null,
        weightFrom: 2.01,
        weightTo: 5,
        charge: 250
      },
      {
        distanceFrom: 0,
        distanceTo: 5,
        weightFrom: 5.01,
        weightTo: 20,
        charge: 16
      },
      {
        distanceFrom: 5,
        distanceTo: 20,
        weightFrom: 5.01,
        weightTo: 20,
        charge: 25
      },
      {
        distanceFrom: 20,
        distanceTo: 50,
        weightFrom: 5.01,
        weightTo: 20,
        charge: 30
      },
      {
        distanceFrom: 50,
        distanceTo: 500,
        weightFrom: 5.01,
        weightTo: 20,
        charge: 80
      },
      {
        distanceFrom: 500,
        distanceTo: 800,
        weightFrom: 5.01,
        weightTo: 20,
        charge: 130
      },
      {
        distanceFrom: 800,
        distanceTo: null,
        weightFrom: 5.01,
        weightTo: 20,
        charge: 270
      },
      {
        distanceFrom: 0,
        distanceTo: 5,
        weightFrom: 20.01,
        weightTo: null,
        charge: 21
      },
      {
        distanceFrom: 5,
        distanceTo: 20,
        weightFrom: 20.01,
        weightTo: null,
        charge: 35
      },
      {
        distanceFrom: 20,
        distanceTo: 50,
        weightFrom: 20.01,
        weightTo: null,
        charge: 50
      },
      {
        distanceFrom: 50,
        distanceTo: 500,
        weightFrom: 20.01,
        weightTo: null,
        charge: 90
      },
      {
        distanceFrom: 500,
        distanceTo: 800,
        weightFrom: 20.01,
        weightTo: null,
        charge: 150
      },
      {
        distanceFrom: 800,
        distanceTo: null,
        weightFrom: 20.01,
        weightTo: null,
        charge: 300
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('shippingCharges', null, {});

  }
};