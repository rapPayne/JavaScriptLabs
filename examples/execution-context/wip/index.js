//Require a person
const Person = require("./Person");

//Instantiate a person
const p = new Person();

//console.log their age every couple of seconds
setInterval(() => {
  console.log(p.age);
}, 3000);

