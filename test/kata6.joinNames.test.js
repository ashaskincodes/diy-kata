const { joinNames } = require("../src");

describe("joinNames", () => {
  it("returns string with names separated by comma then &", () => {
    expect(
      joinNames([
        {
          name: "Bart"
        },
        {
          name: "Lisa"
        },
        {
          name: "Maggie"
        }
      ])
    ).toBe("Bart, Lisa & Maggie");
  });
});
