const Sequelize = require('sequelize');

const url = process.env.DATABASE_URL || 'postgres://localhost:5432/cashgrounds';

let dbOptions = {};
if (process.env.NODE_ENV === 'production'){
  dbOptions = {
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
      ssl: true
    }
  }
}

module.exports = new Sequelize(url, dbOptions);
