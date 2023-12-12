function sum() {
  let args = arguments || [];
  let total = 0;
  function add() {
    arguments = Array.from(arguments);
    if (args) {
      for (let i = 0; i < args.length; i++) {
        arguments.push(args[i]);
      }
      args = [];
    }
    total = arguments.reduce((pre, cur) => {
      return pre + cur;
    }, 0);

    return add;
  }

  add.sumoff = () => {
    return total;
  };

  return add;
}

console.log(sum(1, 2).sumoff());
console.log(sum(1, 2)(3).sumoff());
