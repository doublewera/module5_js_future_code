// Ищем строку таблицы
let item = document.querySelector('tr')
// Cоздаем ячейку
let td = document.createElement('td')
// прикрепляем к строке
item.appendChild(td)
// Создаем кнопку
let my_button = document.createElement('button')
// Добавляем на кнопку надпись "удалить"
my_button.textContent = 'Удалить'
// Прикрепляем кнопку к ячейке
td.appendChild(my_button)
// Привязываем к кнопке функцию самоудаления этой строки таблицы
my_button.onclick = () => item.remove()