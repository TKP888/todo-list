// // noteCard.js

// import { saveNotesToLocalStorage } from './saveLoad';


// const createNoteCard = (titleValue = '') => {
//     const form = document.createElement('form');
//     form.classList.add('newNoteForm');
//     form.id = 'newNoteForm';
//     form.draggable = true;
// }
//     // if (completeValue) {
//     //     form.classList.add('completed');
//     // }

//     // form.addEventListener('dragstart', (event) => {
//     //     event.dataTransfer.setData('text/plain', null);
//     //     form.classList.add('dragging');
//     // });

//     // form.addEventListener('dragend', () => {
//     //     form.classList.remove('dragging');
//     // });

//     const title = document.createElement('textarea');
//     title.id = 'title';
//     title.rows = 7;
//     title.cols = 24;
//     title.value = titleValue;
//     form.appendChild(title);

//     const remove = document.createElement('img');
//     remove.src = '../image/close-circle-outline.svg';
//     remove.type = 'button';
//     remove.height = 20;
//     remove.width = 20;
//     remove.id = 'removeNoteBtn';
//     form.appendChild(remove);

//     remove.addEventListener('click', (event) => {
//         event.preventDefault();
//         const confirmed = confirm('Are you sure you want to remove this note?');
//         if (confirmed) {
//             form.remove();
//             saveNotesToLocalStorage();
//         }
//     });

//     // const noteArea = document.getElementById('noteArea');
//     // if (noteArea) {
//     //     noteArea.appendChild(form);
//     // } else {
//     //     console.error("Element with id 'noteArea' not found.");
//     // }

//     // // Add the task to the library if note details are provided
//     // if (titleValue !== '' || descriptionValue !== '' || dateValue !== '') {
//     //     addTaskToLibrary();
// {

//     saveNotesToLocalStorage();
// };

// export { createNoteCard };
