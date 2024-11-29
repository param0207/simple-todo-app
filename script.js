// All Elements
const todoList = document.querySelector("#list");
const todoInput = document.querySelector("#item-input");
const form = document.querySelector(".new-item-form");

let TODOS = getTodos();
TODOS.forEach(addTodo);

todoList.addEventListener("change", (e) => {
  if (!e.target.matches("#checkbox")) return;

  const parent = e.target.closest(".list-item");
  const id = parent.dataset.id;
  console.log(TODOS);

  const todo = TODOS.find((todo) => todo.id === id);
  console.log(todo);

  todo.complete = e.target.checked;
  saveTodos();
});

todoList.addEventListener("click", (e) => {
  if (!e.target.matches(".delete-btn")) return;
  const parent = e.target.closest(".list-item");
  const id = parent.dataset.id;
  parent.remove();
  TODOS = TODOS.filter((todo) => todo.id !== id);
  saveTodos();
});

// event listener
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = todoInput.value;
  if (!name) return;
  const newTodo = {
    name,
    complete: false,
    id: new Date().valueOf().toString(),
  };
  TODOS.push(newTodo);
  addTodo(newTodo);
  saveTodos();
  todoInput.value = "";
});

function addTodo(newTodo) {
  const item = document.createElement("div");
  item.classList.add("list-item");
  item.dataset.id = newTodo.id;

  // checkbox
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = "checkbox";
  checkbox.checked = newTodo.complete;

  // text
  const text = document.createElement("div");
  text.classList.add("todo-text");
  text.innerText = newTodo.name;

  // delete btn
  const btn = document.createElement("button");
  btn.innerText = "Delete";
  btn.classList.add("delete-btn");

  item.append(checkbox, text, btn);

  todoList.append(item);
}

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(TODOS));
}

function getTodos() {
  const todos = JSON.parse(localStorage.getItem("todos")) || [];
  return todos;
}
