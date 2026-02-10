const flattenArr = arr =>
  arr.reduce(
    (acc, val) =>
      Array.isArray(val) ? acc.concat(flattenArr(val)) : acc.concat(val),
    []
  );

const nested = [1, [2, [3, 4], 5], 6];
console.log(flattenArr(nested));
