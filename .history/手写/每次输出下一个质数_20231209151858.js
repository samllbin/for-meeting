function foo() {
  let arr = [2];
  let index = 0;

  function generator() {
    let base = arr[index] + 1;
    for (let i = 0; i < base - 1; i++) {}
  }
  return function getNext() {};
}
