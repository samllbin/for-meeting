function debounce(fn, wait) {
  let timer;

  return function () {
    const context = this;
    const args = arguments;
    if (timer) {
      clearTimeout(timer);
    }
    setTimeout(() => {
      fn.apply(context, args);
    }, wait);
  };
}
