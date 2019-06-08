const privateRoutes = {
  'GET /users': 'UserController.getAll',
  //Members
  'GET /members': 'MemberController.getAll',
  'POST /member/membership': 'MemberController.addMembership',
  //Membership
  'POST /membership': 'MembershipController.create',
  'GET /membership': 'MembershipController.getAll',
};

module.exports = privateRoutes;
