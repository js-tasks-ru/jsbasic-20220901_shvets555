function getMinMax(str) {
  let arr = str.split(' ');
  arr = arr.map(item => +item);
  arr = arr.filter(item => isFinite(item));
  arr = arr.sort((a, b) => a - b);
  return obj = {min: arr[0], max: arr[arr.length - 1]};
}
