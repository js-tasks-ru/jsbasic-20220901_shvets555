function getMinMax(str) {
  let arr = str
  .split(' ')
  .map(item => +item)
  .filter(item => isFinite(item))
  .sort((a, b) => a - b);
  return obj = {min: arr[0], max: arr[arr.length - 1]};
}
