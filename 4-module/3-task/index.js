function highlight(table){
  let rows = table.querySelectorAll('tr'); 
  for(let row of rows) {
      let status = row.cells[3];
      if(status.dataset.available === 'true')
      row.classList.add('available');
      if(status.dataset.available === 'false')
      row.classList.add('unavailable');
      else 
      row.hidden = true;

      let gender = row.cells[2].innerText;
      if(gender === 'm')
      row.classList.add('male');
      if(gender === 'f')
      row.classList.add('female');

      let age = row.cells[1].innerText;
      if(age < 18)
      row.style="text-decoration: line-through"
  }
}
