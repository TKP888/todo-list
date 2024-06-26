import { createTaskCard } from './taskCard';
import { createNoteCard } from './noteCard';
import { createProjCard } from './projCard';
import { loadTasksFromLocalStorage, saveTasksToLocalStorage, loadProjectsFromLocalStorage, saveProjectsToLocalStorage, loadNotesFromLocalStorage, saveNotesToLocalStorage } from './saveLoad';

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
    newProjButton.addEventListener('click', () => {
        createProjCard();
        saveProjectsToLocalStorage();
    });
    sideBar.appendChild(newProjButton);

    const projArea = document.createElement('div');
    projArea.classList.add('projArea');
    projArea.id = 'projArea';
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
    newTaskButton.addEventListener('click', () => {
        createTaskCard();
        saveTasksToLocalStorage();
    });
    pageContent.appendChild(newTaskButton);

    const taskArea = document.createElement('div');
    taskArea.classList.add('taskArea');
    taskArea.id = 'taskArea';
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
    newNoteButton.addEventListener('click', () => {
        createNoteCard();
        saveNotesToLocalStorage();
    });
    noteBar.appendChild(newNoteButton);

    const noteArea = document.createElement('div');
    noteArea.classList.add('noteArea');
    noteArea.id = 'noteArea';
    noteBar.appendChild(noteArea);

    // Append side bar, page content, and note bar to content
    content.appendChild(sideBar);
    content.appendChild(pageContent);
    content.appendChild(noteBar);

    // Load and render tasks from local storage
    const tasks = loadTasksFromLocalStorage();
    tasks.forEach(task => {
        createTaskCard(task.title, task.date);  // Pass date value
    });

    // Load and render projects from local storage
    const projects = loadProjectsFromLocalStorage();
    projects.forEach(project => {
        createProjCard(project.title);
    });

    // Load and render notes from local storage
    const notes = loadNotesFromLocalStorage();
    notes.forEach(note => {
        createNoteCard(note.title);
    });
};

export default createTodoHomePage;
