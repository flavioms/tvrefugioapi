import * as Mongoose from 'mongoose';
let database: Mongoose.Connection;
export const connect = () => {
  // add your own uri below
  const uri = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@ds011291.mlab.com:11291/teste`;
  if (database) {
    return;
  }
  Mongoose.connect(uri, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  database = Mongoose.connection;
  database.once('open', async () => {
    console.log('Connected to database');
  });
  database.on('error', () => {
    console.log('Error connecting to database');
  });
};
export const disconnect = () => {
  if (!database) {
    return;
  }
  Mongoose.disconnect();
};
