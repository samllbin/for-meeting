function curry(fn, args) {
  //期望参数的个数
  let length = fn.length;

  args = args || [];

  return function () {
    let subArgs = args.slice(0);

    for (let i = 0; i < arguments.length; i++) {
      subArgs.push(arguments[i]);
    }
  };
}
