import request from 'supertest';
import app from '../bootstrap/app.js';
import MusicModel from '../models/Music.js';

describe('GET /musics', function() {
  it('response is ok when musics lists is empty', async function(done) {
    request(app)
      .get('/musics')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, [], done);
  });

  it('response is ok when musics lists isn\'t emtpy', async function(done) {
    const music = await MusicModel.create({ name: 'test' });

    request(app)
      .get('/musics')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .end((err, response) => {
        if (err) done(err);
        expect(response.body.length).toEqual(1);
        done();
      });
  });
});
