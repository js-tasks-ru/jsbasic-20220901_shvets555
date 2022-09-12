function sumSalary(salaries) {
  let total = 0;
  for (let number of Object.values(salaries).filter(item => typeof item === "number")) {
      if (isFinite(number))
      total += number;
  }   
  return total;
}
