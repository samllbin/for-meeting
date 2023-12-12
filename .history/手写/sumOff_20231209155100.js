function sum() {
  let args = arguments || [];
  return function () {
    let subArgs = arguments || [];

    for (let i = 0; i < subArgs.length; i++) {
      args.push(subArgs[i]);
    }

    function sumoff() {}
  };
}
