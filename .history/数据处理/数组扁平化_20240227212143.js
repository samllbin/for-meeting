//递归
let arr = [1, [2, [3, 4, 5]]];
function flatten(arr) {
  let result = [];

  for (let item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flatten(item));
    } else {
      result.push(item);
    }
  }
  return result;
}

// function flatten1(arr) {
//   let result = arr.reduce((pre, next) => {
//     return pre.concat(Array.isArray(next) ? flatten1(next) : next);
//   }, []);
//   return result;
// }
function flatten1(arr) {
  let result = arr.reduce((pre, next) => {
    return pre.concat(Array.isArray(next) ? flatten1(next) : next);
  }, []);
  return result;
}
console.log(flatten(arr));
console.log(flatten1(arr));
