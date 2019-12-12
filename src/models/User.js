const { Schema, model } = require('mongoose');
 
const schema = {
  name: String,
  email: String,
  password: String,
  role: String,
  avatar: String,
};

module.exports = model('User', new Schema(schema));