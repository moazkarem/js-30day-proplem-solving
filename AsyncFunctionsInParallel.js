function promiseAll(functions) {
  return new Promise((resolve, reject) => {
    let length = functions.length;
    let count = 0;
    const resulte = [];

    functions.map((fn, idx) =>
      fn()
        .then((val) => {
          resulte[idx] = val;
          count++;
          if (count === length) {
            resolve(resulte);
          }
        })
        .catch((err) => {
          reject(err);
        })
    );
    if (length === 0) {
      resolve([]);
    }
  });
}

const promise1 = Promise.resolve(10);
const promise2 = Promise.resolve(5);

const promises = promiseAll(
[  () => promise1,
  () => promise2]
);

promises.then((data) => console.log(data)).catch((err) => console.log(err));
