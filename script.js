//Constants declared for input button and task list area
//This will hold the input element andd the element to display the task
//Using querySelector to find the html elements and modify them
const taskInput = document.querySelector("#newtask input");
const taskSection = document.querySelector('.tasks');

//function that creates a task
function createTask(){
    if(taskInput.value.length == 0){
        alert("The task field is blank. Enter a task name and try again.")
    }
    else{
        //This block inserts HTML that creates each task into the task area div element
        taskSection.innerHTML +=
            `<div class = "task">
            <label id="taskname">
            <input onclick="updateTask(this)" type ="checkbox" id="check-task">
            <p>${document.querySelector('#newtask input').value}</p>
            </label>
            <div class="delete">
            <i class="uil uil-trash"></i>
            </div>
            </div>`;

            var current_tasks = document.querySelectorAll(".delete");
            for(var i=0; i<current_tasks.length; i++){
                current_tasks[i].onclick = function(){
                    this.parentNode.remove();
                }
            }
            taskSection.offsetHeight >= 300
            ? taskSection.classList.add("overflow")
            : taskSection.classList.remove("overflow");
    }
}


//the onclick event for the Add button
document.querySelector('#push').onclick = function(){
    createTask();
}


//listner for Enter key used to add new task
taskInput.addEventListener("keyup",(e) => {
    if(e.key == "Enter") {createTask();}
});

function updateTask(task){
    let taskItem = task.parentElement.lastElementChild;
    if (task.checked){
        taskItem.classList.add("checked");
    }
    else{
        taskItem.classList.remove("checked");
    }
}