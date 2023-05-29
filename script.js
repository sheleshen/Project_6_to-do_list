let username = prompt("Введите своё имя:")
let a = 0 // переменная для количество дел

let title = document.getElementById("title")

// Ввод имени пользователя
if (username) {
    title.innerHTML = "Ваш список дел, " + username
} else {
    title.innerHTML = "Ваш список дел, анонимный пользователь" 
}

// Взаимодействие с кнопкой
function addCase() {
    a = a + 1

    if (a > 5) {
        document.getElementById("error").innerHTML = "Вы можете ввести до 5 дел"
        return
    }  

    let input = document.getElementById("input") // Находим элемент input
    let cases = input.value // Значение, что ввели в поле для дел

    let myCase = document.getElementById("caseList") // Задаем переменную списку дел 
    myCase.innerHTML += "<li>" + input.value + "</li>" // Выводим список дел через input
    input.value = "" // Очистить input
}