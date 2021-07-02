# JavaScript Labs
Supporting the JavaScript course, these files include starters, solutions, instructions, and even some example code.

1. [Flow of the course](flow_of_the_course)
2. [Instructor notes](instructor_notes)
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
- The labs require you to work harder than in some other JavaScript courses you may have taught, especially if it is a virtual class. 
- The labs simulate real-world work by posing problems and asking the students to solve them as a team.
- You'll want to create breakout rooms and bounce between the rooms helping and making sure *everyone* is participating. If a student is shy and declines to participate, they will often complain that they didn't enjoy the labs. Students who actively work in their pairs tend to *love* the labs.

- Students will be working in pairs or teams in the labs.
- The lab rooms should be noisy with lots of talking. If a student is so introverted that they don't like to work with others, the labs will make them uncomfortable.

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

