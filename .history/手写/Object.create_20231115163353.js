const create = (proto) => {
  if (typeof proto === "object" || typeof proto === null) {
    function F() {}
    F.prototype = proto;
    return new F();
  } else {
    throw Error;
  }
};

const obj1 = {
  name: "dcb",
};

const obj2 = create(obj1);
const obj3 = Object(obj1);

console.log(obj1, obj2.__proto__, obj1 === obj2, obj1 === obj3);
