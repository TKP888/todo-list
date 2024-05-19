import createTaskCard from './taskCard';
import createTodoHomePage from './todoHome';

function initialLoad() {
	createTodoHomePage();
    createTaskCard();
}

export default initialLoad;