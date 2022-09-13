function showSalary(users, age) {
  let userSalary = users.filter(item => item.age <= age);
  userSalary = userSalary.map(item => item.name + ', ' + item.balance);
  return userSalary.join('\n');
}