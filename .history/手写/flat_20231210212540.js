Array.prototype._flat = function (arr, deep) {
  let arr;
  if (this) {
  }
  if (!Array.isArray(arr) || deep <= 0) {
    return arr;
  }

  return arr.reduce((pre, next) => {
    if (Array.isArray(next)) {
      return pre.concat(_flat(next, deep - 1));
    } else {
      return pre.concat(next);
    }
  }, []);
};

let arr = [1, [2, 3, [4, [5]]]];

console.log(_flat(arr, 1));
console.log(_flat(arr, 2));
console.log(_flat(arr, 3));

console.log(arr.flat(1));
console.log(arr.flat(2));
console.log(arr.flat(3));
