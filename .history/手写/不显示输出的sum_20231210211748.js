function sum(...args) {
  let total = 0;

  //   arguments = Array.from(arguments);

  //   total = arguments.reduce((pre, cur) => {
  //     return pre + cur;
  //   }, 0);
  function temp() {
    console.log(arguments);
    arguments.toString();
    let args = arguments || [];
    args = Array.from(args);

    total = args.reduce((pre, cur) => {
      return pre + cur;
    }, total);
    return temp;
  }
  temp[Symbol.for("nodejs.util.inspect.custom")] = function () {
    return total;
  };
  return temp(...args);
}

console.log(sum(1, 2)(3)(4, 5));
