function deepClone(object) {
  if (!object || typeof object !== "object") return;

  let newObj = Array.isArray(object) ? [] : {};

  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      newObj[key] =
        typeof object[key] === "object" ? deepClone(object[key]) : object[key];
    }
  }
  return newObj;
}

function deepClone1(object) {
  if (!object || typeof object !== "object") return;
  let result = Array.isArray(object) ? [] : {};

  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      result[key] =
        typeof object[key] === "object" ? deepClone1(object[key]) : object[key];
    }
  }
}

let obj = {
  name: "dcb",
  info: {
    qq: "156454",
    phone: "455",
  },
};

let newobj = deepClone(obj);

obj.info.qq = "";
console.log(newobj);
