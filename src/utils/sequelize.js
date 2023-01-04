const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const configFile = require('../../config/config');
const config = configFile[env];

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: 'postgres',
    operatorsAliases: '0',
    logging: false,
    pool: {
      max: 100,
      min: 0,
      acquire: 1000000,
      idle: 200000,
    },
  },
);
sequelize.sync();
module.exports = {
  sequelize,
  Sequelize,
};
