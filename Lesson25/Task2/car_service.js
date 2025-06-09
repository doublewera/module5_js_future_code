class Car {
  wheels = ['зимнее', 'зимнее', 'зимнее', 'зимнее'];
}
class Truck {
  wheels = ['зимнее', 'зимнее', 'зимнее', 'зимнее', 'зимнее', 'зимнее', 'зимнее', 'зимнее'];
}
class Robofix {
  change_wheels(transport) {
    for (let i = 0; i < transport.wheels.length; i ++) {
      console.log('Колесо было ', transport.wheels[i]);
      if (transport.wheels[i] === 'зимнее') {
        transport.wheels[i] = 'летнее'
      } else {
        transport.wheels[i] = 'зимнее'
      }
    }
  }
}
let robofix = new Robofix() 
let visitors = [new Car(), new Truck()]
for (let transport of visitors) {
  console.log('Механик свободен!')
  robofix.change_wheels(transport)
  console.log(transport.wheels)
}
console.log('Я обслужил всех посетителей')
console.log('Наступила зима.')
for (let transport of visitors) {
  console.log('Механик свободен!')
  robofix.change_wheels(transport)
  console.log(transport.wheels)
}
console.log('Я обслужил всех посетителей')