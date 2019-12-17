const {MongoClient} = require('mongodb');
const config = {
  host: 'localhost',
  port: 27017,
  database: 'music_player_test',
};

let connection;
let db;

describe('insert', () => {
  beforeAll(async () => {
    const url = `mongodb://${config.host}:${config.port}/${config.database}`;
    connection = await MongoClient.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    db = await connection.db();
  });

  afterAll(async () => {
    await connection.close();
  });

});

module.exports = {
  db, connection
};
