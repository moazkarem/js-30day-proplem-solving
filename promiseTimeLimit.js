var timeLimit = function (fn, t) {
  return async function (...args) {
   const promise1 = new Promise((resolve , reject)=>{
    resolve(fn(...args))
   })
   const promise2 = new Promise((resolve , reject)=>{
    setTimeout(()=>{
        reject('Time Limit Exceeded')
    } , t)
   })
 return Promise.race([promise1 , promise2])
  };
};

const limited = timeLimit((t) => new Promise((res) => setTimeout(res, t)), 100);
limited(150).catch(console.log);
