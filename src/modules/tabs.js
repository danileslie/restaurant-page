const loadTabsTest = () => {

const tabs = document.querySelectorAll('[data-value]')
const tabInfos = document.querySelectorAll('[data-content]')


tabs.forEach(tab => {
   
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.value);
    tabInfos.forEach((info) => {     
        info.classList.remove('active');
tabs.forEach((tab) => {
    tab.classList.remove('active');
})
        });
        tab.classList.add('active');
        target.classList.add('active');
    })  
}
)};

export default loadTabsTest;