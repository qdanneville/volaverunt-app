const publicRoutes = {
  'POST /user': 'UserController.register',
  'POST /register': 'UserController.register', // alias for POST /user
  'POST /login': 'UserController.login',
  'POST /validate': 'UserController.validate',
  //Members
  'POST /member': 'MemberController.create',
  //Member_details
  'POST /member/add/membership': 'MemberDetailsController.create',
};

module.exports = publicRoutes;
