function myInstanceOf(needJudge, host) {
  //获取原型
  //Object.getPrototypeOf获取__proto__
  let proto = Object.getPrototypeOf(needJudge);
  //获取构造函数的prototype
  let prototype = host.prototype;

  while (true) {
    if (!proto) return false;

    if (proto === prototype) return true;
    proto = Object.getPrototypeOf(proto);
  }
}

const obj = {};
const number = 1;
const foo = function () {};
const string = " ";
console.log(
  myInstanceOf(obj, Object),
  myInstanceOf(numer, String),
  myInstanceOf(foo, Object),
  myInstanceOf(string, String)
);
