import mongoose from 'mongoose';

const schema = {
  name: String,
  musics: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Music' }],
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
};

export default mongoose.model('Playlist', new mongoose.Schema(schema));
