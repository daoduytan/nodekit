import 'babel-polyfill';

const mongodb = async (mongoose, cb) =>
  mongoose
    .connect(process.env.MONGODB_URL, { useNewUrlParser: true })
    .then(() => {
      console.log('Connecting with database');
      return cb();
    })
    .catch(err => {
      console.log('Not Connected to Database ERROR! ', err);
    }); // with mla

export default mongodb;
