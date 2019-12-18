import mongoose from 'mongoose';
import config from '../../config/database.js';

export async function connect() {
  const uri = `mongodb://${config.host}:${config.port}/${config.database}`;

  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
  };

  mongoose.connect(uri, options);
}

export async function closeDatabase() {
    await mongoose.connection.close();
}

/**
 * Remove all the data for all db collections.
 */
export async function clearDatabase() {
    const collections = mongoose.connection.collections;

    for (const key in collections) {
        const collection = collections[key];
        await collection.deleteMany();
    }
}

export default {
  connect,
  closeDatabase,
  clearDatabase
}
