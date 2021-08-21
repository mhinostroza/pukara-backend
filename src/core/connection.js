import mongoose from 'mongoose';

mongoose.connect('mongodb://myUserAdmin:lima123@34.193.116.75:27017/admin', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

export { mongoose };
