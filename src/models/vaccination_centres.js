import { mongoose } from '../core/connection';

const { Schema } = mongoose;

const VaccinationCentresSchema = new Schema({
  name: {
    type: String,
  },
  latitude: {
    type: Number,
  },
  longitude: {
    type: Number,
  },
  isPublic: {
    type: Boolean,
  },
});

const Schedule = mongoose.model('VaccinationCentres', VaccinationCentresSchema);

export default Schedule;
