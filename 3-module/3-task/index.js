function camelize(str) {
  return str
  .split('-')
  .map((item, index) => { if (index === 0){
    return item;
    } else {
    return item[0].toUpperCase() + item.substring(1);
}})
  .join(''); 
}