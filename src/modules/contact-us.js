
const loadContact = () => {
    const content = document.querySelector('#content');

    const contact = document.createElement('div');
    contact.setAttribute('id', 'contact');
    contact.setAttribute('data-content', '');
    contact.classList.add('tabContents');
    contact.innerHTML = 'Contact Page';
    content.appendChild(contact);
};

export default loadContact;