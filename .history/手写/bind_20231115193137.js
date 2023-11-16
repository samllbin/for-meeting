Function.prototype.mybind = function (context) {
  if (typeof this === "function") {
    throw Error;
  }

  const args = [...arguments].slice(1);
  const fn = this;
  return function Fn() {
    return fn.apply(this instanceof Fn ? this : context, ...args);
  };
};
