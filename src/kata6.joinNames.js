const joinNames = namesObj => {
  let str = "";
  if (namesObj.length !== 0) {
    const last = namesObj.pop();
    str = namesObj
      .map((val, i, arr) => {
        if (i !== arr[arr.length - 1]) {
          return val.name;
        }
      })
      .join(", ");

    str += str !== "" ? ` & ${last.name}` : last.name;
  }

  return str;
};

module.exports = joinNames;
