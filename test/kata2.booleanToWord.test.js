const { booleanToWord } = require("../src");

describe("fizzBuzz", () => {
  it("returns Yes when passed true", () => {
    expect(booleanToWord(7)).toBe('Yes');
    expect(booleanToWord(true)).toBe('Yes');
    });

  it("returns No when passed false", () => {
    expect(booleanToWord(0)).toBe('No');
    expect(booleanToWord(false)).toBe('No');
    });
});