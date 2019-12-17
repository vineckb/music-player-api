import mongoose from 'mongoose';

const schema = {
  name: String,
  artist: String,
  album: String,
  file: String,
  cover: String,
  duration: Number,
};

export default mongoose.model('Music', new mongoose.Schema(schema));
