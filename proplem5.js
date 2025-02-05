var map = function (arr, fn) {
  const newarr = [];
  for (let i = 0; i < arr.length; i++) {
    newarr.push(fn(arr[i], i));
  }
  return newarr;
};

// console.log(map([10,20,30] , function constant() { return 42; }))

const pro = new Promise((resolve, reject) => {
    throw Error('i am err here')
  resolve("hell  oresolve");
  reject("hell  reject");
});

pro
  .then((res) => console.log(res))
  .catch((err) => console.log(err.message))
  .finally(()=>{
    console.log("finally ended")
  });
