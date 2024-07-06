import { saveTasksToLocalStorage, loadTasksFromLocalStorage } from './saveLoad';

const createTaskCard = (titleValue = '', dateValue = '', priorityValue = '', complete = false) => {
    const form = document.createElement('form');
    form.classList.add('newTaskForm');
    if (complete) {
        form.classList.add('completed');
    }

    const title = document.createElement('input');
    title.id = 'title';
    title.type = 'text';
    title.value = titleValue;
    form.appendChild(title);

    const date = document.createElement('input');
    date.id = 'date';
    date.type = 'date';
    date.value = dateValue;
    form.appendChild(date);

    const priority = document.createElement('select');
    priority.id = 'priority';
    priority.required = true;
    priority.innerHTML = `
        <option value="">Select/Choose</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
    `;
    priority.value = priorityValue;
    form.appendChild(priority);

    title.addEventListener('input', saveTasksToLocalStorage);
    date.addEventListener('input', saveTasksToLocalStorage);
    priority.addEventListener('change', saveTasksToLocalStorage);

    const completeBtn = document.createElement('img');
    completeBtn.src = '../image/check.svg';
    completeBtn.type = 'button';
    completeBtn.height = 20;
    completeBtn.width = 20;
    completeBtn.id = 'completeBtn';
    form.appendChild(completeBtn);

    completeBtn.addEventListener('click', (event) => {
        event.preventDefault();
        form.classList.toggle('completed');
        saveTasksToLocalStorage();
    });

    const remove = document.createElement('img');
    remove.src = '../image/close-circle-outline.svg';
    remove.type = 'button';
    remove.height = 20;
    remove.width = 20;
    remove.id = 'removeBtn';
    form.appendChild(remove);

    remove.addEventListener('click', (event) => {
        event.preventDefault();
        if (confirm('Are you sure you want to remove this task?')) {
            form.remove();
            saveTasksToLocalStorage();
        }
    });

    const taskArea = document.getElementById('taskArea');
    if (taskArea) {
        taskArea.appendChild(form);
    } else {
        console.error("Element with id 'taskArea' not found.");
    }
};

// Initialize tasks from local storage
const initializeTasks = () => {
    const taskArea = document.getElementById('taskArea');
    if (taskArea) {
        taskArea.innerHTML = ''; // Clear existing tasks
    }
    const tasks = loadTasksFromLocalStorage();
    tasks.forEach(task => {
        createTaskCard(task.title, task.date, task.priority, task.complete);
    });
};

// Call initializeTasks on page load
window.addEventListener('DOMContentLoaded', initializeTasks);

export { createTaskCard };
