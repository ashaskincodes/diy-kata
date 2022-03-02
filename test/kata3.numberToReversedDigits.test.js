const {
  numberToReversedDigits
} = require("../src");

describe("numberToReversedDigits", () => {
  it("Returns reversed array of digits when passed a number", () => {
    expect(numberToReversedDigits(54321)).toEqual([1, 2, 3, 4, 5]);
  });
});
