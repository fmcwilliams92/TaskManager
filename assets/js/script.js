var formE1 = document.querySelector("#task-form");
var tasksToDoE1 = document.querySelector("#tasks-to-do");

var createTaskHandler = function(event) {
  var taskNameInput = document.querySelector("input[name='task-name']").value;
  
  event.preventDefault();

  var listItemE1 = document.createElement("li");
  listItemE1.className = "task-item";
  listItemE1.textContent = taskNameInput;
  tasksToDoE1.appendChild(listItemE1);
};

formE1.addEventListener("submit", createTaskHandler);