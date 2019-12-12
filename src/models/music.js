const { Schema, model } = require('mongoose');
 
const MusicSchema = new Schema({
  name: String,
  artist: String,
  album: String,
});

module.exports = model('Music', MusicSchema);