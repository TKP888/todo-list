import createTaskCard from "./taskCard";
    

class Task {
    constructor(title, description, date, complete) {
        this.title = title;
        this.description = description;
        this.date = date;
        this.complete = complete;
    }

    toggleComplete() {
        this.complete = !this.complete;
    }
}

let myTaskLibrary = [];

function toggleComplete(index) {
    myTaskLibrary[index].toggleComplete();
    render();
}

function render() {
    let libraryEl = document.querySelector("#taskList");
    if (!libraryEl) {
        console.error("Element with id 'taskList' not found.");
        return;
    }
    libraryEl.innerHTML = "";
    for (let i = 0; i < myTaskLibrary.length; i++) {
        let task = myTaskLibrary[i];
        let taskEl = document.createElement("div");
        taskEl.setAttribute("class", "taskCard");
        taskEl.innerHTML = `
            <div class="cardHeader">
                <h3 class="title">${task.title}</h3>
                <h5 class="description">${task.description}</h5>
            </div>
            <div class="cardBody">
                <p>${task.date} date</p>
                <p class="readStatus">${task.complete ? "Completed" : "Not Completed Yet"}</p>
                <button class="removeBtn" data-index="${i}">Remove</button>
                <button class="toggleReadBtn" data-index="${i}">Toggle Complete</button>
            </div>`;
        libraryEl.appendChild(taskEl);
    }

    document.querySelectorAll('.removeBtn').forEach(btn => {
        btn.addEventListener('click', (event) => {
            let index = event.target.getAttribute('data-index');
            removeTask(index);
        });
    });

    document.querySelectorAll('.toggleReadBtn').forEach(btn => {
        btn.addEventListener('click', (event) => {
            let index = event.target.getAttribute('data-index');
            toggleComplete(index);
        });
    });
}

function removeTask(index) {
    myTaskLibrary.splice(index, 1);
    render();
}

function addTaskToLibrary(title, description, date, complete) {
    let newTask = new Task(title, description, date, complete);
    myTaskLibrary.push(newTask);
    render();
}


export default createTaskCard;
