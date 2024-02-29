function factory(constructor, ...args) {
  let obj = Object.create(constructor.prototype);
  let result = constructor.apply(obj, args);
}
