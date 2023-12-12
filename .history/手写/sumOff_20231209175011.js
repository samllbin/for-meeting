function sum() {
  arguments = Array.from(arguments);
  let args = arguments || [];
  let total = 0;
  total = args.reduce((pre, cur) => {
    return pre + cur;
  }, 0);
  function add() {
    arguments = Array.from(arguments);
    total = arguments.reduce((pre, cur) => {
      return pre + cur;
    }, total);

    return add;
  }

  add.toString = () => {
    return total;
  };

  return add;
}

console.log(sum(1, 2).sumoff());
console.log(sum(1, 2)(3).sumoff());
console.log(sum(1, 2)(3)(4, 5).sumoff());
