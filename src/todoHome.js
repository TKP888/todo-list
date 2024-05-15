

const createTodoHomePage = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    const imageIcon = document.createElement('img');
    imageIcon.src = '../image/list-box-outline.svg';
    imageIcon.height = '300';
    imageIcon.width = '300';
    pageContent.appendChild(imageIcon)
 
    const headline = document.createElement('h1');
    headline.textContent = 'Welcome To DoList';
    pageContent.appendChild(headline)
    
    const intro = document.createElement('p');
    intro.textContent = 'Please create your tasks and enjoy being productive';
    pageContent.appendChild(intro)

content.appendChild(pageContent)

}

export default createTodoHomePage;