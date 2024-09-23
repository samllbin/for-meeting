function findMissingRanges(nums, lower, upper) {
  let res = [];
  nums = nums.filter((num) => num >= lower && num <= upper);
  nums.unshift(lower);
  nums.push(upper);

  for (let i = 1; i < nums.length; i++) {
    let pre = nums[i - 1];
    let cur = nums[i];

    if (cur - pre <= 1) {
      continue;
    } else if (cur - pre === 2) {
      res.push(`${pre + 1}`);
    } else {
      if (pre === lower || cur === upper) {
        if (nums[i + 1] === cur) {
          res.push(`${pre + 1} -> ${cur - 1}`);
        } else {
          res.push(`${pre + 1} -> ${cur}`);
        }
      } else {
        res.push(`${pre + 1} -> ${cur - 1}`);
      }
    }
  }
  return res;
}
console.log(findMissingRanges([0, 1, 5, 10, 20, 30, 40], 1, 30));
