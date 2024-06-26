import { saveTasksToLocalStorage } from './saveLoad';

const createTaskCard = (titleValue = '', dateValue = '') => {
    const form = document.createElement('form');
    form.classList.add('newTaskForm');
    form.id = 'newTaskForm';
    form.draggable = true;

    const title = document.createElement('input');
    title.id = 'title';
    title.type = 'text';
    title.value = titleValue;
    form.appendChild(title);

    const date = document.createElement('input');
    date.id = 'date';
    date.type = 'date';
    date.value = dateValue;  // Set the date value
    form.appendChild(date);

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

    saveTasksToLocalStorage();
};

export { createTaskCard };
