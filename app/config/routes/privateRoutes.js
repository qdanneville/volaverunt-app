const privateRoutes = {
  'GET /users': 'UserController.getAll',
  //Members
  'GET /members': 'MemberController.getAll',
  'POST /member/:member_id/membership/:membership_id': 'MemberController.addMembership',
  'POST /member/:member_id/add/entries/:entries_amount': 'MemberController.addEntries',
  'POST /member/:member_id/remove/entries/:entries_amount': 'MemberController.removeEntries',
  //Membership
  'POST /membership': 'MembershipController.create',
  'GET /membership': 'MembershipController.getAll',
};

module.exports = privateRoutes;
