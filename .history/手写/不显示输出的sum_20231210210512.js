function sum() {
  let total = 0;
  let args = arguments || [];
  args = Array.from(args);

  args.reduce((pre, cur) => {
    return pre + cur;
  }, total);
  function temp() {
    let args = arguments || [];
    args = Array.from(args);

    args.reduce((pre, cur) => {
      return pre + cur;
    }, total);
    return temp;
  }
  temp[Symbol.for("nodejs.util.inspect.custom")] = function () {
    return total;
  };
  return temp;
}

console.log(sum(1, 2)(3)(4, 5));
