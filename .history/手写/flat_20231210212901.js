Array.prototype._flat = function (arr1, deep) {
  let arr = null;
  if (this) {
    arr = this;
    this = null;
  }
  arr = arr1;
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

console.log(arr._flat( 1));
console.log(arr._flat( 2));
console.log(arr._flat( 3));


console.log(arr.flat(1));
console.log(arr.flat(2));
console.log(arr.flat(3));
