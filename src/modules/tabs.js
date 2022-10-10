const loadTabs = () => {

const tabs = document.querySelectorAll('[data-value]')
const tabContent = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.value);
            tabContent.forEach((content) => {     
                content.classList.remove('active');
                tabs.forEach((tab) => {
                tab.classList.remove('active');
                })
            });
        tab.classList.add('active');
        target.classList.add('active');
    })  
}
)};

export default loadTabs;