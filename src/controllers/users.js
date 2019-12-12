const UserModel = require('../models/user');

module.exports = router => {
  router.get('/', function(req, res, next) {
    UserModel.find({}, (err, items) => {
      res.send({ items: items.map(i => i) })
    })
  });
}
