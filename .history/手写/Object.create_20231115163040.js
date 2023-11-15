const create = (proto) => {
  if (typeof proto === "object" || typeof proto === null) {
    function F() {}
    F.prototype = proto;
    return new F();
  } else {
    throw Error;
  }
};
