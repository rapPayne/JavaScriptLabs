Demonstrating how this works.

The solution is well commented. In Person.js, we define a Person class
that has an age property and a getOlder() method that increments age by 1.
In the constructor we then tell each Person object to call getOlder() 
every second, simulating that the person ages.

We then show several forms of the setTimeout callback:
1. When defined as a function(), it fails because function creates its own scope and its own 'this'.
2. When we define the callback and .bind() it to the outer explicitly, it works.
3. Or we could rewrite it as an arrow function. It succeeds because arrows bind lexically to their outer.
4. Or we could call .call()/.apply() to explicitly bind when we are calling.
