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

Function.prototype.mybind = function (context) {
  if (typeof this !== "function") {
    return;
  }
  let args = [...arguments].slice(1);
  const fn = this;
  return function Fn() {
    return;
  };
};
