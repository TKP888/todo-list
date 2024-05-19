const createTaskCard = () => {
    const form = document.createElement('form');
    form.classList.add('newTaskForm');
    form.id = 'newTaskForm';  // Added id for the form

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

    const startDate = document.createElement('input');
    startDate.type = 'date';
    startDate.id = 'date';  // Added id
    form.appendChild(startDate);

    const complete = document.createElement('input');
    complete.type = 'checkbox';
    complete.id = 'complete';  // Added id
    const completeLabel = document.createElement('label');
    completeLabel.textContent = 'Complete: ';
    completeLabel.appendChild(complete);
    form.appendChild(completeLabel);

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Submit';
    form.appendChild(submitButton);

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

// const createTaskCard = () => {
//     const form = document.createElement('form');
//     form.classList.add('newTaskForm');

//     const title = document.createElement('input');
//     title.type = 'text';
//     title.placeholder = 'Task Title';
//     form.appendChild(title);

//     const description = document.createElement('input');
//     description.type = 'text';
//     description.placeholder = 'Description';
//     form.appendChild(description);

//     const startDate = document.createElement('input');
//     startDate.type = 'date';
//     const startDateLabel = document.createElement('label');
//     startDateLabel.textContent = 'Start Date: ';
//     startDateLabel.appendChild(startDate);
//     form.appendChild(startDateLabel);

//     const complete = document.createElement('input');
//     complete.type = 'checkbox';
//     const completeLabel = document.createElement('label');
//     completeLabel.textContent = 'Complete: ';
//     completeLabel.appendChild(complete);
//     form.appendChild(completeLabel);

//     const submitButton = document.createElement('button');
//     submitButton.type = 'submit';
//     submitButton.textContent = 'Submit';
//     form.appendChild(submitButton);

//     // Ensure `pageContent` and `content` are defined and refer to the correct DOM elements
//     const pageContent = document.createElement('div'); // or get it from the DOM
//     pageContent.appendChild(form);

//     const content = document.getElementById('content'); // or the correct element
//     content.appendChild(pageContent);
// }

// export default createTaskCard;














// const createTaskCard = () => {

// const form = document.createElement('form');
// form.classList.add('newTaskForm');

//     const title = document.createElement('input');
//     title.type = 'text';
//     title.placeholder = 'Task Title';
//     form.appendChild(title);
    
//     const description = document.createElement('input');
//     description.type = 'text';
//     description.placeholder = 'Description';
//     form.appendChild(description);

//     const startDate = document.createElement('input');
//     startDate.type = 'date';
//     startDate.placeholder = 'startDate';
//     form.appendChild(startDate);

//                         // const deadline = document.createElement('input');
//                         // deadline.type = 'date';
//                         // deadline.placeholder = 'deadline';
//                         // form.appendChild(deadline);

//     const complete = document.createElement('input');
//     complete.type = 'checkbox';
//     form.appendChild(complete);

//     const submitButton = document.createElement('button');
//     submitButton.type = 'submit';
//     submitButton.value = 'submit';
//     form.appendChild(submitButton);


// pageContent.appendChild(form);


// content.appendChild(pageContent);
// }

// export default createTaskCard;