import '../styles.css';
import myImage from '../images/baby-behemoth-berri-blossom.png'
import loadContact from './contact-us.js';
import loadHome from './home';
import loadMenu from './menu';
import loadTabs from './tabs';
import loadFooter from './footer';

   const createContent = () => {
    const content = document.createElement('div');
    content.setAttribute('id', 'content');
    document.body.appendChild(content);
   }
   
   const header = () => {
    createContent();
        const pageHeader = document.createElement('header');
        const headerText = document.createElement('p');

        pageHeader.setAttribute('id', 'header');
        headerText.textContent = 'The Busy Behemoth';
        headerText.classList.add('title');

        pageHeader.innerHTML = `
        <nav>
            <ul class="tabs">
            <li data-value='#home'>Home</li>
            <li data-value='#menu'>Menu</li>
            <li data-value='#contact'>Contact Us</li>
            </ul>
            `

        pageHeader.appendChild(headerText);
        content.appendChild(pageHeader);   
        loadContact();
        loadMenu();
        loadHome();
        loadFooter();
        loadTabs();   
    }

    const loadBanner = () => {  
        const home = document.createElement('div');
        const icon = document.createElement('img');
        icon.setAttribute('id', 'icon');
        icon.src = myImage;
        icon.alt = "ff14 baby behemoth";
        home.appendChild(icon);
        return home;
    }
    
    const loadPage = () => {
        header();
        const bHeader = document.getElementById('header');
        bHeader.appendChild(loadBanner());
    }

export default loadPage;