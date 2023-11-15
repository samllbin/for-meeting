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

通过输出可以看到通过字面量和使用Object创建的对象是一致的，且其引用地址是一致的：obj === newObj2为true
通过Object.create常见的对象会在obj和newObj之间增加一层，这个时候引用地址是解耦的：obj === newObj为false，这样的好处可以保证新创建的对象和原有对象解耦，当我们操作newObj时并不会影响原有数据
