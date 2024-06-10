// taskCard.js

import { addTaskToLibrary } from './plusTask';

// Function to create a task card
const createTaskCard = (titleValue = '', descriptionValue = '', dateValue = '', completeValue = false) => {
    // Create the form element
    const form = document.createElement('form');
    form.classList.add('newTaskForm');
    form.id = 'newTaskForm';
    form.draggable = true;
    if (completeValue) {
        form.classList.add('completed');
    }

    // Add event listeners for drag and drop functionality
    form.addEventListener('dragstart', (event) => {
        event.dataTransfer.setData('text/plain', null);
        form.classList.add('dragging');
    });

    form.addEventListener('dragend', () => {
        form.classList.remove('dragging');
    });

    // Create and append the title input
    const title = document.createElement('input');
    title.type = 'text';
    title.id = 'title';
    title.placeholder = 'Task Title';
    title.value = titleValue;
    form.appendChild(title);

    // Create and append the description input
    const description = document.createElement('input');
    description.type = 'text';
    description.id = 'description';
    description.placeholder = 'Description';
    description.value = descriptionValue;
    form.appendChild(description);

    // Create and append the priority select
    const prioritySelect = document.createElement('select');
    prioritySelect.id = 'prioritySelect';

    const priorities = ['High', 'Medium', 'Low'];
    priorities.forEach(priority => {
        const option = document.createElement('option');
        option.value = priority;
        option.textContent = priority;
        prioritySelect.appendChild(option);
    });

    // Change the border color based on priority
    prioritySelect.addEventListener('change', () => {
        switch (prioritySelect.value) {
            case 'High':
                form.style.borderLeftColor = '#be123c';
                break;
            case 'Medium':
                form.style.borderLeftColor = '#eab308';
                break;
            case 'Low':
                form.style.borderLeftColor = '#16a34a';
                break;
            default:
                form.style.borderLeftColor = '#be123c';
        }
    });

    form.appendChild(prioritySelect);

    // Create and append the end date input
    const endDate = document.createElement('input');
    endDate.type = 'date';
    endDate.id = 'endDate';
    endDate.placeholder = 'Enter Due Date';
    endDate.value = dateValue;
    form.appendChild(endDate);

    // Create and append the complete button
    const complete = document.createElement('img');
    complete.src = '../image/check.svg';
    complete.type = 'button';
    complete.height = 40;
    complete.width = 40;
    complete.textContent = 'Complete';
    complete.id = 'completeBtn';
    form.appendChild(complete);

    // Toggle complete status and save to local storage on click
    complete.addEventListener('click', () => {
        form.classList.toggle('completed');
        // saveFormsToLocalStorage();
    });

    // Create and append the remove button
    const remove = document.createElement('img');
    remove.src = '../image/close-circle-outline.svg';
    remove.type = 'button';
    remove.height = 40;
    remove.width = 40;
    remove.textContent = 'Remove';
    remove.id = 'removeBtn';
    form.appendChild(remove);

    // Confirm removal of the task and save to local storage on click
    remove.addEventListener('click', (event) => {
        event.preventDefault();
        const confirmed = confirm('Are you sure you want to remove this task?');
        if (confirmed) {
            form.remove();
            // saveFormsToLocalStorage();
        }
    });

    // Append the form to the task area
    const taskArea = document.getElementById('taskArea');
    if (taskArea) {
        taskArea.appendChild(form);
    } else {
        console.error("Element with id 'taskArea' not found.");
    }

    // Add the task to the library and save forms to local storage
    if (titleValue !== '' || descriptionValue !== '' || dateValue !== '') {
        addTaskToLibrary(titleValue, descriptionValue, dateValue, completeValue);
    }

    // saveFormsToLocalStorage();
};

export { createTaskCard };
