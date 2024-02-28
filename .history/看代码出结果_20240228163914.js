setTimeout(() => {
  new Promise((resolve) => {
    resolve();
  }).then(() => {
    console.log("test");
  });

  console.log(4);
});

new Promise((resolve) => {
  resolve();
  console.log(1); /* 这是整体代码这个宏任务中的同步代码，第一个输出 */
}).then(() => {
  setTimeout(() => {
    console.log("jrd");
    Promise.resolve().then(() => {
      console.log("jrd_sb");
    });
  });
  console.log(3);
  Promise.resolve()
    .then(() => {
      console.log("before timeout");
    })
    .then(() => {
      Promise.resolve().then(() => {
        console.log("also before timeout");
      });
    });
});
console.log(2);
