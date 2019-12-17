import MusicModel from '../models/Music.js';

export default {
  async list(req, res, next) {
    const musics = await MusicModel.find({})

    res.json(musics)
  },

  async show(req, res, next) {
    const music = await MusicModel.findById(req.params.id);

    res.json(music);
  },

  async create(req, res, next) {
    const music = await MusicModel.create(req.body);

    res.json(music);
  },

  async update(req, res, next) {
    await MusicModel.update({ _id: req.params.id }, req.body);

    res.end();
  },

  async delete(req, res, next) {
    await MusicModel.deleteOne({ _id: req.params.id });
    res.end();
  },
};
