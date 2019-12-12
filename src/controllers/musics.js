const Music = require('../models/music');

module.exports = router => {
  router.get('/', function(req, res, next) {
    Music.find({}, (err, items) => {
      res.send({ items: items.map(i => i) })
    })
  });
}
