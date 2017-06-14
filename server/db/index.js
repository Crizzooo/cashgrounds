const Sequelize = require('sequelize');

const url = process.env.DATABASE_URL || 'postgres://localhost:5432/cashgrounds';

export default new Sequelize(url, {});
