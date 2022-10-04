import '../styles.css';
import loadContact from './contact-us.js';
import loadTestPage from './testpage';
import loadTabsTest from './tabs';

   const createContent = () => {
    const content = document.createElement('div');
    content.setAttribute('id', 'content');
    document.body.appendChild(content);
   }
   
   const header = () => {
    
    createContent();

        const pages = document.querySelectorAll('data-content');
        const pageHeader = document.createElement('header');
        pageHeader.setAttribute('id', 'header');
        pageHeader.innerHTML = `
        <nav>
            <ul class="tabs">
            <li data-value='#home'>Home</li>
            <li data-value='#menu'>Menu</li>
            <li data-value='#contact'>Contact Us</li>
            </ul>
            `
    //     const navItems = ['Home', 'Menu', 'Contact Us'];
    //     const navData = ['tab1', 'tab2', 'tab3'];
    //     const ul = document.createElement('ul');
        
    //     ul.setAttribute('class', 'navs');

        // pageHeader.setAttribute('id', 'header');
    
        const headerText = document.createElement('h1');
        headerText.textContent = 'The Busy Behemoth';
        headerText.classList.add('blueTest');
        

    //     navItems.forEach((item) => {
    //         let li = document.createElement('li');
    //         li.setAttribute('id', navData);
    //         li.classList.add('tabs');
    //         ul.appendChild(li);
    //         li.innerHTML = item;
    //     });


    //         loadContact();
    //         let tabs = document.querySelectorAll('.navs > li');
    //         for (let li of tabs) {
                
    //             li.addEventListener("click", () => {
    //                 for (let li of tabs) {
    //                     li.classList.remove('active');    
    //                 }    
    //                 li.classList.add('active');
    //         });
            
    //     };
    //     loadTabsTest();


    //     pageHeader.appendChild(ul);
        pageHeader.appendChild(headerText);
        content.appendChild(pageHeader);
        loadContact();
        loadTestPage();
        loadTabsTest();
        
    }


export default header;