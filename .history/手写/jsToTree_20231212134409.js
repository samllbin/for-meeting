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
}
