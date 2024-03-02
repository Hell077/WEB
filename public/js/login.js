let login = document.querySelector('.login');
let activelogin = document.querySelector('.activelogin');
let profile = document.querySelector('.userbutton');
let xmark = document.querySelector('.xmark');
let bugs = document.querySelector('.bugbtn')

profile.addEventListener('click', function () {
    login.classList.add('activelogin');
});
xmark.addEventListener('click', function () {
    login.classList.remove('activelogin');
});
bugs.addEventListener('click', function(){
    alert('Пишите на почту help@gmail.com')
})


