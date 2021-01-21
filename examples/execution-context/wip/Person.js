
class Person {
  // Create a getOlder() method.
  getOlder = (value)=> {
    this.age += value;
  }
  constructor() {
    // Initialize this.age to 0
    this.age = 0;
    // Call this.getOlder() every second to simulate aging
    setInterval( () => {
      this.getOlder(1);
    },2000);
  }
}

module.exports = Person;