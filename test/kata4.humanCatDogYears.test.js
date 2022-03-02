const { humanCatDogYears } = require("../src");

describe("humanCatDogYears", () => {
    it("returns a human age as an array of three numbers - human years, cat years, dog years", () => {
        expect(humanCatDogYears(10)).toStrictEqual([10, 56, 64]);
    });
});