//Require a person
const Person = require("./Person");

//Instantiate a person. A person should age automatically. We've written
// the Person class to age one "year" every second using setTimeout().
const p = new Person();

//console.log their age every couple of seconds
setInterval(() => console.log(p.age), 2000)
