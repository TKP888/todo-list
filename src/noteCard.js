// taskCard.js

import { addTaskToLibrary, saveTasksToLocalStorage } from './plusTask';

const createNoteCard = (titleValue = '', descriptionValue = '', dateValue = '', completeValue = false) => {
    const form = document.createElement('form');
    form.classList.add('newTaskForm');
    form.id = 'newTaskForm';
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
    title.type = 'text';
    title.id = 'title';
    title.placeholder = 'Task Title';
    title.value = titleValue;
    form.appendChild(title);

    const description = document.createElement('input');
    description.type = 'text';
    description.id = 'description';
    description.placeholder = 'Description';
    description.value = descriptionValue;
    form.appendChild(description);

   
    // const priorities = ['High', 'Medium', 'Low'];
    // priorities.forEach(priority => {
    //     const option = document.createElement('option');
    //     option.value = priority;
    //     option.textContent = priority;
    //     prioritySelect.appendChild(option);
    // });

    // prioritySelect.addEventListener('change', () => {
    //     switch (prioritySelect.value) {
    //         case 'High':
    //             form.style.borderLeftColor = '#be123c';
    //             break;
    //         case 'Medium':
    //             form.style.borderLeftColor = '#eab308';
    //             break;
    //         case 'Low':
    //             form.style.borderLeftColor = '#16a34a';
    //             break;
    //         default:
    //             form.style.borderLeftColor = '#be123c';
    //     }
    // });

    // form.appendChild(prioritySelect);

   
    const remove = document.createElement('img');
    remove.src = '../image/close-circle-outline.svg';
    remove.type = 'button';
    remove.height = 40;
    remove.width = 40;
    remove.textContent = 'Remove';
    remove.id = 'removeBtn';
    form.appendChild(remove);

    remove.addEventListener('click', (event) => {
        event.preventDefault();
        const confirmed = confirm('Are you sure you want to remove this note?');
        if (confirmed) {
            form.remove();
            saveFormsToLocalStorage();
        }
    });

    const noteArea = document.getElementById('noteArea');
    if (noteArea) {
        noteArea.appendChild(form);
    } else {
        console.error("Element with id 'noteArea' not found.");
    }

    // Add the task to the library
    if (titleValue !== '' || descriptionValue !== '' || dateValue !== '') {
        addTaskToLibrary(titleValue, descriptionValue, dateValue, completeValue);
    }

    saveFormsToLocalStorage();
};

export { createNoteCard,  };


