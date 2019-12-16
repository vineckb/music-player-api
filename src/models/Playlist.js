import { Schema, model } from 'mongoose';
 
const schema = {
  name: String,
  musics: [{ type: Schema.Types.ObjectId, ref: 'Music' }],
  author: { type: Schema.Types.ObjectId, ref: 'User' },
};

export default model('Playlist', new Schema(schema));