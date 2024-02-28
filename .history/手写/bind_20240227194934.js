// Function.prototype.mybind = function (context) {
//   if (typeof this === "function") {
//     throw Error;
//   }

//   const args = [...arguments].slice(1);
//   const fn = this;
//   return function Fn() {
//     return fn.apply(
//       this instanceof Fn ? this : context,
//       args.concat(...arguments)
//     );
//   };
// };

// function Person(name) {
//     this.name = name;
//   }

//   const BoundPerson = Person.myBind(null, 'John');
//   const person = new BoundPerson();

//   console.log(person.name); // 输出: "John"

// 定义一个名为mybind的方法，这个方法会添加到Function.prototype上，使得所有的函数都可以使用这个方法
Function.prototype.mybind = function (context) {
  // 检查this是否是一个函数
  if (typeof this !== "function") {
    // 如果是非函数，直接返回
    return;
  }

  // 将所有传递给mybind的参数（除了第一个参数context）收集到一个数组中
  let args = [...arguments].slice(1);

  // 将当前的函数保存到fn变量中，以便后续使用
  const fn = this;

  // 返回一个新的函数，这个新函数在被调用时会执行以下操作：
  return function Fn() {
    // 如果是new操作符调用，则将this绑定到新创建的对象中
    // 同时将预先绑定的参数和Fn被调用时传递的参数一起传递给fn
    return fn.apply(
      this instanceof Fn ? this : context,
      args.concat(...arguments)
    );
  };
};
