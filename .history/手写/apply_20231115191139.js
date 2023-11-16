Function.prototype.myapply = function (context) {
  if (typeof this !== "function") {
    throw Error;
  }

  context = context || window;
  let result = null;
  context.fn = this;

  if (arguments[1]) {
  }
};
