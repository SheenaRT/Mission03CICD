const request = require("supertest");
const EstimateCarValue = require("../components/EstimateCarValue");

describe("EstimateCarValue", () => {
  // Test for valid inputs
  test("should correctly calculate car value for valid inputs", () => {
    const result = EstimateCarValue("Civic", 2014);
    // Based on your function, the 'Civic' would have a value of 37 (C=3, I=9, V=22, I=9, C=3)
    // So, 37 * 100 + 2014 = 5714
    expect(result).toEqual({ "Car Value": "$6614" });
  });

  // Test for negative years
  test("should return error for negative years", () => {
    const result = EstimateCarValue("CarName", -5);
    expect(result).toEqual({ error: "Negative year" });
  });

  // Test for non-number year types
  test("should return error for non-number year types", () => {
    const result = EstimateCarValue("CarName", "Twenty twenty");
    expect(result).toEqual({ error: "Wrong data type" });
  });
});
