class Car {
  wheels = 4;
}
class Truck {
  wheels = 8;
}
class Robofix {
  change_wheels(transport) {
    for (let i = 0; i < transport.wheels; i ++) {
      console.log('Я поменял колесо номер ', i);
    }
  }
}
let robofix = new Robofix() 
let visitors = [new Car(), new Truck()]
for (let transport of visitors) {
  console.log('Механик свободен!')
  robofix.change_wheels(transport)  
}
console.log('Я обслужил всех посетителей')

