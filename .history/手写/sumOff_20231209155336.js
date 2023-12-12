function sum() {
  let args = arguments || [];
  return function () {
    let subArgs = arguments || [];

    for (let i = 0; i < subArgs.length; i++) {
      args.push(subArgs[i]);
    }
  };
}
sum.prototype.sumoff = () => {
  args.reduce((pre, cur) => {
    pre += cur;
    return pre;
  }, 0);
};

sum(1, 2).sumoff();
sum(1, 2)(3).sumoff();
