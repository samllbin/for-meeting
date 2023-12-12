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

// const add = function (m) {
//   var temp = function (n) {
//     return add(m + n);
//   };
//   temp[Symbol.for("nodejs.util.inspect.custom")] = function () {
//     return m;
//   };
//   return temp;
// };
// console.log(add(3)(4)(5)); //
// console.log(add(3)(6)(9)(25)); // 43

// const first = () =>
//   new Promise((resovle, reject) => {
//     console.log(1);
//     const p = new Promise((resovle, reject) => {
//       console.log(2);
//       setTimeout(() => {
//         console.log(3);
//         resovle(4);
//       }, 0);
//       resovle(5);
//     });
//     resovle(6);
//     p.then((arg) => {
//       console.log(arg);
//     });
//   });
// first().then((arg) => {
//   console.log(arg);
// });
// console.log(7);

//1, 2, 7, 5, 6, 3

// function red() {
//   console.log("red");
// }
// function green() {
//   console.log("green");
// }
// function yellow() {
//   console.log("yellow");
// }

// const task = (timer, light, callback) => {
//   setTimeout(() => {
//     if (light === "red") {
//       red();
//     } else if (light === "green") {
//       green();
//     } else if (light === "yellow") {
//       yellow();
//     }
//     callback();
//   }, timer);
// };

// const step = () => {
//   task(3000, "red", () => {
//     task(2000, "green", () => {
//       task(1000, "yellow", step);
//     });
//   });
// };
// step();

// function redLight(callback) {
//   setTimeout(function () {
//     console.log("红灯");
//     callback();
//   }, 3000);
// }

// function greenLight(callback) {
//   setTimeout(function () {
//     console.log("绿灯");
//     callback();
//   }, 1000);
// }

// function yellowLight(callback) {
//   setTimeout(function () {
//     console.log("黄灯");
//     callback();
//   }, 2000);
// }

// function trafficLight() {
//   redLight(function () {
//     greenLight(function () {
//       yellowLight(function () {
//         trafficLight(); // 递归调用，形成循环
//       });
//     });
//   });
// }

// // 启动交替亮灯
// trafficLight();

// function a(x) {
//   return { x };
// }
// console.log(a(1));
function findExpressions(arr, target) {
  const result = [];

  // 辅助函数，用于递归和回溯
  function backtrack(index, currentSum, expression) {
    // 如果已经处理完所有数字
    if (index === arr.length) {
      console.log(expression);
      // 如果当前和等于目标值，则将表达式添加到结果中
      if (currentSum === target) {
        result.push(expression);
      }
      return;
    }

    // 选择将当前数字加到当前和中
    backtrack(
      index + 1,
      currentSum + arr[index],
      expression + "+" + arr[index]
    );

    // 选择将当前数字减去当前和中
    backtrack(
      index + 1,
      currentSum - arr[index],
      expression + "-" + arr[index]
    );
  }

  // 从第一个数字开始递归
  backtrack(0, 0, "");

  return result;
}

// 测试
const arr = [1, 1, 1, 1, 2, 4, 5, 6];
const target = 9;
const expressions = findExpressions(arr, target);

console.log(expressions);

function findExpression(arr, target) {
  let result = [];

  function track(index, currentSum, expression) {
    if (index === arr.length) {
      if (currentSum === target) {
        result.push(expression);
      }
      return;
    }

    track(index++, currentSum + arr[index], expression + "+" + arr[index]);
  }
}
