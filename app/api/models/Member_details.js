const Sequelize = require('sequelize');
const sequelize = require('../../config/database');

const Member = require('./Member');
const Membership = require('./Membership');


const tableName = 'member_details';

const Member_details = sequelize.define('Member_details', {
  
}, { tableName });

Member.hasOne(Member_details, {foreignKey: 'member_id', sourceKey: 'id'});
Membership.hasOne(Member_details, {foreignKey: 'membership_id', sourceKey: 'id'});

module.exports = Member_details;
