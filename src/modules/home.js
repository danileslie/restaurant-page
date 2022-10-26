const loadHome = () => {
    const content = document.querySelector('#content');
    const homeTab = document.querySelector('li');
    const test = document.createElement('div');
    test.setAttribute('id', 'home');
    test.setAttribute('data-content', '');
    test.classList.add('tabContents');
    test.classList.add('active');
    homeTab.classList.add('active');
   
    test.innerHTML = `
    <div class='home-content'>
    <div class='left'>
    <img class='cafe-pic' src= './images/Cafe-Eorzea-Decor.png' alt='cafe with seating'/>
    </div>
    <div class='right'>
    <div class="blurb">
    <div class ='phrase'>
    <h1>Best Food In All Of Eorzea!</h1>
</div>
        <p>A traveling restaurant dedicated to bringing you the most delicious food in all of Eorzea, The Busy Behemoth is committed to making sure that no meal here will be your last!
        <br>
        The quality of our fresh foods and electrifying flavour will ensure that not even an ecliptic meteor will stop you from eating your fill.</p>
    </div>

    <div class="location-hours">
        <div class='location'>
        <img src='./images/flat_location_logo.svg' alt='location icon' class='location-icon'>
            <p>Revenant's Toll 
            <br>
            Mor Dhona, Eorzea</p> 
        </div>
        <div class='hours'>
        <img src='./images/time-outline.svg' alt='clock icon' class='hours-icon'>
            <p>10am-11pm</p>
        </div>
    </div>
    </div>
    `
    ;
    content.appendChild(test);
};

export default loadHome;