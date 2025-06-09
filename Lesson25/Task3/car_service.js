class Winter_wheel {
  season = 'зимнее';
}
class Summer_wheel {
  season = 'летнее';
}

class Car {
  wheels = [...Array(4)].map((_, i) => new Winter_wheel())
}
class Truck {
  wheels = [...Array(8)].map((_, i) => new Winter_wheel())
}
class Robofix {
  change_wheels(transport) {
    for (let i = 0; i < transport.wheels.length; i ++) {
      console.log('Колесо было ', transport.wheels[i].season);
      if (transport.wheels[i].season === 'зимнее') {
        delete transport.wheels[i]
        transport.wheels[i] = new Summer_wheel()
        console.log('Заменил?', transport.wheels[i])
      } else {
        transport.wheels[i] = new Winter_wheel()
      }
    }
    console.log(transport.wheels);
  }
}
let robofix = new Robofix() 
let visitors = [new Car(), new Truck()]
for (let transport of visitors) {
  console.log('Механик свободен!')
  robofix.change_wheels(transport)
  for (let w of transport.wheels) {
    console.log(w.season)
  }
  console.log('Лето же!')
}
console.log('Я обслужил всех посетителей')
console.log('Наступила зима.')
for (let transport of visitors) {
  console.log('Механик свободен!')
  robofix.change_wheels(transport)
  console.log(transport.wheels)
}
console.log('Я обслужил всех посетителей')