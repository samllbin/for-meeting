function quickSort(arr, start, end, k) {
  if (start > end) return;
  if (start === end) return arr[start];
  let tmp = arr[start];
  let left = start,
    right = end;
  while (left < right) {
    while (left < right && arr[right] >= tmp) right--;
    arr[left] = arr[right];
    while (left < right && arr[left] <= tmp) left++;
    arr[right] = arr[left];
  }
  arr[left] = tmp;

  if (left === k) {
    return arr[left];
  } else if (left < k) {
    return quickSort(arr, left + 1, end, k);
  } else {
    return quickSort(arr, start, left - 1, k);
  }
}

let arr = [1, 3, 4, 8, 4, 2, 7];

console.log(quickSort(arr, 0, 6, 1));
