var formEl = document.querySelector("#save-task");
var taskToDoEl = document.querySelector("#task-to-do");

var createTaskHandler = function(event) {
    //added a code that will prevent page from refreshing after filling out form
    event.preventDefault(); 

    //created a new task item
    var listItemEl = document.createElement("li");
    //style the new task item
    listItemEl.className = "task-item";
    //add the text
    listItemEl.textContent = "This is a new task.";
    //append this element to the task list
    taskToDoEl.appendChild(listItemEl);
};

formEl.addEventListener("submit", createTaskHandler);
