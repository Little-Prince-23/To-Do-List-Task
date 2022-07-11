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
  if (newItem === "") {
    alert("Tapsiriq elave edin!!!");
  } else {
    addItemStorage(newItem);
    addItemUI(newItem);
  }
}

//Add Storage Function

function getTodosFromStorage(){
    let todos;
    
    if(localStorage.getItem("todos") === null){
        todos = []
    }else{
        todos = JSON.parse(localStorage.getItem("todos"))
    }
    return todos;
}

function addItemStorage(newItem){
    let todos = getTodosFromStorage();
    todos.push(newItem);
    localStorage.setItem("todos", JSON.stringify(todos))
}

//Clear Storage Function




//Add function
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

//Delete Function
function deleteItem(e) {
  if (e.target.className === "delete-item btn btn-warning") {
    e.target.parentElement.remove();
    input.value = "";
  }
}
