import MusicModel from '../models/Music';

export default {
  async list(req, res, next) {
    const musics = await MusicModel.find({})
    
    res.send(musics)
  },

  async show(req, res, next) {
    const music = await MusicModel.findById(req.params.id);

    res.send(music);
  },

  async create(req, res, next) {
    const music = await MusicModel.create(req.body);

    res.send(music);
  },

  update(req, res, next) {
    // ...
  },

  delete(req, res, next) {
    // ...
  },
};