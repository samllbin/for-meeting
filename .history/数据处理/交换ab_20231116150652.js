let a = 2,
  b = 1;

a = a ^ b;
b = a ^ b;
a = a ^ b;
console.log(a, b);
