const loadHome = () => {
    const content = document.querySelector('#content');
    const test = document.createElement('div');
    test.setAttribute('id', 'home');
    test.setAttribute('data-content', '');
    test.innerHTML = `
    <div class ='phrase'>
        <h1>Best Food In All Of Eorzea!</h1>
    </div>
    <img src="./images/Cafe-Eorzea-Decor.png" alt ="cafe with seating"/>
    <div class="blurb">
        <p>A traveling restaurant dedicated to bringing you the most delicious food in all of Eorzea, The Busy Behemoth is committed to making sure that no meal here will be your last!</p> 
        <p>The quality of our fresh foods and electrifying flavour will ensure that not even an ecliptic meteor will stop you from eating your fill.</p>
    </div>

    <div class="location-hours">
        <div class='location'>
            <p>Revenant's Toll, Mor Dhona</p> 
        </div>
        <div class='hours'>
            <p>10am-11pm</p>
        </div>
    `
    ;
    content.appendChild(test);
};

export default loadHome;