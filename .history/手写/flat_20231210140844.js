function _flat(arr, deep) {
  if (!Array.isArray(arr) || deep <= 0) {
    return;
  }

  return arr.reduce((pre, next) => {
    if (Array.isArray(next)) {
      return pre.concat(..._flat(next, deep - 1));
    } else {
      return pre.concat(...next);
    }
  }, []);
}

let arr = [1, [2, 3, [4, [5]]]];
