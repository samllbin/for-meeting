function change(a, b) {
  a = a ^ b;
  b = a ^ b;
  a = a ^ b;
}

let a = 2,
  b = 1;

change(a, b);
