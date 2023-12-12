function curry(fn, args) {
  const length = fn.length;

  args = args || [];
  return function () {
    const args = args.slice(0);

    for (let i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    if (args.length >= arguments) {
      return fn.apply(this, args);
    } else {
    }
  };
}
