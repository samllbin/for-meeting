function curry(fn, args) {
  const length = fn.length;

  args = args || [];
  return function () {
    const args = args.slice(0);
  };
}
