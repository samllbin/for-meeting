function _flat(arr, deep) {
  if (!Array.isArray(arr) || deep <= 0) {
    return;
  }

  return arr.reduce((pre, next) => {
    identity();
  }, []);
}
