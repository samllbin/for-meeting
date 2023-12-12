let arr = [];

Array.prototype.push = function () {
  for (let i = 0; i < arguments.length; i++) {
    this[this.length] = arguments[i];
  }
  return this.length;
};

let result = arr.push(1);
console.log(arr, result);
