var cancellable =function (fn, args, t){
  fn(...args)
  const myTime = setInterval(() => {
    console.log(fn(...args));
  }, t);

  return () => clearInterval(myTime);
};
const fn = (x) => x * 2;
const args = [4],
  t = 35,
  cancelTimeMs = 190;
const cancel = cancellable(fn, args, t);
setTimeout(cancel, cancelTimeMs);
