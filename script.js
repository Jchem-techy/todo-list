const addForm = document.querySelector(`.add`);
const list = document.querySelector(`.todos`);
const input = document.querySelector(`input[name='add']`);
const clear = document.querySelectorAll(`h4`);
const search = document.querySelector(`.search`);
const searching = document.querySelector(`searching`);

addForm.addEventListener(`submit`, add);
function add(e) {
  e.preventDefault();
  let template = `<li>`;
  let newAdd = input.value.trim();
  localStorage.setItem(`todos`, newAdd);
  // if (newAdd === ``) {
  //   alert(`enter a valid item`);
  // } else {
  //   list.innerHTML += template;
  //   console.log(localStorage.getItem(`todos`));
  //   addForm.reset();
  // }
  addTodos(newAdd);
  addForm.reset();
}
function addTodos(newAdd) {
  console.log(newAdd);
  list.innerHTML += `<li><span>${newAdd}</span><h4 class="delete">X</h4></li>`;
}
addTodos(localStorage.getItem(`todos`));
list.addEventListener(`click`, (e) => {
  if (e.target.classList.contains(`delete`)) {
    e.target.parentElement.remove();
  }
});

search.addEventListener(`keyup`, (e) => {
  e.preventDefault();
  const term = search.value.trim();
  filterTodos(term);
});
function filterTodos(term) {
  let todos = Array.from(list.children);

  // add a class when we get a match to what is being searched in the box
  todos
    .filter((todo) => {
      if (!todo.textContent.includes(term)) {
        // console.log(todo);
        return todo;
      }
    })
    .forEach((todo) => {
      todo.classList.add(`filtered`);
    });
  //remove the class for element that actually matches
  todos
    .filter((todo) => {
      if (todo.textContent.includes(term)) {
        return todo;
      }
    })
    .forEach((todo) => {
      todo.classList.remove(`filtered`);
    });
}
