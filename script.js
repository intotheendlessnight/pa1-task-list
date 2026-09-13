const form = document.querySelector("#task-form");
// task input + priority + display area
const tinput = document.querySelector("#task-input");
const pinput = document.querySelector("#priority");
const tlist = document.querySelector("#task-list"); 

const t = [];

form.addEventListener("submit", function(event) {
    event.preventDefault();
    

    // read value entered: name of task, priority of task

    const tname = taskInput.value;
    const tprio = priorityInput.value;

    // if the name of the task is empty
    // .value.trim() handles trailing whitespace
    if (tname.value.trim() === "") {
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
    tasks.push(task);
});

// display tasks
function displayTasks() {
    tlist.innerHTML = "";
}