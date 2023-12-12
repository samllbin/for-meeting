function curry(fn, args) {
  console.log(args);
  const length = fn.length;

  args = args || [];
  return function () {
    const subargs = args.slice(0);

    for (let i = 0; i < arguments.length; i++) {
      subargs.push(arguments[i]);
    }

    if (subargs.length >= arguments) {
      return fn.apply(this, subargs);
    } else {
      return curry.bind(this, fn, subargs);
    }
  };
}

function sum(a, b) {
  console.log(a + b);
}

sum = curry(sum);
sum(3, 5);
sum(3)(5);
