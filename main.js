// Создаем новый экземпляр объекта XMLHttpRequest
var xhr = new XMLHttpRequest();

// Настраиваем обработчик события, который будет вызываться при изменении состояния объекта XMLHttpRequest
xhr.onreadystatechange = function() {
    // Если состояние запроса DONE (4) и статус ответа HTTP 200 (OK)
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        // Получаем текст ответа и помещаем его внутрь элемента с id "dataContainer"
        document.getElementById("dataContainer").innerHTML = xhr.responseText;
    }
};

// Открываем соединение с файлом data.txt методом GET
xhr.open("GET", "data.txt", true);

// Отправляем запрос
xhr.send();
