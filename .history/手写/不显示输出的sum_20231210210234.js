function sum() {
  let total = 0;
  function temp() {
    let args = arguments || [];
    args = Array.from(args);

    args.reduce((pre, cur) => {
      return pre + cur;
    }, total);
  }
  temp.valueOf = function () {
    return total;
  };
}
