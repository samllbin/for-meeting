function foo() {
  let arr = [2];
  let index = 0;

  function generator() {
    let base = arr[index] + 1;
    for (let i = 2; i < base - 1; i++) {
      if (base % i == 0) {
        arr[++index] = base;
        console.log(arr);
        return;
      }
    }
  }
  return function getNext() {
    console.log(arr[index]);
    generator();
  };
}

const getNext = foo();
getNext();
getNext();
getNext();
getNext();
getNext();
