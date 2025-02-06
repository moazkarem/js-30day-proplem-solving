var once = function(fn) {
    let calls = 0
  return function(...args){
    calls ++
    if(calls>1){
     return undefined 
    }
      return fn(...args)
  }
};
 let fn = (a,b,c) => (a + b + c)
 let onceFn = once(fn)
 console.log(onceFn(1,2,3))
 console.log(onceFn(1 ,5 ,6))