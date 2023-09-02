const request = require("supertest");
const app = require("../server");

process.env.PORT = 8080;

describe("GET /", () => {
  it("should respond with an array of car values", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    // Add more assertions as needed.
  });
});

describe("Server start-up", () => {
  let server;

  beforeAll((done) => {
    server = app.listen(port, done);
  });

  afterAll((done) => {
    server.close(done);
  });

  test("should start server without errors", async () => {
    const response = await request(server).get("/"); // Assuming you have a route handler for '/'
    expect(response.status).toBe(200); // Check if the server responds with HTTP 200 for the root route
  });
});
