function UserControllerRouter(router) {
  router.post('/login', UserController.login);
  router.get('/login', UserController.oneClickLogin);

  router.post('/register', UserController.oneClickLogin);

  router.get('/forgot-password', UserController.forgotPassword);
};

const UserController = {
  // Simple login by username & password
  login(req, res, next) {
    // do login...
    // return { token }
  },

  // Validate token and login if success
  oneClickLogin(req, res, next) {
    // validate token
    // do login
    // return { token }
  },

  // Register a costumer user
  register(req, res, next) {
    // create user with role = customer
    // Send email confirmation with oneClickLogin link
    // return ok
  },

  // Request an email link to reset password.
  forgotPassword(req, res, next) {
    // send email...
    // return ok
  }
};

module.exports = UserControllerRouter;
