let FAQ_btn = document.querySelectorAll('.FAQ_btn');

FAQ_btn.forEach(button => {
    button.addEventListener('click', function() {
        this.classList.toggle('open');
    });
});


