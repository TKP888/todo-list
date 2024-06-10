import { createTaskCard } from './taskCard';


class Task {
    constructor(projectTitle, title, description, priorities, date, complete) {
        this.projectTitle = projectTitle;
        this.title = title;
        this.description = description;
        this.priorities = priorities;
        this.date = date;
        this.complete = complete;
    }

    toggleComplete() {
        this.complete = !this.complete;
    }

    toJSON() {
        return {
            projectTitle: this.projectTitle,
            title: this.title,
            description: this.description,
            priorities: this.priorities,
            date: this.date,
            complete: this.complete
        };
    }
}

let myTaskLibrary = [];

// function saveTasksToLocalStorage() {
//     localStorage.setItem('myTaskLibrary', JSON.stringify(myTaskLibrary));
// }

// function loadTasksFromLocalStorage() {
//     const tasksJSON = localStorage.getItem('myTaskLibrary');
//     if (tasksJSON) {
//         const tasksArray = JSON.parse(tasksJSON);
//         myTaskLibrary = tasksArray.map(task => new Task(task.projectTitle, task.title, task.description, task.priorities, task.date, task.complete));
//     }
// }


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

function addTaskToLibrary(projectTitle, title, description, priorities, date, complete) {
    let newTask = new Task(projectTitle, title, description, priorities, date, complete);
    myTaskLibrary.push(newTask);
    saveTasksToLocalStorage();
    renderTasks(projectTitle);
}

function renderTasks(projectTitle) {
    let libraryEl = document.querySelector("#taskArea");
    if (!libraryEl) {
        console.error("Element with id 'taskArea' not found.");
        return;
    }
    libraryEl.innerHTML = "";

    myTaskLibrary.filter(task => task.projectTitle === projectTitle).forEach(task => {
        createTaskCard(task.title, task.description, task.priorities, task.date, task.complete);
    });
}

export { addTaskToLibrary, toggleComplete, removeTask, renderTasks };

