function objFactory() {
  const newObj = null;
  let constructor = Array.prototype.shift.call(arguments);
  let result = null;

  if (typeof constructor !== "function") {
    throw Error;
  }
  newObj = Object.create(constructor.prototype);

  result = constructor.apply();
}
