var TimeLimitedCache = function () {
  this.cash = {};
};

TimeLimitedCache.prototype.set = function (key, value, duration) {
  const currentTime = Date.now();
  const isValid = this.cash[key] && this.cash[key].end > currentTime;

  this.cash[key] = {
    value,
    end: currentTime + duration,
  };

  return !!isValid;
};

TimeLimitedCache.prototype.get = function (key) {
  const data = this.cash[key];
  if (data && Date.now() < data.end) {
    return data.value;
  } else {
    return -1;
  }
};

TimeLimitedCache.prototype.count = function () {
  const now = Date.now();
  let counter = 0;

  for (const key in this.cash) {
    if (this.cash[key].end > now) {
      counter++;
    }
  }

  return counter;
};
