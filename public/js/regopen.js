let arrow = document.querySelector('.arrow');
var registerall = document.querySelector('.register_all');
let regbtn = document.querySelector('.registerbtn');

regbtn.addEventListener('click', function() {
    registerall.classList.add('register_all_vision');
    login.classList.remove('activelogin')
});

arrow.addEventListener('click', function() {
    registerall.classList.remove('register_all_vision');
    login.classList.add('activelogin')
});
