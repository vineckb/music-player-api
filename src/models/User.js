import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';
 
const UserSchema = new Schema({
  name: String,
  email: String,
  password: String,
  avatar: String,
});

UserSchema.pre('save', function(next){
  this.password = bcrypt.hashSync(this.password, 10);
  next();
});

export default model('User', UserSchema);