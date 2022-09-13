function camelize(str) {
  let arr = str.split('-').map((item, index) => { if (index === 0){
    return item;
} else {
    return item[0].toUpperCase() + item.substring(1);
}}).join(''); 
return str = arr;
}