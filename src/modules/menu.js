
const loadMenu = () => {
    const content = document.querySelector('#content');
    const menu = document.createElement('div');
    menu.setAttribute('id', 'menu');
    menu.setAttribute('data-content', '');
    menu.classList.add('tabContents');
    menu.innerHTML = 'Menu Page';
    content.appendChild(menu);
};

export default loadMenu;