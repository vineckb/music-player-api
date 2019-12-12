const mongoose = require('mongoose');
const { host, port, database } = require('../config/database');

module.exports = () => {
  mongoose.connect(`mongodb://${host}:${port}/${database}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
}