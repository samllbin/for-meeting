function jsToTree(data) {
  let result = [];

  if (!Array.isArray(data)) {
    return;
  }
  let map = {};
  data.forEach((item) => {
    map[item.key] = item;
  });

  data.forEach((item) => {
    if (item.parentKey) {
      let parent = map[item.parentKey];
      parent.children || (parent.children = []).push(item);
    } else {
      result.push(item);
    }
  });

  return JSON.stringify(result);
}

const list = [
  { key: 1, data: "A", parentKey: 0 },
  { key: 2, data: "B", parentKey: 0 },
  { key: 3, data: "C", parentKey: 1 },
  { key: 4, data: "D", parentKey: 1 },
  { key: 5, data: "E", parentKey: 2 },
  { key: 6, data: "F", parentKey: 3 },
  { key: 7, data: "G", parentKey: 2 },
  { key: 8, data: "H", parentKey: 4 },
];

function convert(list) {
  const n = list.length;
  for (let i = n - 1; i >= 0; i--) {
    let obj = list[i];
    if (obj.parentKey === 0) break;
    let parentObj = list[obj.parentKey - 1];

    if (parentObj.hasOwnProperty("children")) {
      parentObj.children.push(obj);
    } else {
      parentObj.children = [obj];
    }
  } //只留下parentKey为0的
  let ans = [];
  for (let it of list) {
    if (it.parentKey === 0) ans.push(it);
  }
  return JSON.stringify(ans);
}
console.log(convert(list));
console.log(jsToTree(list));
