let a = "Hello World!";
function first() {
  console.log("Inside first function");
  second();
  console.log("Again inside first function");
}
function second() {
  console.log("Inside second function");
}
first();
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

function testPromise(ready) {
  return new Promise(function (resolve, reject) {
    if (ready) {
      resolve("hello world");
    } else {
      reject("No thanks");
    }
  });
}
// 方法调用
testPromise(true).then(
  function (msg) {
    console.log(msg);
  },
  function (error) {
    console.log("error" + error);
  }
);
