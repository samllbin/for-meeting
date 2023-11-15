function myInstanceOf(needJudge, host) {
  //获取原型
  //Object.getPrototypeOf获取__proto__
  let proto = Object.getPrototypeOf(needJudge);
  //获取构造函数的prototype
  let prototype = host.prototype;

  while (true) {
    if (!proto) return false;
  }
}
