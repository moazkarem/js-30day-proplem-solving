function memoize(fn) {
  let cash = {};
  let callCount = 0;

  return function (...args) {
    const key = JSON.stringify(args);
    if (cash.hasOwnProperty(key)) {
      return cash[key];
    }
    callCount++;
    cash[key] = fn(...args);
    return cash[key];
  };
}
let callCount = 0;
const memoizedFn = memoize(function (a, b) {
  callCount += 1;
  return a + b;
});
console.log(memoizedFn(2, 3));
