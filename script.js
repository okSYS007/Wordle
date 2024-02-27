// Функция для выполнения асинхронного запроса к файлу data.txt
function fetchData() {
    fetch('data.txt')
    .then(response => response.text()) // Получаем текст ответа
    .then(data => {
        // Разбиваем текст на массив слов
        const wordsArray = data.split(',');
        // Получаем случайное слово из массива
        const randomIndex = Math.floor(Math.random() * wordsArray.length);
        const randomWord = wordsArray[randomIndex].trim(); // Удаляем лишние пробелы
        const word = randomWord;
        document.getElementById('word').textContent = randomWord;
        // Создаем указанное количество div, равное длине случайного слова
        for (let i = 0; i < randomWord.length; i++) {
            const div = document.createElement('div');
            // Устанавливаем текст div равным букве из случайного слова
            //div.textContent = randomWord[i];
            // Добавляем div в контейнер
            const container = document.getElementById('container');
            container.appendChild(div);
        }
    })
    .catch(error => console.error('Ошибка при получении данных из файла:', error));
}

// Вызываем функцию для получения данных
fetchData();
