import { Schema, model } from 'mongoose';
 
const schema = {
  name: String,
  artist: String,
  album: String,
  file: String,
  cover: String,
  time: Number,
};

export default model('Music', new Schema(schema));