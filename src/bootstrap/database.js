import mongoose from 'mongoose';
import config from '../config/database.js';

export default function () {
  const url = `mongodb://${config.host}:${config.port}/${config.database}`;

  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
  };

  mongoose.connect(url, options);

  mongoose.connection.on('error', (error) => {
    console.group('MongoDB connection error')
    console.error(error.name)
    console.error(error.message)
    console.groupEnd();
  });
}
