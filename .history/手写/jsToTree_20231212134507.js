function jsToTree(data) {
  let result = [];

  if (!Array.isArray(arr)) {
    return;
  }
  let map = {};
  data.forEach((item) => {
    map[item.id] = item;
  });

  data.forEach((item) => {
    if (item.pid) {
      let parent = map[item.pid];
      parent.children || (parent.children = []).push(item);
    } else {
      result.push(item);
    }
  });

  return result;
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
