let boundFunc;
const output = document.querySelector('div');
const btn = document.querySelector('button');

/* Demonstrating context and 'this'
1. Write the addEventListener raw. Show how function() binds dynamically.
   Then change it to an arrow and show how it binds lexically.
2. Demonstrate call/apply, bind.
   - Write Person class with a getName() method or prototype
   - Write sayHi() pure function to call this.getName().
   - Running sayHi() won't work b/c 'this' (window) doesn't have a getName()
   - Challenge them ... how to get it to put person's name on the screen
   - Go through the four methods
   - call and then apply
   - bind
   - Add a method foo to the class to equal sayHi, thus 'this' is now the object.
*/

// 'this' points to the button - dynamic, bound at runtime
btn.addEventListener('click', function(e) {
  console.log(this);
});
// 'this' points to the window - Lexical, bound at definition
btn.addEventListener('click', (e) => {
  console.log(this);
  //sayHi();
  // call/apply form
  //sayHi.call(p1);
  //sayHi.apply(p1);
  // bind
  //boundFunc = sayHi.bind(p1);
  //boundFunc();
});

function sayHi() {
  console.log(this);
  output.innerText = `Hello, ${this.getName()}`;
}

class Person {
  constructor(first, last) {
    this.first = first; this.last = last;
  }
}
Person.prototype.getName = function() {
  return `${this.first} ${this.last}`;
}
var p1 = new Person("Rap","Payne");
