// Функция для выполнения асинхронного запроса к файлу data.txt
function fetchData() {
    fetch('data.txt')
    .then(response => response.text()) // Получаем текст ответа
    .then(data => {
        // Разбиваем текст на массив слов
        const wordsArray = data.split(',');
        // Выбираем случайное слово из массива
        const randomIndex = Math.floor(Math.random() * wordsArray.length);
        const randomWord = wordsArray[randomIndex].trim(); // Удаляем лишние пробелы
        // Выводим случайное слово в HTML
        const dataElement = document.getElementById('dataElement');
        dataElement.textContent = randomWord;
    })
    .catch(error => console.error('Ошибка при получении данных из файла:', error));
}

// Вызываем функцию для получения данных
fetchData();
