// main.js or createTodoHomePage.js

import { createTaskCard, saveFormsToLocalStorage } from './taskCard';
import { plusTask, loadTasksFromLocalStorage, renderTasks } from './plusTask';
import { createNoteCard } from './noteCard';
import { createProjCard } from './projCard';

const createTodoHomePage = () => {
    const content = document.querySelector('#content');
    if (!content) {
        console.error("Element with id 'content' not found.");
        return;
    }

    // Side Bar Elements
    const sideBar = document.createElement('div');
    sideBar.classList.add('side-content');

    const sideHeadline = document.createElement('h3');
    sideHeadline.textContent = 'Projects:';
    sideBar.appendChild(sideHeadline);

    const newProjButton = document.createElement('img');
    newProjButton.src = '../image/plus-box.svg';
    newProjButton.type = 'button';
    newProjButton.height = 30;
    newProjButton.width = 30;
    newProjButton.classList.add('newProjBtn');
    newProjButton.id = 'newProjBtn';
    newProjButton.addEventListener('click', () => createProjCard());
    newProjButton.addEventListener('click', saveFormsToLocalStorage);
    sideBar.appendChild(newProjButton);


    const projArea = document.createElement('div');
    projArea.classList.add('projArea');
    projArea.id = 'projArea';

    projArea.addEventListener('dragover', (event) => {
        event.preventDefault();
        const afterElement = getDragAfterElement(projArea, event.clientY);
        const dragging = document.querySelector('.dragging');
        if (afterElement == null) {
            projArea.appendChild(dragging);
        } else {
            projArea.insertBefore(dragging, afterElement);
        }
    });

    projArea.addEventListener('dragenter', (event) => {
        if (!placeholder) {
            placeholder = document.createElement('div');
            placeholder.classList.add('placeholder');
        }
        const afterElement = getDragAfterElement(projArea, event.clientY);
        if (afterElement == null) {
            projArea.appendChild(placeholder);
        } else {
            projArea.insertBefore(placeholder, afterElement);
        }
    });

    projArea.addEventListener('dragleave', () => {
        if (placeholder) {
            placeholder.remove();
        }
    });

    projArea.addEventListener('drop', (event) => {
        event.preventDefault();
        const dragging = document.querySelector('.dragging');
        if (dragging) {
            projArea.insertBefore(dragging, placeholder);
        }
        if (placeholder) {
            placeholder.remove();
        }
    });

    sideBar.appendChild(projArea);






    // Page Content Elements
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    const headline = document.createElement('h3');
    headline.textContent = 'Here are your tasks for today:';
    pageContent.appendChild(headline);

    const newTaskButton = document.createElement('img');
    newTaskButton.src = '../image/plus-box.svg';
    newTaskButton.type = 'button';
    newTaskButton.height = 30;
    newTaskButton.width = 30;
    newTaskButton.classList.add('newTaskBtn');
    newTaskButton.id = 'newTaskBtn';
    newTaskButton.addEventListener('click', () => createTaskCard());
    newTaskButton.addEventListener('click', saveFormsToLocalStorage);
    pageContent.appendChild(newTaskButton);

    const taskArea = document.createElement('div');
    taskArea.classList.add('taskArea');
    taskArea.id = 'taskArea';






    let placeholder = null;

    taskArea.addEventListener('dragover', (event) => {
        event.preventDefault();
        const afterElement = getDragAfterElement(taskArea, event.clientY);
        const dragging = document.querySelector('.dragging');
        if (afterElement == null) {
            taskArea.appendChild(dragging);
        } else {
            taskArea.insertBefore(dragging, afterElement);
        }
    });

    taskArea.addEventListener('dragenter', (event) => {
        if (!placeholder) {
            placeholder = document.createElement('div');
            placeholder.classList.add('placeholder');
        }
        const afterElement = getDragAfterElement(taskArea, event.clientY);
        if (afterElement == null) {
            taskArea.appendChild(placeholder);
        } else {
            taskArea.insertBefore(placeholder, afterElement);
        }
    });

    taskArea.addEventListener('dragleave', () => {
        if (placeholder) {
            placeholder.remove();
        }
    });

    taskArea.addEventListener('drop', (event) => {
        event.preventDefault();
        const dragging = document.querySelector('.dragging');
        if (dragging) {
            taskArea.insertBefore(dragging, placeholder);
        }
        if (placeholder) {
            placeholder.remove();
        }
    });

    pageContent.appendChild(taskArea);

    // Note Bar Elements
    const noteBar = document.createElement('div');
    noteBar.classList.add('note-content');

    const noteHeadline = document.createElement('h3');
    noteHeadline.textContent = 'Take Some Notes:';
    noteBar.appendChild(noteHeadline);

    const newNoteButton = document.createElement('img');
    newNoteButton.src = '../image/plus-box.svg';
    newNoteButton.type = 'button';
    newNoteButton.height = 30;
    newNoteButton.width = 30;
    newNoteButton.classList.add('newNoteBtn');
    newNoteButton.id = 'newNoteBtn';
    newNoteButton.addEventListener('click', () => createNoteCard());
    newNoteButton.addEventListener('click', saveFormsToLocalStorage);
    noteBar.appendChild(newNoteButton);

    const noteArea = document.createElement('div');
    noteArea.classList.add('noteArea');
    noteArea.id = 'noteArea';

    noteArea.addEventListener('dragover', (event) => {
        event.preventDefault();
        const afterElement = getDragAfterElement(noteArea, event.clientY);
        const dragging = document.querySelector('.dragging');
        if (afterElement == null) {
            noteArea.appendChild(dragging);
        } else {
            noteArea.insertBefore(dragging, afterElement);
        }
    });

    noteArea.addEventListener('dragenter', (event) => {
        if (!placeholder) {
            placeholder = document.createElement('div');
            placeholder.classList.add('placeholder');
        }
        const afterElement = getDragAfterElement(noteArea, event.clientY);
        if (afterElement == null) {
            noteArea.appendChild(placeholder);
        } else {
            noteArea.insertBefore(placeholder, afterElement);
        }
    });

    noteArea.addEventListener('dragleave', () => {
        if (placeholder) {
            placeholder.remove();
        }
    });

    noteArea.addEventListener('drop', (event) => {
        event.preventDefault();
        const dragging = document.querySelector('.dragging');
        if (dragging) {
            noteArea.insertBefore(dragging, placeholder);
        }
        if (placeholder) {
            placeholder.remove();
        }
    });

    noteBar.appendChild(noteArea);

    // Append side bar, page content, and note bar to content
    content.appendChild(sideBar);
    content.appendChild(pageContent);
    content.appendChild(noteBar);

    // Load tasks and forms from local storage
    loadTasksFromLocalStorage();
    renderTasks();
};

const getDragAfterElement = (container, y) => {
    const draggableElements = [...container.querySelectorAll('.newTaskForm:not(.dragging)')];

    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
};

export default createTodoHomePage;
