var buttonE1 = document.querySelector("#save-task");
var tasksToDoE1 = document.querySelector("#tasks-to-do");

buttonE1.addEventListener("click", function() {
  var listItemE1 = document.createElement("li");
  listItemE1.className = "task-item";
  listItemE1.textContent = "This is my new task";
  tasksToDoE1.appendChild(listItemE1);
});