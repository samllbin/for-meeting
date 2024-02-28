function foo() {
  let arr = [2];
  let index = 0;

  // 生成质数
  function generator() {
    let base = arr[index] + 1;
    let preIndex = index;
    let flag = true;
    while (preIndex === index) {
      for (let i = 2; i < base - 1; i++) {
        if (base % i == 0) {
          flag = false;
          break;
        }
      }
      if (flag) {
        arr[++index] = base;
        return;
      }
      flag = true;
      base++;
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
getNext();
getNext();
getNext();
getNext();
getNext();
getNext();
getNext();
getNext();
getNext();
getNext();
