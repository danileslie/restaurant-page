import  myImage from '../images/baby-behemoth-berri-blossom.png'
import header from './page-load.js';

const homePage = () => {  
    const home = document.createElement('div');
    const icon = document.createElement('img');
    icon.setAttribute('id', 'icon');
    icon.src = myImage;
    icon.alt = "ff14 baby behemoth";
    home.appendChild(icon);
    return home;
}

const loadHome = () => {
    header();
    const bHeader = document.getElementById('p-header');
    const content = document.getElementById('content');
    bHeader.appendChild(homePage());
}

export default loadHome;