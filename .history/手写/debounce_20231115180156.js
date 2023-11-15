function debounce(fn, wait) {
  let timer = null;

  return function () {
    const context = this;
    const args = arguments;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, wait);
  };
}

// element.debounce.addEventListener('click', debounce(onClick, 2000));
//每次点击执行的是返回的那个函数
