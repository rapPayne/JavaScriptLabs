const output = document.querySelector('div');
const btn = document.querySelector('button');

function sayHi() {
  console.log(this);
  output.innerText = `Yo, ${this.getName()}`;
}
sayHi = sayHi.bind(p1);

class Person {
  constructor(first, last) {
    this.first = first; this.last = last;
  }
}
Person.prototype.getName = function() {
  return `${this.first} ${this.last}`;
}
var p1 = new Person("Rap","Payne");

// const p = new Person();
// p.first = "Joey";
// p.last = "Duggan";
