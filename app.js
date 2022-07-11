//Variables
const list = document.querySelector("ul");
const addButton = document.querySelector("#button-addon2");
const input = document.querySelector(".form-control");

//Event Lilsteners
eventListeners();

function eventListeners() {
  addButton.addEventListener("click", addButtonFunc);
  list.addEventListener("click", deleteItem);
}

//Functions
function addButtonFunc() {
  const newItem = input.value.trim();
  input.value = "";
  addItemUI(newItem);
}

function addItemUI(newItem) {
  const listItem = document.createElement("li");
  listItem.className =
    "list-group-item d-flex justify-content-between align-items-center";
  listItem.style.color = "white";
  listItem.appendChild(document.createTextNode(newItem));
  listItem.style.marginBottom = "2rem";
  const link = document.createElement("a");
  link.href = "#";
  link.className = "delete-item btn btn-warning";
  link.textContent = "Delete";
  listItem.appendChild(link);
  list.appendChild(listItem);
  console.log(listItem);
}

function deleteItem(e) {
  if (e.target.className === "delete-item btn btn-warning") {
    e.target.parentElement.remove();
    input.value = "";
  }
}
