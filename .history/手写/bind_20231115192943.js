Function.prototype.mybind = function (context) {
  if (typeof this === "function") {
    throw Error;
  }

  return function Fn() {};
};
