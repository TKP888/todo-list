import createTaskCard from './plusTask';
import plusTask from './plusTask';

const createTodoHomePage = () => {
    const content = document.querySelector('#content');
    if (!content) {
        console.error("Element with id 'content' not found.");
        return;
    }

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
    sideBar.appendChild(newProjButton);

    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    const headline = document.createElement('h1');
    headline.textContent = 'Here are your tasks for today:';
    pageContent.appendChild(headline);

    const newTaskButton = document.createElement('img');
    newTaskButton.src = '../image/plus-box.svg'
    newTaskButton.type = 'button';
    newTaskButton.height = 40;
    newTaskButton.width = 40;
    newTaskButton.classList.add('newTaskBtn');
    // newTaskButton.textContent = 'Add Task +';
    newTaskButton.id = 'newTaskBtn';
    newTaskButton.addEventListener('click', createTaskCard);
    pageContent.appendChild(newTaskButton);

    const taskArea = document.createElement('div');
    taskArea.classList.add('taskArea');
    taskArea.id = 'taskArea'; // Add an id for easier selection
    pageContent.appendChild(taskArea);

    const noteBar = document.createElement('div');
    noteBar.classList.add('note-content');

    content.appendChild(sideBar);
    content.appendChild(pageContent);
    content.appendChild(noteBar);
};

export default createTodoHomePage;
