
const loadContact = () => {
    const content = document.querySelector('#content');

    const contact = document.createElement('div');
    contact.setAttribute('id', 'contact');
    contact.setAttribute('data-content', '');
    contact.classList.add('tabContents');
    contact.innerHTML = `
    <div class='contact-here'>
    <img src='./images/eategg.webp' class='egg'>
    <p class='dont'>Don't.</p>
    </div>
    `;
    content.appendChild(contact);
};

export default loadContact;