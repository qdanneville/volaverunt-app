const Sequelize = require('sequelize');
const sequelize = require('../../config/database');
const Member = require('./Member');
const Membership = require('./Membership');


const tableName = 'member_details';

const MemberDetails = sequelize.define('Member_details', {
    entries: {
        type: Sequelize.INTEGER,
    },
}, { tableName });

// Member.hasOne(Member_details, { foreignKey: 'member_id', as: 'member', sourceKey: 'id' });
// Membership.hasOne(Member_details, { foreignKey: 'membership_id', as: 'membership', sourceKey: 'id' });
Member.belongsToMany(Membership, { through: MemberDetails, foreignKey: 'member_id', as: 'membership'} )
Membership.belongsToMany(Member, { through: MemberDetails, foreignKey: 'membership_id', as:'members'} )

module.exports = MemberDetails;