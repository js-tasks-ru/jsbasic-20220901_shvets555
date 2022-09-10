function sumSalary(salaries) {
  let total = 0;
  for (let number of Object.values(salaries).filter(item => typeof item === "number")) {
      if (number > 0 && number < Infinity)
      total += number;
  }   
  return total;
}
