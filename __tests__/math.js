import { sum } from "../src/math";

describe("Sum", () => {
  it("of 2 and 5 should return 7", () => {
    const result = sum(2, 5);
    expect(result).toBe(7);
  });
});
