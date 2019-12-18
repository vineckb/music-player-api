export default {
  host: 'localhost',
  port: 27017,
  database: process.env.NODE_ENV === 'test' ? 'music_player_test' : 'music_player',
};
