function promiseRace(promises) {
  return new Promise(function (resolve, reject) {
    promises.forEach((promise) => {
      return promise.then(resolve, reject);
    });
  });
}
