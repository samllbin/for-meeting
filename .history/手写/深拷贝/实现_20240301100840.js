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

function deepclone1(obj) {
  let res = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      res[key] = typeof obj[key] === "object" ? deepclone1(obj[key]) : obj[key];
    }
  }

  return res;
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

function deepClone2(obj) {
  if (typeof obj !== "object") return;
  let res = Array.isArray(obj) ? [] : {};
}
