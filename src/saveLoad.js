// Save tasks to local storage
function saveTasksToLocalStorage() {
    const tasks = [...document.querySelectorAll('.newTaskForm')].map(form => ({
        title: form.querySelector('#title').value,
        date: form.querySelector('#date').value,
        priority: form.querySelector('#priority').value,
        complete: form.classList.contains('completed'),
    }));
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Load tasks from local storage
function loadTasksFromLocalStorage() {
    const tasks = localStorage.getItem('tasks');
    return tasks ? JSON.parse(tasks) : [];
}

// Save projects to local storage
function saveProjectsToLocalStorage() {
    const projects = [...document.querySelectorAll('.newProjForm')].map(form => ({
        title: form.querySelector('#title').value,
    }));
    localStorage.setItem('projects', JSON.stringify(projects));
}

// Load projects from local storage
function loadProjectsFromLocalStorage() {
    const projects = localStorage.getItem('projects');
    return projects ? JSON.parse(projects) : [];
}

// Save notes to local storage
function saveNotesToLocalStorage() {
    const notes = [...document.querySelectorAll('.newNoteForm')].map(form => ({
        title: form.querySelector('#title').value,
    }));
    localStorage.setItem('notes', JSON.stringify(notes));
}

// Load notes from local storage
function loadNotesFromLocalStorage() {
    const notes = localStorage.getItem('notes');
    return notes ? JSON.parse(notes) : [];
}

export { saveTasksToLocalStorage, loadTasksFromLocalStorage, saveProjectsToLocalStorage, loadProjectsFromLocalStorage, saveNotesToLocalStorage, loadNotesFromLocalStorage };
