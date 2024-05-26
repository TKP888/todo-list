// import plusTask from './plusTask';

// const createTodoSide = () => {
//     const content = document.querySelector('#sidebar');
//     if (!content) {
//         console.error("Element with id 'content' not found.");
//         return;
//     }

//     const sidebar = document.createElement('div');
//     sidebar.classList.add('sidebar');

//     const imageIcon = document.createElement('img');
//     imageIcon.src = '../image/list-box-outline.svg';
//     imageIcon.height = 50; // Fixed the incorrect attribute usage
//     imageIcon.width = 50;  // Fixed the incorrect attribute usage
//     sidebar.appendChild(imageIcon);

   

//     // const sidebar = document.createElement('div');
//     // sidebar.id = 'sidebar'
//     // sidebar.textContent = 'Projects';
//     // pageContent.appendChild(sidebar);

//     const newProjButton = document.createElement('button');
//     newProjButton.classList.add('newTaskBtn');
//     newProjButton.textContent = 'Add Project +';
//     newProjButton.addEventListener('click', plusTask); // Added event listener
//     sidebar.appendChild(newProjButton);


//     content.appendChild(sidebar);
// };

// export default createTodoSide;
