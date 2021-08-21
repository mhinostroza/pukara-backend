import { mongoose } from '../core/connection';

const { Schema } = mongoose;

const UserSchema = new Schema({
  document: {
    type: String,
    require: true,
    index: true,
    unique: true,
  },
  password: { type: String, require: true },
  createdAt: { type: Date, default: Date.now },
  role: { type: String, enum: ['user', 'agent', 'admin'], default: 'user' },
});

const User = mongoose.model('User', UserSchema);

export default User;
