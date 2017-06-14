const Sequelize = require('sequelize');
const db = require('../index.js');


const Subscribers = db.define('Subscribers', {
  emailAddress: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  gamerName: {
    type: Sequelize.STRING
  },
})

module.exports = Subscribers;
