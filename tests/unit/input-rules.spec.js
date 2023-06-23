import { required } from "@/components/input-rules";

describe("required", () => {
  it("should return true if value is not null or empty", () => {
    const value = "Hello";

    const result = required(value);

    expect(result).toBe(true);
  });

  it("should return an error message if value is null", () => {
    const value = null;
    const expected = "This field is required";

    const result = required(value);

    expect(result).toBe(expected);
  });

  it("should return an error message if value is an empty string", () => {
    const value = "";
    const expected = "This field is required";

    const result = required(value);

    expect(result).toBe(expected);
  });

  it("should return true if value is a non-empty array", () => {
    const value = [1, 2, 3];

    const result = required(value);

    expect(result).toBe(true);
  });

  it("should return true if value is a non-empty object", () => {
    const value = { name: "John", age: 25 };

    const result = required(value);

    expect(result).toBe(true);
  });

  it("should return true if value is a non-zero number", () => {
    const value = 10;

    const result = required(value);

    expect(result).toBe(true);
  });

  // Add more test cases for different scenarios
});
