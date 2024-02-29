function promiseAll(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("参数必须是数组");
  }
  let res = [];
  let len = arr.length;
  let resCount = 0;
  for (let i = 0; i < len; i++) {
    Promise.resolve(arr[i]).then(
      (data) => {
        resCount++;
        res[i] = data;
        if (resCount === len) {
          return resolve(res);
        }
      },
      (err) => {
        return reject(err);
      }
    );
  }
}

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
promiseAll([p3, p1, p2]).then((res) => {
  console.log(res); // [3, 1, 2]
});
