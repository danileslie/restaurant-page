const loadTestPage = () => {
    const content = document.querySelector('#content');

    const test = document.createElement('div');
    test.setAttribute('id', 'home');
    test.setAttribute('data-content', '');
    test.classList.add('tabContents');
    test.innerHTML = 'Test Page';
    content.appendChild(test);
};

export default loadTestPage;