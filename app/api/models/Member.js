const Sequelize = require('sequelize');
const sequelize = require('../../config/database');

const Membership = require('./Membership');

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

Member.belongsTo(Membership, {foreignKey: 'membership_id', as:'membership'} )
Membership.hasMany(Member, {as:'members'})

module.exports = Member;
