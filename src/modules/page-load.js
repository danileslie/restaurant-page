import '../styles.css';
import loadContact from './contact-us.js';
import loadTabsTest from './tabs';

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
            loadContact();
            let tabs = document.querySelectorAll('.navs > li');
            for (let li of tabs) {
                
                li.addEventListener("click", () => {
                    for (let li of tabs) {
                        li.classList.remove('active');    
                    }    
                    li.classList.add('active');
            });
            
        };
        loadTabsTest();
        });

        pageHeader.appendChild(ul);
        pageHeader.appendChild(headerText);
        content.appendChild(pageHeader);
        
    }


export default header;