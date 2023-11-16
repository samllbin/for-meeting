Function.prototype.mycall = function (context) {
  if (typeof this !== "function") {
    throw Error;
  }
  let context = context ? context : window;
};
