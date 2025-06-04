const plus = (a, b) => a + b
const mult = (a, b) => a * b
const minus = (a, b) => a - b
let mark = 2;
let count = 0;
function check(id, func) {
    count += 1;
    let result = document.getElementById('result' + id)
    result.disabled = true
    let a = document.getElementById('a' + id)
    let b = document.getElementById('b' + id)
    if (func(a.valueAsNumber, b.valueAsNumber) === result.valueAsNumber) {
        result.style.color='green'
        mark += 1;
    } else {
        result.style.color='red'
    }
    if (count > 2) {
        total.textContent = "Ваша оценка: " + mark
    }
}