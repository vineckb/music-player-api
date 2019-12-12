import { Schema, model } from 'mongoose';
 
const schema = {
  name: String,
  email: String,
  password: String,
  role: String,
  avatar: String,
};

export default model('User', new Schema(schema));