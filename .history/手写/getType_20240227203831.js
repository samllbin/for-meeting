function getType(value) {
  if (value === null) {
    return value + "";
  }
  if (typeof value === "object") {
    let valueClass = Object.prototype.toString.call(value);
    let type = valueClass.split(" ")[0].split("");
    type.shift();

    return type.join("").toLowerCase();
  }
}

getType({});
