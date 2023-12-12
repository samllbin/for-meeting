function getType(value) {
  // if (value === null) return null + "";

  if (typeof value === "object") {
    let valueClass = Object.prototype.toString(value);
    // [object object]
    let type = valueClass.split(" ")[1].split("");
    //["o", "b", "j", "e", "c", "t", "]"]
    type.pop();

    return type.join("").toLowerCase();
  } else {
    return typeof value;
  }
}

console.log(getType(null));
