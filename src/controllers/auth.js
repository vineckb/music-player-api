import UserModel from '../models/User';
const bcrypt = require('bcrypt'); 
const jwt = require('jsonwebtoken');

export default {
  // Simple login by username & password
  async login(req, res, next) {
    const { email } = req.body;
    const user = await UserModel.findOne({ email });
    const match = bcrypt.compareSync(req.body.password, user.password);

    if (!match) {
      return res.json({
        status:"error",
        message: "Invalid email/password!!!"
      });
    }

    const payload = { id: user._id };
    const key = req.app.get('secretKey');
    const options = { expiresIn: '1h' };
    const token = jwt.sign(payload, key, );

    res.json({ user, token });
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
