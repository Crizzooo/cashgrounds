const Sequelize = require('sequelize');

const url = process.env.DATABASE_URL || 'postgres://localhost:5432/cashgrounds';

module.exports = new Sequelize(url, {
  dialect: 'postgres',
  protocol: 'postgres',
  dialectOptions: {
    ssl: true
  }
});
