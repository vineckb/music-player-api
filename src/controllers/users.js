const UserModel = require('../models/User');

module.exports = {
  list(req, res, next) {
    UserModel.find({}, (err, items) => {
      res.send({ items: items.map(i => i) })
    })
  },

  show(req, res, next) {
    // ...
  },

  create(req, res, next) {
    // ...
  },

  update(req, res, next) {
    // ...
  },

  delete(req, res, next) {
    // ...
  },
};