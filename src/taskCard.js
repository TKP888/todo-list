const createTaskCard = () => {
    const form = document.createElement('form');
    form.classList.add('newTaskForm');
    form.id = 'newTaskForm';  // Added id for the form

    let tallyLight = document.createElement('div');
    tallyLight.id = "tallyLight";

    const title = document.createElement('input');
    title.type = 'text';
    title.id = 'title';  // Added id
    title.placeholder = 'Task Title';
    form.appendChild(title);

    const description = document.createElement('input');
    description.type = 'text';
    description.id = 'description';  // Added id
    description.placeholder = 'Description';
    form.appendChild(description);

    const prioritySelect = document.createElement('select');
    prioritySelect.id = 'prioritySelect';  // Added id
    prioritySelect.placeholder = 'Set Priority';

    const priorities = ['High', 'Medium', 'Low'];
    priorities.forEach(priority => {
        const option = document.createElement('option');
        option.value = priority;
        option.textContent = priority;
        prioritySelect.appendChild(option);
    });

    form.appendChild(prioritySelect);


//     <select id = "myList" onchange = "favTutorial()" >  
// <option> ---Choose tutorial--- </option>  
// <option> w3schools </option>  
// <option> Javatpoint </option>  
// <option> tutorialspoint </option>  
// <option> geeksforgeeks </option>  
// </select>  

    const endDate = document.createElement('input');
    endDate.type = 'date';
    endDate.id = 'endDate';  // Added id
    endDate.placeholder = 'Enter Due Date';
    form.appendChild(endDate);

    const complete = document.createElement('input');
    complete.type = 'checkbox';
    complete.id = 'complete';  // Added id
    const completeLabel = document.createElement('label');
    completeLabel.textContent = 'Complete: ';
    completeLabel.appendChild(complete);
    form.appendChild(completeLabel);

    // const submitButton = document.createElement('button');
    // submitButton.type = 'submit';
    // submitButton.textContent = 'Submit';
    // form.appendChild(submitButton);

    const remove = document.createElement('button');
    remove.type = 'remove';
    remove.textContent = 'Remove';
    remove.id = 'removeBtn';  // Added id
    form.appendChild(remove);

        // Event listener for the remove button
        remove.addEventListener('click', () => {
            event.preventDefault();
            const confirmed = confirm('Are you sure you want to remove this task?');
            if (confirmed) {
                form.remove();
            }
        });

    const pageContent = document.createElement('div');
    pageContent.appendChild(form);

    const content = document.getElementById('content');
    if (content) {
        content.appendChild(pageContent);
    } else {
        console.error("Element with id 'content' not found.");
    }
}

export default createTaskCard;

