// Получаем все секции
let sections = document.querySelectorAll('#section2, #section3, #section4');

// Устанавливаем индекс текущей секции
let currentSectionIndex = 2;

// Получаем ссылки на наши кнопки
let prevButton = document.querySelector('.arrowleft');
let nextButton = document.querySelector('.arrowright');

// Добавляем обработчики событий для кнопок
prevButton.addEventListener('click', switchSectionBackward);
nextButton.addEventListener('click', switchSectionForward);

// Функция для переключения секции назад
function switchSectionBackward() {
    // Скрываем текущую секцию
    sections[currentSectionIndex].classList.add('hidden');
    
    // Переходим к предыдущей секции
    currentSectionIndex--;
    // Если мы достигли начала массива, переходим к концу
    if (currentSectionIndex < 0) {
        currentSectionIndex = sections.length - 1;
    }

    // Показываем предыдущую секцию
    sections[currentSectionIndex].classList.remove('hidden');
}

// Функция для переключения секции вперед
function switchSectionForward() {
    // Скрываем текущую секцию
    sections[currentSectionIndex].classList.add('hidden');
    
    // Переходим к следующей секции
    currentSectionIndex++;
    // Если мы достигли конца массива, возвращаемся к началу
    if (currentSectionIndex === sections.length) {
        currentSectionIndex = 0;
    }
    sections[currentSectionIndex].classList.remove('hidden');
}
