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

  let flag =
    result && (typeof result === "object" || typeof result === "function");

  return flag ? result : newObj;
}
// （1）首先创建了一个新的空对象
// （2）设置原型，将对象的原型设置为函数的 prototype 对象。
// （3）让函数的 this 指向这个对象，执行构造函数的代码（为这个新对象添加属性）
// （4）判断函数的返回值类型，如果是值类型，返回创建的对象。如果是引用类型，就返回这个引用类型的对象。
