function sum() {
  let total = 0;
  function temp() {
    let args = arguments || [];
    args = Array.from(args);

    args.reduce((pre, cur) => {
      return pre + cur;
    }, total);
  }
  temp[Symbol.for("nodejs.util.inspect.custom")] = function () {
    return total;
  };
  temp(arguments);
}

console.log(sum(1, 2)(3)(4, 5));
