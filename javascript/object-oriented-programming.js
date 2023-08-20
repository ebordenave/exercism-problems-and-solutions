class Human {
  couctor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  speak(message) {
    console.log(`${this.name} said ${message}`);
  }

  walk() {
    console.log(`${this.name} is walking`);
  }

  eat(food) {
    console.log(`${this.name} is eats ${food}`);
  }
}

/* Inheritance */
class SuperHuman extends Human {
  useSuperPower(power) {
    console.log(`${this.name} is using ${power}`);
  }
}

// Create instances of Human and SuperHuman
const person = new Human("Bruce Wayne", 40, "male");
const superHero = new SuperHuman("Superman", 30, "male");

// Polymorphism: Store both Human and SuperHuman instances in the same array
const people = [person, superHero];

// Iterate through the array and call the common method 'walk'
people.forEach((character) => {
  character.walk();
});
