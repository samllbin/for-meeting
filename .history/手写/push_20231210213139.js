let arr = [];
let arr1 = [];

Array.prototype._push = function () {
  for (let i = 0; i < arguments.length; i++) {
    this[this.length] = arguments[i];
  }
  return this.length;
};

let result = arr._push(1);
console.log(arr, result);
