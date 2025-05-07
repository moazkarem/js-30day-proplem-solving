Array.prototype.last = function () {
  if (this.length < 1) {
    return -1;
  } else {
    return arr[this.length - 1];
  }
};

const arr = [1];
console.log(arr.last());
