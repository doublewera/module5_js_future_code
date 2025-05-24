let vasyaid = Symbol();
let person1 = {name: "Вася", age: 25, male: true, wife: null, vid: vasyaid, height: 185n, education: undefined, hello: () => 1};
let person2 = {name: "Вася", age: 25, male: true, wife: null, vid: vasyaid, height: 185n, education: undefined, hello: () => 2};
console.log(person1 == person2);
const primes = ['string', 'number', 'boolean',  'symbol', 'bigint', 'undefined'];
function areObjectsEqual(o1, o2) {
    console.log(typeof o1);
    if (typeof o1 != typeof o2) return false;
    if (typeof o1 == 'function') return true;
    if (primes.includes(typeof o1)) return o1 == o2;
    if (o1 == null) {
        if (o2 == null) {
            return true;  // Оба нулл
        }
        return false; // первый нулл, второй не нулл
    } else if (o2 == null) {
        return false;  // Первый не нулл, второй нулл
    }
    console.log('o1', o1, typeof o1);
    console.log('o2', o2, typeof o2);
    let ks1 = Object.keys(o1);
    let ks2 = Object.keys(o2);
 
    if (ks1.length != ks2.length) {
        // Разное количество ключей? Точно не равны
        return false;
    }
 
    // Перебираем ключи первого объекта
    for (let k of ks1) {
        // Если во втором списке ключей нет очередного или не равны значения по ключу
        if (!ks2.includes(k) || !areObjectsEqual(o1[k], o2[k])) {
            return false;
        }
    }

    return true;
}
 
console.log(areObjectsEqual(person1, person2)); // true
