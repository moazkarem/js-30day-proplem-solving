var chunk = function (arr, size) {
  let finalarr = [];
  for (let i = 0; i < arr.length; i += size) {
    finalarr.push(arr.slice(i, size + i));
  }
  return finalarr;
};

console.log(chunk([1, 9, 6, 3, 2], 1));
