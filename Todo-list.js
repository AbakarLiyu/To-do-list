
// Function to add a new todo item
function addTodo() {}
  // Get the input value
  let todoInput = document.getElementById("todo");
  let todoValue = todoInput.value.trim();

  if (todoValue === "") {
    alert("Please enter a task!");
    return;
  }

  // Create a new list item (div)
  let todoItem = document.createElement("div");
  todoItem.className = "todo-item";
  todoItem.style.marginTop = "10px";

  // Add the task text
  let taskText = document.createElement("span");
  taskText.innerText = todoValue;

  // Add a delete button
  let deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.style.marginLeft = "20px";
  deleteBtn.onclick = function () {
    todoItem.remove();
  };

  // Append text and delete button to the todo item
  todoItem.appendChild(taskText);
  todoItem.appendChild(deleteBtn);

  // Add the todo item to the container
  document.querySelector(".my-container").appendChild(todoItem);

  // Clear input field
  todoInput.value = "";
