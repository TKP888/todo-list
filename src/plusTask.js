// import { createTaskCard } from './taskCard';
// import { saveTasksToLocalStorage, loadTasksFromLocalStorage } from './saveLoad';

// // Task class definition
// class Task {
//     constructor(title, description, date, complete) {
//         this.title = title;
//         this.description = description;
//         this.date = date;
//         this.complete = complete;
//     }

//     toggleComplete() {
//         this.complete = !this.complete;
//     }

//     toJSON() {
//         return {
//             title: this.title,
//             description: this.description,
//             date: this.date,
//             complete: this.complete
//         };
//     }
// }

// let myTaskLibrary = loadTasksFromLocalStorage();

// function toggleComplete(index) {
//     myTaskLibrary[index].toggleComplete();
//     saveTasksToLocalStorage(myTaskLibrary);
//     renderTasks();
// }

// function removeTask(index) {
//     myTaskLibrary.splice(index, 1);
//     saveTasksToLocalStorage(myTaskLibrary);
//     renderTasks();
// }

// function addTaskToLibrary(title, description, date, complete) {
//     let newTask = new Task(title, description, date, complete);
//     myTaskLibrary.push(newTask);
//     saveTasksToLocalStorage(myTaskLibrary);
//     renderTasks();
// }
 
// function renderTasks() {
//     let taskArea = document.querySelector("#taskArea");
//     if (!taskArea) {
//         console.error("Element with id 'taskArea' not found.");
//         return;
//     }
//     taskArea.innerHTML = "";

//     myTaskLibrary.forEach(task => {
//         createTaskCard(task.title, task.description, task.date, task.complete);
//     });
// }

// export { myTaskLibrary, addTaskToLibrary, toggleComplete, removeTask, renderTasks };




// // import { createTaskCard } from './taskCard';
// // import { saveTasksToLocalStorage, loadTasksFromLocalStorage } from './saveLoad';

// // // Task class definition
// // class Task {
// //     constructor(projectTitle, title, description, priorities, date, complete) {
// //         this.projectTitle = projectTitle;
// //         this.title = title;
// //         this.description = description;
// //         this.priorities = priorities;
// //         this.date = date;
// //         this.complete = complete;
// //     }

// //     toggleComplete() {
// //         this.complete = !this.complete;
// //     }

// //     toJSON() {
// //         return {
// //             projectTitle: this.projectTitle,
// //             title: this.title,
// //             description: this.description,
// //             priorities: this.priorities,
// //             date: this.date,
// //             complete: this.complete
// //         };
// //     }
// // }

// // // Initialize myTaskLibrary from local storage
// // let myTaskLibrary = loadTasksFromLocalStorage();

// // // function toggleComplete(index) {
// // //     myTaskLibrary[index].toggleComplete();
// // //     saveTasksToLocalStorage(myTaskLibrary);
// // //     renderTasks();
// // // }

// // // function removeTask(index) {
// // //     myTaskLibrary.splice(index, 1);
// // //     saveTasksToLocalStorage(myTaskLibrary);
// // //     renderTasks();
// // // }

// // function addTaskToLibrary(projectTitle, title, description, priorities, date, complete) {
// //     let newTask = new Task(projectTitle, title, description, priorities, date, complete);
// //     myTaskLibrary.push(newTask);
// //     saveTasksToLocalStorage(myTaskLibrary);
// //     renderTasks(projectTitle);
// // }

// // // function renderTasks(projectTitle) {
// // //     let libraryEl = document.querySelector("#taskArea");
// // //     if (!libraryEl) {
// // //         console.error("Element with id 'taskArea' not found.");
// // //         return;
// // //     }
// // //     libraryEl.innerHTML = "";

// // //     myTaskLibrary.filter(task => task.projectTitle === projectTitle).forEach(task => {
// // //         createTaskCard(task.title, task.description, task.date, task.complete);
// // //     });
// // // }

// // export { myTaskLibrary, addTaskToLibrary, toggleComplete, removeTask, renderTasks };
