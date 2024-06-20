let myTaskLibrary = [];

function saveTasksToLocalStorage(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasksFromLocalStorage() {
    const tasks = localStorage.getItem('tasks');
    return tasks ? JSON.parse(tasks) : [];
}

function saveProjectsToLocalStorage() {
    const projects = [...document.querySelectorAll('.newProjForm')].map(form => ({
        title: form.querySelector('#title').value,
    }));
    localStorage.setItem('projects', JSON.stringify(projects));
}

function loadProjectsFromLocalStorage() {
    const projects = localStorage.getItem('projects');
    return projects ? JSON.parse(projects) : [];
}

function saveNotesToLocalStorage() {
    const notes = [...document.querySelectorAll('.newNoteForm')].map(form => ({
        title: form.querySelector('#title').value,
    }));
    localStorage.setItem('notes', JSON.stringify(notes));
}

function loadNotesFromLocalStorage() {
    const notes = localStorage.getItem('notes');
    return notes ? JSON.parse(notes) : [];
}

export { saveTasksToLocalStorage, loadTasksFromLocalStorage, saveProjectsToLocalStorage, loadProjectsFromLocalStorage, saveNotesToLocalStorage, loadNotesFromLocalStorage };
