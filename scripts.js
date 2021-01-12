const addStorage = () => {
  const name = document.querySelector('#name').value;
  const username = document.querySelector('#username').value;

  localStorage.setItem('name', name);
  localStorage.setItem('username', username);
};

const removeStorage = () => {
  localStorage.clear();
  // localStorage.removeItem('name', name); // you can also remove individual items using removeItem()
  // localStorage.removeItem('username', username);
};
