function objFactory() {
  const newObj = null;
  let constructor = Array.prototype.shift.call(arguments);
  let result = null;

  if(typeof constructor !== 'function')
}
