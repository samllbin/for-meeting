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

function sum() {
  arguments = Array.from(arguments);

  let total = arguments.reduce((pre, cur) => {
    return pre + cur;
  });
  function add() {
    const first = () =>
      new Promise((resovle, reject) => {
        console.log(1);
        const p = new Promise((resovle, reject) => {
          console.log(2);
          setTimeout(() => {
            console.log(3);
            resovle(4);
          }, 0);
          resovle(5);
        });
        resovle(6);
        p.then((arg) => {
          console.log(arg);
        });
      });
    first().then((arg) => {
      console.log(arg);
    });
    console.log(7);
  }
}
