const request = require('supertest');
const { server } = require('../server'); // Importing the Express app, not server

describe('GET /', () => {
  it('should respond with an array of car values', async () => {
    const response = await request(server).get('/');

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    // Add more assertions as needed.
  });
});

// describe("Server start-up", () => {
//   test("should start server without errors", async () => {
//     const response = await request(server).get("/");
//     expect(response.status).toBe(200);
//   });
// });
