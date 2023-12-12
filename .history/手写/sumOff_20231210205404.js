function sum() {
  // arguments = Array.from(arguments);
  arguments = Array.prototype.slice.call(arguments);
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

  add.sumoff = () => {
    return total;
  };

  return add;
}

console.log(sum(1, 2).sumoff());
console.log(sum(1, 2)(3).sumoff());
console.log(sum(1, 2)(3)(4, 5).sumoff());

function sum1() {
  arguments = Array.from(arguments);

  let total = arguments.reduce((pre, cur) => {
    return pre + cur;
  }, 0);
  function add() {
    total = arguments.reduce((pre, cur) => {
      return pre + cur;
    }, total);
  }
  add.sumoff = () => {
    return total;
  };
  return add;
}

console.log(sum1(1, 2).sumoff());
console.log(sum1(1, 2)(3).sumoff());
console.log(sum1(1, 2)(3)(4, 5).sumoff());
