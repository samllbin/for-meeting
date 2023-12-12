function sum() {
  let total = 0;
  function add() {
    arguments.reduce((pre, cur) => {
      return pre + cur;
    });
  }
}

sum(1, 2).sumoff();
sum(1, 2)(3).sumoff();
