const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const { fishs } = require('../data/fishs');

describe('fs-any-api routes', () => {
  beforeEach(() => {
    return setup(pool);
  });


  it('GET /api/fishs responds an array of fishs with name and id', async () => {
    const res = await request(app).get('/api/fishs');
    const expected = fishs.map(fish => {
      return {
        id: fish.id,
        name: fish.name
      };
    });
    expect(res.body).toEqual(expected);

  });

  afterAll(() => {
    pool.end();
  });
});
