const MusicModel = require('../models/music');

module.exports = router => {
  router.get('/', function(req, res, next) {
    MusicModel.find({}, (err, items) => {
      res.send({ items: items.map(i => i) })
    })
  });
}
