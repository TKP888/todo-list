import { addTaskToLibrary, saveTasksToLocalStorage } from './plusTask';

const createTaskCard = (titleValue = '', descriptionValue = '', dateValue = '', completeValue = false) => {
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

    const prioritySelect = document.createElement('select');
    prioritySelect.id = 'prioritySelect';

    const priorities = ['High', 'Medium', 'Low'];
    priorities.forEach(priority => {
        const option = document.createElement('option');
        option.value = priority;
        option.textContent = priority;
        prioritySelect.appendChild(option);
    });

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

    const endDate = document.createElement('input');
    endDate.type = 'date';
    endDate.id = 'endDate';
    endDate.placeholder = 'Enter Due Date';
    endDate.value = dateValue;
    form.appendChild(endDate);

    const complete = document.createElement('img');
    complete.src = '../image/check.svg';
    complete.type = 'button';
    complete.height = 40;
    complete.width = 40;
    complete.id = 'completeBtn';
    form.appendChild(complete);

    complete.addEventListener('click', () => {
        form.classList.toggle('completed');
        saveTasksToLocalStorage(myTaskLibrary);
    });

    const remove = document.createElement('img');
    remove.src = '../image/close-circle-outline.svg';
    remove.type = 'button';
    remove.height = 40;
    remove.width = 40;
    remove.id = 'removeBtn';
    form.appendChild(remove);

    remove.addEventListener('click', (event) => {
        event.preventDefault();
        const confirmed = confirm('Are you sure you want to remove this task?');
        if (confirmed) {
            form.remove();
            saveTasksToLocalStorage(myTaskLibrary);
        }
    });

    const taskArea = document.getElementById('taskArea');
    if (taskArea) {
        taskArea.appendChild(form);
    } else {
        console.error("Element with id 'taskArea' not found.");
    }

    if (titleValue !== '' || descriptionValue !== '' || dateValue !== '') {
        addTaskToLibrary(titleValue, descriptionValue, dateValue, completeValue);
    }
};

export { createTaskCard };
