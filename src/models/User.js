import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  avatar: String,
});

UserSchema.pre('save', function(next){
  this.password = bcrypt.hashSync(this.password, 10);
  next();
});

export default mongoose.model('User', UserSchema);
