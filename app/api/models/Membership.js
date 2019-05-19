const Sequelize = require('sequelize');
const sequelize = require('../../config/database');

const tableName = 'memberships';

const Membership = sequelize.define('Membership', {
  name : {
    type: Sequelize.STRING,
  },
  description : {
    type: Sequelize.STRING,
  },
  entries: {
    type: Sequelize.INTEGER,
  },
}, { tableName });

module.exports = Membership;
