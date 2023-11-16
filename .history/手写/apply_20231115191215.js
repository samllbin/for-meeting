Function.prototype.myapply = function (context) {
  if (typeof this !== "function") {
    throw Error;
  }

  context = context || window;
  let result = null;
  context.fn = this;

  if (arguments[1]) {
    result = context.fn(...arguments[1]);
  } else {
    result = context.fn();
  }
};
