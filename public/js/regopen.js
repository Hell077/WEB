let arrow = document.querySelector('.arrow');
var registerall = document.querySelector('.register_all');
let regbtn = document.querySelector('.registerbtn');
const cards = document.querySelectorAll('.maincontainer_content_middle_card_incard');

regbtn.addEventListener('click', function() {
    registerall.classList.add('register_all_vision');
    login.classList.remove('activelogin')
});

arrow.addEventListener('click', function() {
    registerall.classList.remove('register_all_vision');
    login.classList.add('activelogin')
});

cards.forEach(card => {
    card.addEventListener('click', function() {
       alert('Товар добавлен в корзину')
    });
});

