class Kettle {
    pour_on_water(flower) {
        flower.bloom()
    }
}
class Flower {
    bloom () {
        console.log('🌼')
    }
}

let kettle = new Kettle() 
let flowers = []
for (let i = 0; i < 5; i++) {
  flowers.push(new Flower())  // Сажаем новые цветочки
}

for (let f of flowers) {
  console.log('Ещё цветочек')
  kettle.pour_on_water(f)  // Поливаем цветочки и они цветут
}