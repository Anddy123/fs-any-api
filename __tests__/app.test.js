const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const { fishs } = require('../data/fishs');

describe('fs-any-api routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/api/fishs responds an array of fishs with name and id', async () => {
    const res = await request(app).get('/api/fishs');
    const expected = fishs.map(fish => {
      return {
        id: fish.id,
        name: fish.name
      };
    });
    expect(res.body).toEqual(expected);
  });

  it('/api/fishs/:id responds with all detail of a fish', async () => {
    const res = await request(app).get('/api/fishs/1');
    const expected = { 
      id: 1,
      name: 'Bass',
      price: 10,
      image: 'https://www.maine.gov/ifw/images/largemouth-bass600.jpg',
      description: 'A fish that lives in the ocean',
      category: 'freshwater',
    };
    expect(res.body).toEqual(expected);
  });

  afterAll(() => {
    pool.end();
  });
});
