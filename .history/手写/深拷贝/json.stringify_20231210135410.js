let obj1 = {
  a: 0,
  b: {
    c: 0,
  },
};

let obj2 = JSON.parse(JSON.stringify(obj1));
obj1.a = 1;
obj1.b.c = 1;
console.log(obj1); // {a: 1, b: {c: 1}}
console.log(obj2); // {a: 0, b: {c: 0}}

//这个方法可以简单粗暴的实现深拷贝，但是还存在问题，拷贝的对象中如果有函数，
//undefined，symbol，当使用过JSON.stringify()进行处理之后，都会消失。
