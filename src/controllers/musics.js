import MusicModel from '../models/Music';

export default {
  async list(req, res, next) {
    const items = await MusicModel.find({})
    
    res.send({items})
  },

  async show(req, res, next) {
    const music = await MusicModel.findById(req.params.id);

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