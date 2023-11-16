Function.prototype.mycall = function (context) {
  if (typeof this !== "function") {
    throw Error;
  }
  console.log([...arguments][0]);
  const args = [...arguments].slice(1);
  context = context ? context : window;

  //将函数添加到上下文中
  context.fn = this;
  let result = null;
  result = context.fn(...args);
  delete context.fn;

  return result;
};

var name = "zyx";
const obj = {
  name: "dcb",
};

function getName() {
  console.log(this.name);
}

getName.mycall(obj);
