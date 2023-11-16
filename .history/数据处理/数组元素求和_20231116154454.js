// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let sum = arr.reduce((total, i) => (total += i), 0);
// console.log(sum);

// arr=[1,2,3,[[4,5],6],7,8,9]，求和
var arr = [1, 2, 3, [[4, 5], 6], 7, 8, 9];
console.log(arr.toString().split(","));
arr = arr
  .toString()
  .split(",")
  .reduce((total, i) => (total += Number(i)), 0);

console.log(arr);
