import plusTask from './plusTask';

const createTodoHomePage = () => {
    const content = document.querySelector('#content');
    if (!content) {
        console.error("Element with id 'content' not found.");
        return;
    }

    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    const imageIcon = document.createElement('img');
    imageIcon.src = '../image/list-box-outline.svg';
    imageIcon.height = 50; // Fixed the incorrect attribute usage
    imageIcon.width = 50;  // Fixed the incorrect attribute usage
    pageContent.appendChild(imageIcon);

    const headline = document.createElement('h1');
    headline.textContent = 'Welcome To DoList';
    pageContent.appendChild(headline);

    const intro = document.createElement('p');
    intro.textContent = 'Please create your tasks and enjoy being productive';
    pageContent.appendChild(intro);

    const sidebar = document.createElement('div');
    sidebar.id = 'sidebar'
    sidebar.textContent = 'Projects';
    pageContent.appendChild(sidebar);



    const newProjButton = document.createElement('button');
    newProjButton.classList.add('newTaskBtn');
    newProjButton.textContent = 'Add Project +';
    newProjButton.addEventListener('click', plusTask); // Added event listener
    pageContent.appendChild(newProjButton);



    const newTaskButton = document.createElement('button');
    newTaskButton.classList.add('newTaskBtn');
    newTaskButton.textContent = 'Add Task +';
    newTaskButton.addEventListener('click', plusTask); // Added event listener
    pageContent.appendChild(newTaskButton);

    // Uncomment and modify this block if needed
    // const taskList = document.createElement('div');
    // taskList.classList.add('taskList');
    // pageContent.appendChild(taskList);

    content.appendChild(pageContent);
};

export default createTodoHomePage;
