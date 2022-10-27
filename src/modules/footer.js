const loadFooter = () => {
    const content = document.querySelector('#content');
const footer = document.createElement('footer');
footer.classList.add('footer');

footer.innerHTML = `
<p>Copyright © 2021 danileslie</p>
<a href='https://github.com/danileslie'>
<img class='footer-icon' src=./images/GitHub-Mark-32px.png></a> 
`;
content.appendChild(footer);
}

export default loadFooter;