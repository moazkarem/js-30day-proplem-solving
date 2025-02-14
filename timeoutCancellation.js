var cancellable = function (fn, args, t) {
  const myTimeout = setTimeout(() => {
    fn(...args);
  }, t);

  return ()=> clearTimeout(myTimeout);
};

const fn = (x) => x * 5;
const args = [2],
  t = 20,
  cancelTimeMs = 50;

console.log(cancellable(fn, args, t))
