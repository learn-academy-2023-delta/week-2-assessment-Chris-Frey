# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

Your answer: A parameter is a placeholder in a function or method that allows us to reference a variable inside of the function/method. An argument is the data that is passed to the function when the function is invoked on an object.
```js
const myExample = (input) => { //here, `input` is a parameter. It tells us how man inputs the function will take.
  return input                  // here `input` is technically a local variable, but is referred to as the argument. We use this to refer to the argument inside the function
}
myExample("argument")           //"argument" is the argument passed to the function during invocation.
```
Researched answer: My answer pretty much matches what I found on the internet. I don't think this topic is terribly deep.

2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

Your answer: `map()` takes 3 parameters: `(value, array, index)`.  `value` is the required parameter, which represents the object in the current iteration.  `array` is optional. It refers to the array that we are iterating through. `index` is also optional, and refers to the index number of the element being used in the current iteration.

Researched answer:

3. What is the difference between map and filter?

Your answer: `map()` iterates through an array and returns a new array of equal size containing the transformed elements.  `filter()` iterates through the array and checks for the 'truthiness' of each element when passed to the block. `filter()` then puts all elements that evaluated to `true` into a new array and returns the filtered array.  This can be smaller than the original array. 

Researched answer: Even if `map()` cannot properly evaluate an element, it will return `undefined` in its place. the array creaetd by `filter()` points to the same locations in memory as the original values. Altering this array could mutate the original.

4. What is iteration?

Your answer: Iteration is performing an action repeatedly until a certain condition is met.  Examples are loops, `map()`, and `filter()`.  The conditions can be automatic (iterating until each element in the array has been run like `map()`), or manual (inserting a `break` command)

Researched answer: Iteration according to the MDN docs is looping an action over an object until completion or a condition is met.

Your answer: A function is a reusable piece of self-contained, static code that can take in arguments (if needed) and provide a return.  A method is a type of function that runs inside an object.

Researched answer: Methods are considered properties of objects that contain a function definition.  Basically methods are functions that are stored as properties.

5. STRETCH: What is hoisting in JavaScript?

Your answer:I *believe* hoisting is the ability to call a function before it has been defined in the code.  e.g. invoking a function on line 5 of your code, but having written the function on line 30.  JavaScript conceptually 'hoists' it up to the top to run the code.

Researched answer: Hoisting is JavaScript moving all declarations to the top of the current scope.  This makes it a good rule to declare all variables at the top of their respective scopes.  Hoisting with `var` initializes the value to `undefined`. Hoisting `let` and `const` are not initialized and will result in an error.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Component: Reusable pieces of code that can be plugged in to larger code bases.

2. Spread operator: shorthand for gathering all of something: `[...arr1]` tells JavaScript that we're talking about getting the contents of the array from a certain point, until the end.
3. React state: An object where property values are stored for a React component.

4. React props: Objects used to pass data from one component to another

5. DOM events: An element that executes a particular piece of javascript code (like when a user clicks a button)
