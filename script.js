const form = document.querySelector("#task-form");
// task input + priority + display area
const tinput = document.querySelector("#task-input");
const pinput = document.querySelector("#priority");
const tlist = document.querySelector("#task-list"); 

const t = [];

form.addEventListener("submit", function(event) {
    event.preventDefault();
    

    // read value entered: name of task, priority of task

    const tname = tinput.value;
    const tprio = pinput.value;

    // if the name of the task is empty
    if (tname.trim() === "") {
        return;
    }

    // if taskname
    // taskname, priority of task, completion
    const task = {
        name: tname,
        priority: tprio,
        completed: false
    };

    // push tasks
    t.push(task);
    tinput.value = "";
    displayTasks();
});

// display tasks
function displayTasks() {
    tlist.innerHTML = "";
    // loop through each task in t[]
    t.forEach(function(task, i) {

    // container div
    const taskElement = document.createElement("div"); // empty div
    taskElement.className = "task " + task.priority; // set class to high/low/mid
    if (task.completed) {
      taskElement.classList.add("completed");
    }

    const text = document.createElement("span");
    // get priority, get name, append to a span
    text.textContent = task.name + " (" + task.priority + ")";

    const completed = document.createElement("button");
    completed.textContent = "Complete";
    completed.addEventListener("click", function() {
      task.completed = !task.completed; // task goes from completed to not completed on click
      // call display tasks to rebuild list
      displayTasks();
    });
    // delete button
    const del = document.createElement("button");
    del.textContent = "Delete";
    del.addEventListener("click", function() {
      t.splice(i, 1); // remove one item (the one that's deleted)
      // should display tasks without the item
      displayTasks();
    });

    // text -> complete -> delete, then insert div into page
    taskElement.appendChild(text);
    taskElement.appendChild(completed);
    taskElement.appendChild(del);
    tlist.appendChild(taskElement);
  });

}