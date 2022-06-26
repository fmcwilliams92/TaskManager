var formE1 = document.querySelector("#task-form");
var tasksToDoE1 = document.querySelector("#tasks-to-do");
var taskNameInput = document.querySelector("input[name='task-name']").value;
// left off on 4.2.6

var createTaskHandler = function(event) {

  event.preventDefault();

  var listItemE1 = document.createElement("li");
  listItemE1.className = "task-item";
  listItemE1.textContent = taskNameInput;
  tasksToDoE1.appendChild(listItemE1);
};

formE1.addEventListener("submit", createTaskHandler);