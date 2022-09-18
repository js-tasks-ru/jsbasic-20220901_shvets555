function makeFriendsList(friends) {
  const ul = document.createElement('ul');
    for(let name of friends) {
        const li = document.createElement('li');
        li.innerHTML = name.firstName + " " + name.lastName;
        ul.append(li);
    }
    return ul;
}
