const loadTabs = () => {

    let tabs = document.querySelectorAll('.navs > li');
    let tabContents = document.querySelectorAll('.tabContents');

    for (let tab of tabContents) {
        tab.style.display = 'none';
    }

    for (let li of tabs) {
        li.addEventListener("click", () => {
            for (let li of tabs) {
                if (!li.classList.contains('active')){  
                    console.log(`Inactive is ${li.textContent}`);
                }
                else {
                    console.log(`Active tab is ${li.textContent}`);
                }  
            }  
            return;
    });
};
};

const loadTabsTest = (bbb, tabExample) => {
    let tabs = document.querySelectorAll('.navs > li');
    let tabContents = document.querySelectorAll('.tabContents');
    tabExample = tabContents[0].id;
    document.getElementById(tabExample).style.display = "none";
    
    // for (let tab of tabContents) {
    //     tab.style.display = 'none';
    // }

    for (let li of tabs) {
        li.addEventListener("click", () => {
            for (let li of tabs) {
                if (!li.classList.contains('active')){  
                    console.log(`Inactive is ${li.textContent}`);
                    document.getElementById(tabExample).style.display = "none";  
                }
                else {
                    console.log(`Active tab is ${li.textContent}`);
                    document.getElementById(tabExample).style.display = "block";
                }  
            }  
        });
    };
}

export default loadTabsTest;