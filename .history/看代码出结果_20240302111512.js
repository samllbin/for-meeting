// setTimeout(() => {
//   new Promise((resolve) => {
//     resolve();
//   }).then(() => {
//     console.log("test");
//   });

//   console.log(4);
// });

// new Promise((resolve) => {
//   resolve();
//   console.log(1); /* 这是整体代码这个宏任务中的同步代码，第一个输出 */
// }).then(() => {
//   setTimeout(() => {
//     console.log("jrd");
//     Promise.resolve().then(() => {
//       console.log("jrd_sb");
//     });
//   });
//   console.log(3);
//   Promise.resolve()
//     .then(() => {
//       console.log("before timeout");
//     })
//     .then(() => {
//       Promise.resolve().then(() => {
//         console.log("also before timeout");
//       });
//     });
// });
// console.log(2);

// 1
// 2
// 3
// before Timeout
// also before Timeout
//4
// test
// jrd
// jrd_sb

//.then 或.catch 的参数期望是函数，传入非函数则会发生值透传。
//当.then中未显示返回值时，默认返回undefined供后续的.then使用

// setTimeout(() => {
//   console.log(2);
// }, 0);

// Promise.resolve(3)
//   .then((res) => {
//     /***** 同级的微任务 ******/
//     console.log(res);
//   })
//   .then((res) => {
//     Promise.resolve(4);
//     return 100;
//   })
//   .finally(function (res) {
//     console.log(res);
//   })
//   .then((res) => console.log(res));

// Promise.resolve(5).then((res) => {
//   /***** 同级的微任务 ******/
//   console.log(res);
// });

// 3;
// 5;
// undefined;
// undefined
// 2;

// async function async1() {
//   console.log("async1 start");
//   await async2();
//   console.log("async1 end");
// }

// async function async2() {
//   console.log("async2");
// }

// console.log("script start");

// setTimeout(() => {
//   console.log("setTimeout");
// }, 0);

// async1();

// new Promise((resolve) => {
//   console.log("promise1");
//   resolve();
// }).then(() => {
//   console.log("promise2");
// });

// script start
// async1 start
// async2
// promise1
// async1 end
// promise2
// setTimeout

// setTimeout(function () {
//   console.log("1");
// }, 0);
// async function async1() {
//   console.log(2);
//   const data = await async2();
//   console.log("3");
//   return data;
// }
// async function async2() {
//   return new Promise((resolve) => {
//     console.log("4");
//     resolve("async2的结果");
//   }).then((data) => {
//     console.log("5");
//     return data;
//   });
// }
// async1().then((data) => {
//   console.log("6");
//   console.log(data);
// });
// new Promise(function (resolve) {
//   console.log("7");
//   resolve();
// }).then(function () {
//   console.log("8");
// });

// 2;
// 4;
// 7;
// 5;
// 8;
// 3;
// 6;
// async2的结果;
// 1;

// new Promise((resolve, reject) => {
//   console.log(1);
//   new Promise((resolve, reject) => {
//     console.log(2);
//     setTimeout(() => {
//       resolve(3);
//       console.log(4);
//     });
//   }).then((data) => {
//     setTimeout(() => {
//       console.log(5);
//     });
//     console.log(data);
//   });
//   setTimeout(() => {
//     resolve(6);
//     console.log(7);
//   });
// }).then((data) => {
//   console.log(data);
//   setTimeout(() => {
//     console.log(8);
//   });
//   console.log(9);
// });

// 1
// 2
// 4
// 3
// 7
// 6
// 9
// 5
// 8

async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}
async function async2() {
  console.log("async2 start");
  return new Promise((resolve, reject) => {
    resolve();
    console.log("async2 promise");
  });
}
console.log("script start");
setTimeout(function () {
  console.log("setTimeout");
}, 0);
async1();
new Promise(function (resolve) {
  console.log("promise1");
  resolve();
})
  .then(function () {
    console.log("promise2");
  })
  .then(function () {
    console.log("promise3");
  });
console.log("script end");
// script start
// async1 start
// async2 start
// async2 promise
// promise 1
// script end
// async1 end
// promise 2
// setTimeout
