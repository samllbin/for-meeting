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
