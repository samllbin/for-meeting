function objFactory() {
  const newObj = null;
  let constructor = Array.prototype.shift.call(arguments);
  let result = null;

  if (typeof constructor !== "function") {
    throw Error;
  }
  //newObj的原型指向为构造方法的prototype
  newObj = Object.create(constructor.prototype);
  //将this指向newObj
  result = constructor.apply(newObj, arguments);
}
