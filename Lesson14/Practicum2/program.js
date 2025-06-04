let people = {
    'Сидоров': {
        username: 'Петр Сергеевич',
        year: 1978,
        keyfeatures: ['Директор']
    },
    'Сидорова': {
        username: 'Анна Петровна',
        year: 1998,
        keyfeatures: ['Отдел кадров']
    }
}

function find_and_show(userid) {
    if (userid in people) {
        photo.src = userid + '.png'
        username.textContent = userid + ' ' + people[userid].username
        year.textContent = 'Год поступления: ' + people[userid].year
        keyfeatures.innerHTML = '' 
        // предпочтительнее обойти список циклом и удалить элементы с помощью removeChild 
        // добавляем элементы в список
        let li;
        for (let todo of people[userid].keyfeatures) {
            li = document.createElement('li')
            li.textContent = todo
            keyfeatures.appendChild(li)
        }
    } else {
        console.error('Сотрудник ' + userid + ' не работает в организации.')
    }
}