// main.js or createTodoHomePage.js

import { createTaskCard, saveFormsToLocalStorage } from './taskCard';
import { plusTask, loadTasksFromLocalStorage, renderTasks } from './plusTask';
import { createNoteCard } from './noteCard';

const createTodoHomePage = () => {
    const content = document.querySelector('#content');
    if (!content) {
        console.error("Element with id 'content' not found.");
        return;
    }

    // Side Bar Elements
    const sideBar = document.createElement('div');
    sideBar.classList.add('side-content');

    const imageIcon = document.createElement('img');
    imageIcon.src = '../image/list-box-outline.svg';
    imageIcon.height = 50;
    imageIcon.width = 50;
    sideBar.appendChild(imageIcon);

    const newProjButton = document.createElement('button');
    newProjButton.classList.add('newTaskBtn');
    newProjButton.textContent = 'Add Project +';
    newProjButton.addEventListener('click', plusTask);
    newProjButton.addEventListener('click', saveFormsToLocalStorage);
    sideBar.appendChild(newProjButton);

    // Page Content Elements
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    const headline = document.createElement('h1');
    headline.textContent = 'Here are your tasks for today:';
    pageContent.appendChild(headline);

    const newTaskButton = document.createElement('img');
    newTaskButton.src = '../image/plus-box.svg';
    newTaskButton.type = 'button';
    newTaskButton.height = 40;
    newTaskButton.width = 40;
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

    const noteHeadline = document.createElement('h1');
    noteHeadline.textContent = 'Take Some Notes:';
    noteBar.appendChild(noteHeadline);

    const newNoteButton = document.createElement('img');
    newNoteButton.src = '../image/plus-box.svg';
    newNoteButton.type = 'button';
    newNoteButton.height = 40;
    newNoteButton.width = 40;
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
