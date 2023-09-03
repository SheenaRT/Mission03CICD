const request = require('supertest');
const app = require('../server');

describe('GET /', () => {
  it('Sanity Test', () => {
    expect(1 + 1).toBe(2);
  });
  it('Sanity Test 2', () => {
    expect(2 + 2).toBe(4);
  });
});
