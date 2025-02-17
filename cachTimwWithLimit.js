var TimeLimitedCache = function () {
  this.cash = {};
};

TimeLimitedCache.prototype.set = function (key, value, duration) {
  let end = Date.now() + duration;
  this.cash[key] = {
    value,
    end,
  };
  if (this.cash[key].end > end) {
    return true;
  } else {
    return false;
  }
};

TimeLimitedCache.prototype.get = function (key) {
  if (Date.now() < this.cash[key].end) {
    return this.cash[key].value;
  } else {
    return -1;
  }
};

TimeLimitedCache.prototype.count = function () {
  let counter = 0;
  const keysNum = Object.keys(this.cash);
  keysNum.map((item) => {
    if (this.cash[item].end < Date.now()) {
      counter++;
    }
  });
  return keysNum.length;
};

const time = new TimeLimitedCache();

console.log(time.set(1, 42, 100));
console.log(time.get(1));
console.log(time.count());
// console.log('name' in obj)
