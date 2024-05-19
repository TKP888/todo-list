import createTaskCard from "./taskCard";





class Task {
    constructor(title, description, date, complete) {
        this.title = title;
        this.description = description;
        this.date = date;
        this.complete = complete;
    }

    toggleComplete() {
        this.complete = !this.complete;
    }
}

let myTaskLibrary = [];

function toggleComplete(index) {
    myTaskLibrary[index].toggleComplete();
    render();
}

function render() {
    let libraryEl = document.querySelector("#taskList");
    if (!libraryEl) {
        console.error("Element with id 'taskList' not found.");
        return;
    }
    libraryEl.innerHTML = "";
    for (let i = 0; i < myTaskLibrary.length; i++) {
        let task = myTaskLibrary[i];
        let taskEl = document.createElement("div");
        taskEl.setAttribute("class", "taskCard");
        taskEl.innerHTML = `
            <div class="cardHeader">
                <h3 class="title">${task.title}</h3>
                <h5 class="description">${task.description}</h5>
            </div>
            <div class="cardBody">
                <p>${task.date} date</p>
                <p class="readStatus">${task.complete ? "Completed" : "Not Completed Yet"}</p>
                <button class="removeBtn" data-index="${i}">Remove</button>
                <button class="toggleReadBtn" data-index="${i}">Toggle Complete</button>
            </div>`;
        libraryEl.appendChild(taskEl);
    }

    document.querySelectorAll('.removeBtn').forEach(btn => {
        btn.addEventListener('click', (event) => {
            let index = event.target.getAttribute('data-index');
            removeTask(index);
        });
    });

    document.querySelectorAll('.toggleReadBtn').forEach(btn => {
        btn.addEventListener('click', (event) => {
            let index = event.target.getAttribute('data-index');
            toggleComplete(index);
        });
    });
}

function removeTask(index) {
    myTaskLibrary.splice(index, 1);
    render();
}

function addTaskToLibrary(title, description, date, complete) {
    let newTask = new Task(title, description, date, complete);
    myTaskLibrary.push(newTask);
    render();
}

// Call createTaskCard to render the task form on page load
createTaskCard();

// Assuming that the form is rendered with id 'newTaskForm'
document.querySelector("#newTaskForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let title = document.querySelector("#title").value;
    let description = document.getElementById("description").value;
    let date = document.getElementById("date").value;
    let complete = document.getElementById("complete").checked;
    addTaskToLibrary(title, description, date, complete);
});

export default createTaskCard;

            // import createTaskCard from "./taskCard";


            // class Task {
            //     constructor(title, description, date, complete) {
            //         this.title = title;
            //         this.description = description;
            //         this.date = date;
            //         this.complete = complete;
            //     }
            //     toggleComplete() {
            //         this.complete = !this.complete;
            //     }
            // }


            // let myTaskLibrary = [];

            // function toggleComplete(index){
            //     myTaskLibrary[index].toggleComplete();
            //     render();
            // }
            
            // function render(){
            //     let libraryEl = document.querySelector("#taskList");
            //     libraryEl.innerHTML = "";
            //     for (let i = 0; i < myTaskLibrary.length; i++) {
            //         let tasks = myTaskLibrary[i]
            //         let tasksEl = document.createElement("div");
            //         tasksEl.setAttribute("class", "bookCard");
            //         tasksEl.innerHTML = `
                    
            //         <div class="cardHeader">
            //             <h3 class="title">${tasks.title}</h3>
            //             <h5 class="description">${tasks.description}</h5>
            //         </div>
            //         <div class="cardBody">
            //         <p>${tasks.date} date</p>
            //         <p class="readStatus">${tasks.complete ? "Completed" : "Not Completed Yet"}</p>
            //         <button class="removeBtn" onclick="removeTask(${i})">Remove</button>
            //         <button class="toggleReadBtn" onclick="toggleComplete(${i})">Toggle Complete</button>
            //         </div>     
            //             `;
            //         libraryEl.appendChild(tasksEl);
            //     }
            // }

            // function removeTask(index) {
            // myTaskLibrary.splice(index, 1);
            // render();
            // }

            // function addTaskToLibrary(title, description, date, complete) {
            //     let newTask = new Task(title, description, date, complete);
            //     myTaskLibrary.push(newTask);
            //     render();
            // }

            // // let newTaskBtn = document.querySelector("#newTaskBtn");
            // // newTaskBtn.addEventListener("click", function () {
            // //     let newTaskForm = document.querySelector("#newTaskForm");
            // //     newTaskForm.style.display = "grid";
            // // });

            

            // // document.querySelector("#newTaskForm").addEventListener("submit", function (event) {
            // //     event.preventDefault();
            // //        let title = document.querySelector("#title").value;
            // //        let description = document.getElementById("description").value;
            // //        let date = document.getElementById("date").value;
            // //        let complete = document.getElementById("complete").checked;
            // //     addTaskToLibrary(title, description, date, complete);
            // // });


// plusTask.addEventListener(click);














    // <form id="newBookForm" style="display: none;">
    // <Label for="title">Title:</Label>
    // <input type="text" id="title">
    // <Label for="author">Author:</Label>
    // <input type="text" id="author">
    // <Label for="pages" >Number of Pages:</Label>
    // <input type="number" id="pages">
    // <Label for="read">Read:</Label>
    // <input type="checkbox" id="read">
    // <input type="submit" value="Add Book">
    // </form>
    // <div id="library"></div>


    // export default 