Function.prototype.mycall = function (context) {
  if (typeof this !== "function") {
    throw Error;
  }
  console.log([...arguments][0])
  const args = 

  let context = context ? context : window;
};
