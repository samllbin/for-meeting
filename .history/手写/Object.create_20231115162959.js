const create = (proto) => {
  if (typeof proto === "object" || typeof proto === null) {
    function F() {}
    return new F();
  }
};
