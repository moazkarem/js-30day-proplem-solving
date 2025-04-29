var debounce = function (fn, t) {
  let timeOut;
  return function (...args) {
    clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      fn(...args);
    }, t);
  };
};
