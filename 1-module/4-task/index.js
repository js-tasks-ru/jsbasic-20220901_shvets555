function checkSpam(str) {
  let lowStr = str.toLowerCase();
    if (lowStr.includes("1xbet") || lowStr.includes("xxx")) {
        return true;
    } else {
        return false;
    }
}