const MusicModel = require('../models/Music');

module.exports = {
  list(req, res, next) {
    MusicModel.find({}, (err, items) => {
      res.send({ items: items.map(i => i) })
    })
  },

  show(req, res, next) {
    const music = MusicModel.findById(req.params.id);

    res.send(music);
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