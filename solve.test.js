const solve = require("./solve");

describe("Basic tests", function () {
  test("Easy", () => {
    expect(solve(1)).toBe(1);
    expect(solve(2)).toBe(2);
  });
  test("Medium", () => {
    expect(solve(22)).toBe(13);
    expect(solve(18)).toBe(18);
    expect(solve(29)).toBe(11);
    expect(solve(45)).toBe(18);
  });
  test("Hard", () => {
    expect(solve(1140)).toBe(33);
    expect(solve(7019)).toBe(35);
  });
});
