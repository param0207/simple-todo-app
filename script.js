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
  item.textContent = value;

  todoList.append(item);

  item.addEventListener("click", (e) => {
    todoList.removeChild(item);
    // item.remove()
  });
}
