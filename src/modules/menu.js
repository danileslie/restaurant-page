
const loadMenu = () => {
    const content = document.querySelector('#content');
    const menu = document.createElement('div');
    menu.setAttribute('id', 'menu');
    menu.setAttribute('data-content', '');
    menu.classList.add('tabContents');
    menu.innerHTML = `
        <div class='menu'>
            <div class='food-item'>
            <div class='food-blurb'>Festive treats for those who prefer to express their Starlight spirit through eating until they lose consciousness.</div>
                <div class='food-title'>
                    Starlight Donuts
                </div>
                <img class='food-pic' src='./images/starlight-donuts.jpg' alt='a basket full of multi-coloured doughnuts'/>
                <div class='price'>100 gil</div>
            </div>

            <div class='food-item'>
            <div class='food-blurb'>A small piece of bitter dark chocolate molded into the shape of a spriggan.</div>
                <div class='food-title'>
                    Spriggan Cookies
                </div>
                <img class='food-pic' src='./images/spriggan-cookies.jpg' alt='a plate with a cookie in the shape of a spriggan, a monster enemy from final fantasy 14'/>
                <div class='price'>100 gil</div>
            </div>

                <div class='food-item'>
                <div class='food-blurb'>An indulgent meal of tender ovim meat wrapped around gooey cheese, battered and pan-fried in oil to give it its crispy, golden-brown shell.</div>
                <div class='food-title'>
                    Ovim Cordon Bleu
                </div>
                <img class='food-pic' src='./images/ovim-cordon-bleu.jpg' alt='a basket full of multi-coloured doughnuts'/>
                <div class='price'>100 gil</div>
            </div>
            
            <div class='food-item'>
            <div class='food-blurb'>If you love yourself you won't order this. We legally cannot remove this from the menu.</div>
                <div class='food-title'>
                    Meol
                </div>
                <img class='food-pic' src='./images/meol.jpg' alt='a basket full of multi-coloured doughnuts'/>
                <div class='price'>100 gil</div>
            </div>

            <div class='food-item'>
            <div class='food-blurb'>A delicious pick-me up that unfortunately does nothing when attempting to revive the dead.</div>
                <div class='food-title'>
                    Alchemist's Potion
                </div>
                <img class='food-pic' src='./images/alchemists-potion.jpg' alt='a basket full of multi-coloured doughnuts'/>
                <div class='price'>100 gil</div>
            </div>

            <div class='food-item'>
            <div class='food-blurb'>A sweet tea that is guaranteed not to burn you from the inside out.</div>
                <div class='food-title'>
                    Black Mage's Black Magic Cassis Tea
                </div>
                <img class='food-pic' src='./images/black-mages-black-magic-cassis-tea-.jpg' alt='a basket full of multi-coloured doughnuts'/>
                <div class='price'>100 gil</div>
            </div>

            <div class='food-item'>
            <div class='food-blurb'>A sweet drink to remind you that a smile better suits a hero.</div>
                <div class='food-title'>
                    Knight's Cafe-Au-Lait
                </div>
                <img class='food-pic' src='./images/kinghts-caramel-cafe-au-lait.jpg' alt='a basket full of multi-coloured doughnuts'/>
                <div class='price'>100 gil</div>
            </div>
            <div class='food-item'>
            <div class='food-blurb'>A cool and refreshing drink for those who enjoy keeping their energy up at all times :)</div>
                <div class='food-title'>
                    Scholar's Fairy Soda
                </div>
                <img class='food-pic' src='./images/scholars-fairy-soda.jpg' alt='a basket full of multi-coloured doughnuts'/>
                <div class='price'>100 gil</div>
            </div>
        </div>
    `;
    content.appendChild(menu);
};

export default loadMenu;