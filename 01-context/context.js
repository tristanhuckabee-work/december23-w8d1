function eat() {
  console.log(`${this.name} eats fish food`);
}

class Fish {
  constructor(name) {
    this.name = name;
  }

  swim() {
    console.log(`${this.name} swimming in the water`);
  }
}

const nemo = new Fish('Nemo');

/********************************* Scenario 1 *********************************/
eat(); // undefined eats the fish food
/********************************* Scenario 2 *********************************/
nemo.eat = eat;
nemo.eat(); // Nemo eats the fish food
/********************************* Scenario 3 *********************************/
nemo.eat = eat;
eat(); // undefined eats the fish food
/********************************* Scenario 4 *********************************/
nemo.swim(); // Nemo swimming in the water
/********************************* Scenario 5 *********************************/
const swim = nemo.swim;
// undefined.swim()
swim(); // error