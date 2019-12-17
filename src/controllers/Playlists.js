import PlaylistModel from '../models/Playlist.js';

export default {
  async list(req, res, next) {
    const playlists = await PlaylistModel.find({});

    res.json(playlists);
  },

  async show(req, res, next) {
    const playlist = await PlaylistModel.findById(req.params.id).populate('musics');

    res.json(playlist);
  },

  async create(req, res, next) {
    const playlist = await PlaylistModel.create(req.body);

    res.json(playlist);
  },

  async update(req, res, next) {
    await PlaylistModel.update({ _id: req.params.id }, req.body);

    res.end();
  },

  async delete(req, res, next) {
    await PlaylistModel.deleteOne({ _id: req.params.id });
    res.end();
  },

  async addMusic(req, res, next) {
    const playlist = await PlaylistModel.findById(req.params.id);
    playlist.musics.push(req.params.musicId);
    await playlist.save();

    res.end();
  },

  async removeMusic(req, res, next) {
    const playlist = await PlaylistModel.findById(req.params.id);
    playlist.musics = playlist.musics.filter(item => item !== req.params.musicId);
    await playlist.save();

    res.end();
  },
};
