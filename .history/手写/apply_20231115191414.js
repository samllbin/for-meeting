Function.prototype.myapply = function (context) {
  if (typeof this !== "function") {
    throw Error;
  }

  context = context || window;
  let result = null;
  context.fn = this;

  if (arguments[1]) {
    result = context.fn(...arguments[1]);
  } else {
    result = context.fn();
  }

  delete context.fn;
  return result;
};

const obj = {
  name: "dcb",
};

function getNumber(number) {
  console.log(this.name);
  console.log(number);
}

getNumber.myapply(obj, 123456);
