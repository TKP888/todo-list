// taskCard.js

import { addTaskToLibrary, saveTasksToLocalStorage } from './plusTask';

const createProjCard = (titleValue = '', descriptionValue = '', dateValue = '', completeValue = false) => {
    const form = document.createElement('form');
    form.classList.add('newProjForm');
    form.id = 'newProjForm';
    form.draggable = true;
    if (completeValue) {
        form.classList.add('completed');
    }

    form.addEventListener('dragstart', (event) => {
        event.dataTransfer.setData('text/plain', null);
        form.classList.add('dragging');
    });

    form.addEventListener('dragend', () => {
        form.classList.remove('dragging');
    });

    const title = document.createElement('input');
    // Remove the incorrect type assignment
    // title.type = 'text';
    title.id = 'title';
// title.rows = 7;
// title.cols = 24;
    title.value = titleValue;
    form.appendChild(title);



    const remove = document.createElement('img');
    remove.src = '../image/close-circle-outline.svg';
    remove.type = 'button';
    remove.height = 20;
    remove.width = 20;
    remove.textContent = 'Remove';
    remove.id = 'removeProjBtn';
    form.appendChild(remove);

    remove.addEventListener('click', (event) => {
        event.preventDefault();
        const confirmed = confirm('Are you sure you want to remove this project?');
        if (confirmed) {
            form.remove();
            saveFormsToLocalStorage();
        }
    });

    const projArea = document.getElementById('projArea');
    if (projArea) {
        projArea.appendChild(form);
    } else {
        console.error("Element with id 'projArea' not found.");
    }

    // Add the task to the library
    if (titleValue !== '' || descriptionValue !== '' || dateValue !== '') {
        addTaskToLibrary(titleValue, descriptionValue, dateValue, completeValue);
    }

    saveFormsToLocalStorage();
};

export { createProjCard };
