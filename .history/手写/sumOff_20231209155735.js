function sum() {
  let args = arguments || [];
  sum.sumoff = () => {
    args.reduce((pre, cur) => {
      pre += cur;
      return pre;
    }, 0);
  };
  return function () {
    let subArgs = arguments || [];

    for (let i = 0; i < subArgs.length; i++) {
      args.push(subArgs[i]);
    }
    sum(args);
  };
}

sum(1, 2).sumoff();
sum(1, 2)(3).sumoff();
