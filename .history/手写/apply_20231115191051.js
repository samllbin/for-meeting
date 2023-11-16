Function.prototype.myapply = function (context) {
  if (typeof this !== "function") {
    throw Error;
  }

  context = context || window;
};
