function debounce(onclick, wait) {
  let timer = null;

  return function () {
    let context = this;
    if (!timer) {
      let id = setTimeout(onclick.apply());
    }
  };
}

// element.debounce.addEventListener('click', debounce(onClick, 2000));
//每次点击执行的是返回的那个函数

function debounce1(onclick, wait) {
  let timer = null;
  return function () {
    let context = this;
    if (!timer) {
      let id = setTimeout(onclick.apply(context, arguments), wait);
      timer = id;
    } else {
      clearTimeout(timer);
      let id = setTimeout(onclick.apply(context, arguments), wait);
      timer = id;
    }
  };
}

function thrott(onclick, wait) {
  let current = new Date();

  return function () {
    let context = this,
      args = arguments;
    if (new Date() - current >= wait) {
      current = new Date();
      onclick.apply(context, args);
    }
  };
}
