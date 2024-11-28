// All Elements
const todoList = document.querySelector("#list");
const todoInput = document.querySelector("#item-input");
const form = document.querySelector(".new-item-form");

// event listener
form.addEventListener("submit", (e) => {
  e.preventDefault();
  addItem(todoInput.value);
  todoInput.value = "";
});

function addItem(value) {
  const item = document.createElement("div");
  item.classList.add("list-item");

  // checkbox
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = "checkbox";

  // text
  const text = document.createElement("div");
  text.classList.add("todo-text");
  text.innerText = value;

  // delete btn
  const btn = document.createElement("button");
  btn.innerText = "Delete";
  btn.classList.add("delete-btn");

  item.append(checkbox, text, btn);

  todoList.append(item);

  btn.addEventListener("click", (e) => {
    todoList.removeChild(item);
    // item.remove()
  });

  checkbox.addEventListener("click", (e) => {
    if (e.target.checked) {
      text.classList.add("line", "gray");
    } else {
      text.classList.remove("line", "gray");
    }
  });
}
