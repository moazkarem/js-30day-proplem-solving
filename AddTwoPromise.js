var addTwoPromises = async function (promise1, promise2) {
  const values = await Promise.all([promise1, promise2]);
  return values.reduce((acc, item) => acc + item, 0);
};
addTwoPromises(Promise.resolve(2), Promise.resolve(2)).then(console.log);
