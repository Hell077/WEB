const regclick = document.querySelector('.regclick');
const input1 = document.querySelector('.input1');


regclick.addEventListener('click', (e) => {
    if (input1.value === '') {
        e.preventDefault();
        alert('Введите данные для регистрации');
    } else {
        // Штатное выполнение функции
        console.log('Выполняется штатное действие');
    }
});
