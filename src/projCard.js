// projCard.js

import { saveProjectsToLocalStorage } from './saveLoad';

const createProjCard = (titleValue = '') => {
    const form = document.createElement('form');
    form.classList.add('newProjForm');
    form.id = 'newProjForm';
    form.draggable = true;

    form.addEventListener('dragstart', (event) => {
        event.dataTransfer.setData('text/plain', null);
        form.classList.add('dragging');
    });

    form.addEventListener('dragend', () => {
        form.classList.remove('dragging');
    });

    form.addEventListener('click', () => {
        populateTaskArea(titleValue);
        populateNoteArea(titleValue);
    });

    const title = document.createElement('input');
    title.id = 'title';
    title.value = titleValue;
    form.appendChild(title);

    const remove = document.createElement('img');
    remove.src = '../image/close-circle-outline.svg';
    remove.type = 'button';
    remove.height = 20;
    remove.width = 20;
    remove.id = 'removeProjBtn';
    form.appendChild(remove);

    remove.addEventListener('click', (event) => {
        event.preventDefault();
        const confirmed = confirm('Are you sure you want to remove this project?');
        if (confirmed) {
            form.remove();
            saveProjectsToLocalStorage();
        }
    });

    const projArea = document.getElementById('projArea');
    if (projArea) {
        projArea.appendChild(form);
    } else {
        console.error("Element with id 'projArea' not found.");
    }

    saveProjectsToLocalStorage();
};

const populateTaskArea = (titleValue) => {
    renderTasks(titleValue);
};

const populateNoteArea = (titleValue) => {
    const noteArea = document.getElementById('noteArea');
    if (noteArea) {
        noteArea.innerHTML = '';
        const note = document.createElement('div');
        noteArea.appendChild(note);
    } else {
        console.error("Element with id 'noteArea' not found.");
    }
};

export { createProjCard };
