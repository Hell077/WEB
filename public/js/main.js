// login 
let login = document.querySelector('.login');
let profile = document.querySelector('.userbutton');
let activelogin = document.querySelector('.activelogin');
let xmark = document.querySelector(`.xmark`)
let about = document.querySelector(`.aboutusbtn`)
profile.addEventListener('click', function () {
    
    login.classList.add('activelogin');
});
xmark.addEventListener('click', function () {
    login.classList.remove('activelogin');
})

about.addEventListener('click', function () {
    window.location.href = 'about.html';
})

