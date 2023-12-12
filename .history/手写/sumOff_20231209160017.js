function sum() {
  let total = 0;
  function add() {
    total = arguments.reduce((pre, cur) => {
      return pre + cur;
    }, 0);
    return add;
  }
}

sum(1, 2).sumoff();
sum(1, 2)(3).sumoff();
