function promiseAll(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("参数必须是数组");
  }
  let res = [];
  let len = arr.length;
  let resCount = 0;
  for (let i = 0; i < len; i++) {
    Promise.resolve(arr[i]).then((data) => {
      resCount++;
      res[i] = data;
    });
  }
}
