// compositionn function
//g(f(x))
[1, 2, 3];
var compose = ([...fun]) => {
  return (args) => {
    if (fun.length === 0) {
      return args;
    }
    let lastFunc = fun[fun.length - 1](args);
    for (let i = fun.length - 2; i >= 0; i--) {
      lastFunc = fun[i](lastFunc);
    }
    return lastFunc;
  };
};


const composedFunction = compose([]);
const res = composedFunction(42);
console.log(res);
