import { mongoose } from '../core/connection';

const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
  },
  lastName: {
    type: String,
  },
  document: {
    type: String,
    require: true,
    index: true,
    unique: true,
    sparse: true,
  },
  verify: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    index: true,
    unique: true,
    sparse: true,
  },
  cellPhone: {
    type: String,
    require: true,
    index: true,
    unique: true,
    sparse: true,
  },
  password: { type: String, require: true },
  createdAt: { type: Date, default: Date.now },
  role: {
    type: String,
    enum: ['patient', 'recorder', 'monitoring', 'admin'],
    default: 'patient',
  },
});

const User = mongoose.model('User', UserSchema);

export default User;
