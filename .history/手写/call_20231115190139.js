Function.prototype.mycall = function (context) {
  if (typeof this !== "function") {
    throw Error;
  }
  console.log([...arguments][0]);
  const args = [...arguments].slice(1);
  let context = context ? context : window;

  context.fn = this;
  let result = null;
};
