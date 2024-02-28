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

setTimeout(() => {
  console.log(2);
}, 0);

Promise.resolve(3)
  .then((res) => {
    /***** 同级的微任务 ******/
    console.log(res);
    // return 4;
  })
  .then((res) => {
    Promise.resolve(4);
    return 4;
  })
  .finally(function (res) {
    console.log(res);
  })
  .then((res) => console.log(res));

Promise.resolve(5).then((res) => {
  /***** 同级的微任务 ******/
  console.log(res);
});

// 3;
// 5;
// undefined;
// undefined
// 2;
