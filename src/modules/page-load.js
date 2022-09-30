import '../styles.css';



   const createContent = () => {
    const content = document.createElement('div');
    content.setAttribute('id', 'content');
    document.body.appendChild(content);
   }
   
   const header = () => {
    
    createContent();
        const pageHeader = document.createElement('div');
        const navItems = ['Home', 'Menu', 'Contact Us'];
        const ul = document.createElement('ul');
        
        ul.setAttribute('class', 'navs');

        pageHeader.setAttribute('id', 'header');
    
        const headerText = document.createElement('h1');
        headerText.textContent = 'The Busy Behemoth';
        headerText.classList.add('blueTest');

        navItems.forEach((item) => {
            let li = document.createElement('li');
            li.classList.add('tabs');
            ul.appendChild(li);
            li.innerHTML = item;
        });

        document.addEventListener("DOMContentLoaded", () => {
            let tabs = document.querySelectorAll('.tabs');
            tabs.forEach((tab) =>
  tab.addEventListener("click", () => {
    console.log(tab.textContent);
  }));
        });

        pageHeader.appendChild(ul);
        pageHeader.appendChild(headerText);
        content.appendChild(pageHeader);
        
    }


export default header;