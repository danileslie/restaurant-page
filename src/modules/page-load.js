import '../styles.css';
   
   const createContent = () => {
    const content = document.createElement('div');
    content.setAttribute('id', 'content');
    document.body.appendChild(content);
   }
   
   const header = () => {
    createContent();
        const pageHeader = document.createElement('div');
        pageHeader.setAttribute('id', 'p-header');
    
        const headerText = document.createElement('h1');
        headerText.textContent = 'The Busy Behemoth';
        headerText.classList.add('blueTest')
        pageHeader.appendChild(headerText);
        content.appendChild(pageHeader);
    }


export default header;