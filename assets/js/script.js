var buttonEl = document.querySelector("#save-task");
var taskToDoEl = document.querySelector("#task-to-do");

var createTaskHandler = function() {
      //created a new task item
      var listItemEl = document.createElement("li");
      //style the new task item
      listItemEl.className = "task-item";
      //add the text
      listItemEl.textContent = "This is a new task.";
      //append this element to the task list
      taskToDoEl.appendChild(listItemEl);
}

buttonEl.addEventListener("click", createTaskHandler);