function numberToReversedDigits(number) {
  return (number + "")
    .split("")
    .map(Number)
    .reverse();
}

module.exports = numberToReversedDigits;
