import { createTaskCard } from './taskCard';

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

    toJSON() {
        return {
            title: this.title,
            description: this.description,
            date: this.date,
            complete: this.complete
        };
    }
}

let myTaskLibrary = [];

function saveTasksToLocalStorage() {
    localStorage.setItem('myTaskLibrary', JSON.stringify(myTaskLibrary));
}

function loadTasksFromLocalStorage() {
    const tasksJSON = localStorage.getItem('myTaskLibrary');
    if (tasksJSON) {
        const tasksArray = JSON.parse(tasksJSON);
        myTaskLibrary = tasksArray.map(task => new Task(task.title, task.description, task.date, task.complete));
    }
}

function toggleComplete(index) {
    myTaskLibrary[index].toggleComplete();
    saveTasksToLocalStorage();
    renderTasks();
}

function removeTask(index) {
    myTaskLibrary.splice(index, 1);
    saveTasksToLocalStorage();
    renderTasks();
}

function addTaskToLibrary(title, description, date, complete) {
    let newTask = new Task(title, description, date, complete);
    myTaskLibrary.push(newTask);
    saveTasksToLocalStorage();
    renderTasks();
}

function renderTasks() {
    let libraryEl = document.querySelector("#taskArea");
    if (!libraryEl) {
        console.error("Element with id 'taskArea' not found.");
        return;
    }
    libraryEl.innerHTML = "";
    for (let i = 0; i < myTaskLibrary.length; i++) {
        let task = myTaskLibrary[i];
        createTaskCard(task.title, task.description, task.date, task.complete);
    }
}

export { addTaskToLibrary, loadTasksFromLocalStorage, toggleComplete, removeTask, renderTasks };
