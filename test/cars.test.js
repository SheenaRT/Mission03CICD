const request = require('supertest');
const { app } = require('../server');

describe('GET /', () => {
  it('Sanity Test', () => {
    expect(1 + 1).toBe(2);
  });
  it('Sanity Test 2', () => {
    expect(2 + 2).toBe(4);
  });
});

describe('GET /', () => {
  it('should respond with an array of car values', async () => {
    const response = await request(app).get('/');

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    // Add more assertions as needed.
  });
});

describe('Server start-up', () => {
  test('should start server without errors', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });
  
});
