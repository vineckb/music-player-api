const mongoose = require('mongoose');
const { host, port, database } = require('../config/database');

export default function () {
  const url = `mongodb://${host}:${port}/${database}`;
  
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