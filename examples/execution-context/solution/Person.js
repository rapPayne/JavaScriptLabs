// This does not work. "this.getOlder is not a function"
// Why? b/c "this" refers to the inner, anonymous function since it was bound
// NOT lexically.
// class Person {
//   getOlder() { this.age++ };
//   constructor() {
//     this.age = 0;
//     setInterval(
//       function () {
//         this.getOlder();
//       },
//       1000);
//   }
// }

// Bind works. You're registering a function with the context bound *lexically* 
// at define time.
// class Person {
//   getOlder() { this.age++ };
//   constructor() {
//     this.age = 0;
//     setInterval(
//       (function () {
//         this.getOlder();
//       }).bind(this),
//       1000);
//   }
// }

// Arrow functions work b/c they naturally bind lexically
// class Person {
//   getOlder() { this.age++ };
//   constructor() {
//     this.age = 0;
//     setInterval(
//       () => {
//         this.getOlder();
//       },
//       1000);
//   }
// }
// Which do you like better? .bind() or arrow?

// Call/Apply can work, but they're not the right answers
// for this situation. A better situation for them would
// be if we wanted to call an external function and bind
// an object to that function that misuses "this".
// class Person {
//   getOlder() { this.age++ };
//   constructor() {
//     this.age = 0;
//     setInterval(
//       () => {
//         (function () {
//           this.getOlder();
//         }).call(this);   // or .apply(this)
//       }
//       ,
//       1000);
//   }
// }

module.exports = Person;