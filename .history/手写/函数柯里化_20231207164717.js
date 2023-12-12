// function curry(fn, args) {
//   //期望参数的个数
//   let length = fn.length;

//   args = args || [];

//   return function () {
//     let subArgs = args.slice(0);

//     for (let i = 0; i < arguments.length; i++) {
//       subArgs.push(arguments[i]);
//     }

//     if (subArgs.length >= length) {
//       return fn.apply(this, subArgs);
//     } else {
//       return curry.call(this, fn, subArgs);
//     }
//   };
// }

// //ES6
// function curry2(fn, ...args) {
//   return args.length >= fn.length
//     ? fn(...args)
//     : curry2.bind(null, fn, ...args);
// }

function add(n1, n2, n3, n4) {
  console.log(n1 + n2 + n3 + n4);
}

function curry3(fn, args) {
  let length = fn.length;

  args = args || [];

  return function () {
    let subArgs = args.slice(0);
    for (let i = 0; i < arguments.length; i++) {
      subArgs.push(arguments[i]);
    }

    if (subArgs.length >= length) {
      return fn.apply(this, subArgs);
    } else {
      return curry3.call(this, fn, subArgs);
    }
  };
}

curry3(add)(1)(2)(3)(4);
