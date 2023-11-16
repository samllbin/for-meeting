function flatten(arr) {
  let result = [];

  for (let item of arr) {
    if (Array.isArray(item)) {
      result.concat(flatten(item));
    }
  }
}
