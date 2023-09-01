const request = require("supertest");
const app = require("./server");

describe("GET /", () => {
  it("should respond with an array of car values", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    // Add more assertions as needed.
    //Blah blah blah
    //Blah blah blah
    //Blah blah blah
    //Blah blah blah
    //Blah blah blah
    //Blah blah blah
  });
});
