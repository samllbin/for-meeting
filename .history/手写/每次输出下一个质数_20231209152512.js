function foo() {
  let arr = [2];
  let index = 0;

  function generator() {
    let base = arr[index] + 1;
    let preIndex = index
    while()
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
