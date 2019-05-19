const Sequelize = require('sequelize');
const sequelize = require('../../config/database');

const tableName = 'members';

const Member = sequelize.define('Member', {
  firstname : {
    type: Sequelize.STRING,
  },
  lastname : {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
  },
}, { tableName });

module.exports = Member;
