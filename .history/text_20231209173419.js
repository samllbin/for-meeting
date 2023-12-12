// let a = "Hello World!";
// function first() {
//   console.log("Inside first function");
//   second();
//   console.log("Again inside first function");
// }
// function second() {
//   console.log("Inside second function");
// }
// first();
//执行顺序
//先执行second(),在执行first()

// async function async1() {
//   console.log("async1 start");
//   await async2();
//   console.log("async1 end");
// }
// async function async2() {
//   console.log("async2");
// }
// console.log("script start");
// async1();
// console.log("script end");

// function testPromise(ready) {
//   return new Promise(function (resolve, reject) {
//     if (ready) {
//       resolve("hello world");
//     } else {
//       reject("No thanks");
//     }
//   });
// }
// // 方法调用
// testPromise(false).then(
//   function (msg) {
//     console.log(msg);
//   },
//   function (error) {
//     console.log("error" + error);
//   }
// );

// const promise = new Promise((resolve, reject) => {
//   resolve("success1");
//   reject("error");
//   resolve("success2");
// });
// promise
//   .then((res) => {
//     console.log("then:", res);
//   })
//   .catch((err) => {
//     console.log("catch:", err);
//   });

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("success");
//   }, 1000);
// });
// const promise2 = promise1.then(() => {
//   //   throw new Error("error!!!");
//   console.log("error");
// });
// console.log("promise1", promise1);
// console.log("promise2", promise2);
// setTimeout(() => {
//   console.log("promise1", promise1);
//   console.log("promise2", promise2);
// }, 2000);

// (function () {
//   var x = (y = 1);
// })();
// var z;

// console.log(y); // 1
// console.log(z); // undefined
// console.log(x);

// function a() {
//   console.log(b);
//   var b = 1;
// }
// console.log(a());

// var a = 0;
// var b = 0;
// var c = 0;

// function fn(a) {
//   console.log(a++, c);
//   function fn2(b) {
//     console.log(a, b, c);
//   }
//   var c = 4;
//   fn = fn2;
// }

// fn(1); //1 undefined
// fn(2); //2 2 4
var add = function (m) {
  var temp = function (n) {
    return add(m + n);
  };
  temp.toString = function () {
    return m;
  };
  return temp;
};
console.log(add(3)(4)(5)); // 12
console.log(add(3)(6)(9)(25)); // 43
