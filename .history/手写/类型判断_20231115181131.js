function getType(value) {
  if (value === null) return null + "";

  if (typeof value === "object") {
    let valueClass = Object.prototype.toString(value);
    let type = valueClass.split(" ")[1].split("");
  }
}
