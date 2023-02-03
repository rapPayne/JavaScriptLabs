# JavaScript Labs
Supporting the JavaScript course, these files include starters, solutions, instructions, and even some example code.

1. [Flow of the course](flow_of_the_course)
2. [Instructor notes](instructor_notes)
3. [Chapter notes](chapter_notes)
2. [Troubleshooting Jest and modules](jest_and_modules)

## Flow of the course
The course introduces very basic syntax in the first chapter, things like looping (while, for), conditional testing (if, switch), variables with let, and comments. But it expands on those in later chapters. *Much* later.

- Big picture of JavaScript and very basic syntax
- Tooling (npm, webpack, eslint) and unit testing
- Deep dives into variables, operators, arrays, etc.
- Modules (import/export and require)
- Functional vs. OO JavaScript
- Event loop and asynchrononicity (promises, async/await)
- DOM manipulation
- Ajax and consuming REST 

## Instructor notes
- There are pop quizzes in some chapters. Make sure you read them before you teach so you know the answers.
- The labs require you to work harder than in some other JavaScript courses you may have taught, especially if it is a virtual class. 
- The labs simulate real-world work by posing problems and asking the students to solve them as a team.
- You'll want to create breakout rooms and bounce between the rooms helping and making sure *everyone* is participating. If a student is shy and declines to participate, they will often complain that they didn't enjoy the labs. Students who actively work in their pairs tend to *love* the labs.

- Students will be working in pairs or teams in the labs.
- The lab rooms should be noisy with lots of talking. If a student is so introverted that they don't like to work with others, the labs will make them uncomfortable.

## Chapter notes

### Tooling
This is to give them an appreciation for the families of tools in the JavaScript ecosystem. If they're going into React or Angular or Vue or whatever, they need to know what transpiler is, what a bundler, a minifier, and so forth.

### Variables
Stephen Colbert's picture is there because he actually coined the term "truthy".

### Arrays
If the students are in class to prepare themselves for React or React Native, the Array Functions section is very important.

### Modules
IIFEs are very skippable because we have no need to write them any more. However, some devs need to recognize them when they see legacy code.

### Understanding execution context
Very, very skippable chapter. There is no lab for it. This topic was once very important, but with the introduction of `let` and `const` and arrow functions, we almost never need to worry about it.

### Asynchronous JavaScript
This is about how the event loop works, how JavaScript is asynchronous, and mostly how promises and async/await works.
Philip Roberts does as good a job in explaining the Event Loop as anyone. If it isn't too awkward to do so and you have plenty of time, go ahead and play the YouTube video while pausing to make comments.

### Ajax
We cover XmlHttpRequest, but you can go through it quickly because fetch is the modern way to make Ajax calls.

## Jest and modules
We need students to understand modules but (ironically) Jest has been slow to adopt ES2015 Modules. To enable jest to work with them, edit package.json and ...

1. Add a type property at the top level:
```json
"type": "module",
```
2. Change your "test" script to explicitly call jest with the --experimental-vm-modules flag.
  - Windows:
```json
  "test": "node --experimental-vm-modules node_modules/jest/bin/jest",
```
  - Mac/Linux:
  ```json
  "test": "node --experimental-vm-modules node_modules/.bin/jest",
  ```
(References: https://jestjs.io/docs/ecmascript-modules and https://github.com/facebook/jest/issues/4751)

