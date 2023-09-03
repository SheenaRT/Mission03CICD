const request = require('supertest');
const app = require('../server');

describe('GET /', () => {
  it('Sanity Test', () => {
    expect(1 + 1).toBe(3);
  });
});
