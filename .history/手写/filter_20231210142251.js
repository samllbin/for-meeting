Array.prototype._filter = function (fn) {
  if (typeof fn !== "function") {
    return;
  }

  let result = [];
  for (let i = 0; i < this.length; i++) {
    fn(this[i]) && result.push(this[i]);
  }

  return result;
};

let arr = [2, 4, 6, 7, 9, 10];

let result = arr._filter((item) => {
  return item % 2;
});
