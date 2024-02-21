let login = document.querySelector('.login');
let activelogin = document.querySelector('.activelogin');

var profile = document.querySelector('.userbutton');
var xmark = document.querySelector('.xmark');

profile.addEventListener('click', function () {
    login.classList.add('activelogin');
});
xmark.addEventListener('click', function () {
    login.classList.remove('activelogin');
});


