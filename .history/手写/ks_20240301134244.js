async function flow(arr) {
  // 实现代码

  for (let i = 0; i < arr.length; ++i) {
    if (Array.isArray(arr[i])) {
      await flow(arr[i]);
      continue;
    }

    if (arr[i] instanceof Function) {
      await arr[i]();
      continue;
    }

    await arr[i];
  }
}
