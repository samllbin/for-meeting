function promiseRace(promises) {
  return new Promise(function (resolve, reject) {
    promises.forEach((promise) => {
      promise.then(resolve, reject);
    });
  });
}
