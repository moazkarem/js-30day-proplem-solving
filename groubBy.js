Array.prototype.groupBy = function (fn) {
  let obj = {};
  for (let i = 0; i < this.length; i++) {
    let key = fn(this[i]);
    if (!obj[key]) {
      obj[key] = [];
    }
    obj[key].push(this[i]);
  }
  return obj;
};

console.log(
  [{ id: "1" }, { id: "1" }, { id: "2" }].groupBy(function (item) {
    return item.id;
  })
);
