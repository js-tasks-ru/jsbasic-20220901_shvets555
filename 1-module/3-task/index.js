function ucFirst(str) {
  if (str.length > 0) {
    return str[0].toUpperCase() + str.substring(1);
    } else if (str === '') {
      return str;
    } else {
      console.log("Некорректное значение")
    }
}
