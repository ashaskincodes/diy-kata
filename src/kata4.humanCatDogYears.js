const humanCatDogYears = number => {
    const catAge = (((number - 2) * 4) + 15 + 9);
    const dogAge = (((number - 2) * 5) + 15 + 9);
    const ages = [number, catAge, dogAge];
    return ages;
};

module.exports = humanCatDogYears;
