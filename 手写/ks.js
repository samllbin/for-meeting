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
const stop = () =>
  new Promise((resolve) =>
    setTimeout(() => {
      console.log("延迟1s");
      resolve();
    }, 1000)
  );

const subFlow = flow([() => stop().then(() => console.log(3))]);

flow([
  () => console.log(1),
  () => console.log(2),
  subFlow,
  [() => stop().then(() => console.log(4)), () => console.log(5)],
]).then(() => {
  console.log("done");
});
