function promiseRace(promises) {
  return new Promise(function (resolve, reject) {
    promises.forEach((promise) => {
      promise.then(resolve, reject);
    });
  });
}
// let promiseRace = (promiseArr) => {
//   return new Promise((resolve, reject) => {
//     for (let promise of promiseArr) {
//       promise.then(resolve, reject);
//     }
//   });
// };
let p1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(1);
  }, 1000);
});
let p2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(2);
  }, 2000);
});
let p3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(3);
  }, 3000);
});
promiseRace([p3, p1, p2])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
