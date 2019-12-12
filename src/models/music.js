const { Schema, model } = require('mongoose');
 
const schema = {
  name: String,
  artist: String,
  album: String,
  file: String,
  cover: String,
  time: Number,
};

module.exports = model('Music', new Schema(schema));