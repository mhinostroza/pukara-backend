import { mongoose } from '../core/connection';

const { Schema } = mongoose;

const PatientSchema = new Schema({
  userID: {
    type: String,
  },
  document: {
    type: String,
  },
  sign: {
    data: Buffer,
    contentType: String,
  },
});

const Patient = mongoose.model('Patient', PatientSchema);

export default Patient;
