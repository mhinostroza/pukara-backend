import { mongoose } from '../core/connection';

const { Schema } = mongoose;

const ScheduleSchema = new Schema({
  userID: {
    type: String,
  },
  name: {
    type: String,
  },
  date: {
    type: String,
  },
  state: {
    type: String,
  },
});

const Schedule = mongoose.model('Schedule', ScheduleSchema);

export default Schedule;
