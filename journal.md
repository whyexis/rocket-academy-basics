# Learnings Journal

## Table of Contents

- [Git Cheat Sheet](#git-cheat-sheet)
- [Commenting Code](#commenting-code)
  - [Multi Line Comments and JavaScript DocStrings](#multi-line-comments-and-javascript-docstrings)
- [JavaScript](#javascript)
  - [Objects Notation - Dot VS Bracket](#objects-notation---dot-vs-bracket)
  - [Arrays](#arrays)
  - [Swap Elements in an Array](#swap-elements-in-an-array)
- [Web Dev](#web-dev)
  - [BootStrap](#bootstrap)
  - [Script](#script)
  - [Dark Mode Favicon](#dark-mode-favicon)
  - [JavaScript Console](#javascript-console)
- [Project - Scissors Paper Stone](#project---scissors-paper-stone)
  - [String Constants and Variables](#string-constants-and-variables)
  - [Logic for Scissors Paper Stone](#logic-for-scissors-paper-stone)
  - [JavaScript Modulo Operator](#javascript-modulo-operator)
  - [Radio Buttons, Form and Form Data for User Input](#radio-buttons--form-and-form-data-for-user-input)
- [Project - Beat That](#project---beat-that)
  - [Global Variables](#global-variables)
  - [Array Max Min](#array-max-min)
  - [Array Numeric Sort](#array-numeric-sort)
  - [Array Find Object in Array using Properties](#array-find-object-in-array-using-properties)
  - [Find Duplicate Values in an Array](#find-duplicate-values-in-an-array)
  - [Objects](#objects)
  - [For Loops](#for-loops)
  - [Nested For Loops](#nested-for-loops)
- [Project - Blackjack](#project---blackjack)

## Git Cheat Sheet

## Commenting Code

[Stack Abuse article](https://stackabuse.com/commenting-code-in-javascript-types-and-best-practices)

> Use comments to explain **why** you did something, not **how** you did it. If you find yourself explaining how you did something, then it's time to take a step back and refactor your code into something self-explanatory.

### Multi Line Comments and JavaScript DocStrings

```javascript
/**
 * Function that greets a user
 * @author   John
 * @param    {String} name    Name of the user
 * @return   {String}         Greeting message
 */
function greetUser(name) {
  return `Greetings, ${name}!`;
}
```

## JavaScript

### Objects Notation - Dot VS Bracket

[codeburst.io](https://codeburst.io/javascript-quickie-dot-notation-vs-bracket-notation-333641c0f781)

Dot notation is used most frequently. But there are some limitations.

- Property identifies can only be alphanumeric (and \_ and $)
- Property identifiers cannot start with a number.
- Property identifiers cannot contain variables.

Brackets

- Property identifiers have to be a String or a variable that references a string
- Okay to use variables, spaces, and Strings that start with numbers

### Arrays

Assigning a variable to an array creates a pointer to that array. If you need another array to modify separately, use `.slice(0)` method instead.

### Swap Elements in an Array

[Stack Overflow](https://stackoverflow.com/questions/872310/javascript-swap-array-elements)

> This is a clean approach to avoid memory leaks and Don't Repeat Yourself (DRY).

```js
Array.prototype.swap = function (x,y) {
  var b = this[x];
  this[x] = this[y];
  this[y] = b;
  return this;
}
```

## Web Dev

### BootStrap

Learnt from [The Net Ninja's YouTube crash course](https://youtube.com/playlist?list=PL4cUxeGkcC9joIM91nLzd_qaH_AimmdAR)

### Script

TODO: Find out why in HTML \<script\> that imports a JavaScript file cannot run code inside it.

### Dark Mode Favicon

[Flavio Copes](https://flaviocopes.com/dark-mode-favicon/)

For SVG icons, add the following HTML into it.

```html
<style>
  path {
    fill: #ccc;
  }
  @media (prefers-color-scheme: dark) {
    path {
      fill: #fff;
    }
  }
</style>
```

### JavaScript Console

[LogRocket Blog](https://blog.logrocket.com/keeping-it-simple-with-the-javascript-console/)

- Display objects with `console.log` and `console.dir`
- Formatted strings. Strings with `%s`, integers with `%d` or `%i`, objects with `%o` and `%O`, styled text with CSS `%c`.
- Display object tables. `console.table` for a lot of data like a map or array of objects
- Trace function calls. `console.trace` dumps the stack trace, i.e. the path the runtime took to call that function
- Count function calls. `console.count` tracks the number of times a block of code is called.
- Group information. `console.group` groups information together in a collapsible list. The list can be nested.
- Inspect state. Functions and variables available in the browser's dev console, but varies from browser to browser.

## Project - Scissors Paper Stone

### String Constants and Variables

Note: From reading the [reference solution](https://github.com/rocketacademy/basics-scissors-paper-stone/blob/part1-inclMoreComfortable/script.js).
In production code, it is good practice to assign string constants to variables. By convention, string constant variables are written entirely in upper case.

- Minimises chances of making spelling mistakes because the code editor can catch these mistakes before the program is run.
- Makes it easy to replace all the string constants by simply changing the value in the assignment if needed.

### Logic for Scissors Paper Stone

In the [Rock Paper Scissors](https://en.wikipedia.org/wiki/Rock_paper_scissors#Game-theoretic_variations) page on Wikipedia, one section described the logic of the game as isomorphic to modular arithmetic. This helped to simplify the writing of the game logic.

> The majority of such proposed generalizations are isomorphic to a simple game of modular arithmetic, where half the differences are wins for player one. For instance, Rock-Paper-Scissors-Spock-Lizard may be modeled as a game in which each player picks a number from one to five. Subtract the number chosen by player two from the number chosen by player one, and then take the remainder modulo 5 of the result. Player one is the victor if the difference is one or three, and player two is the victor if the difference is two or four. If the difference is zero, the game is a tie.

### JavaScript Modulo Operator

[[Original Forum Thread]](https://stackoverflow.com/questions/4467539/javascript-modulo-gives-a-negative-result-for-negative-numbers)
In JavaScript, the `%` operator is not the modulo operator but the remainder operator. Resolved it by using one of the functions listed.

```javascript
function mod(n, m) {
  var remainder = n % m;
  return Math.floor(remainder >= 0 ? remainder : remainder + m);
}
```

### Radio Buttons, Form and Form Data for User Input

Implemented [radio buttons](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio) for user input which removes the need for input validation and a user can select the game modes and shape to play instead of typing in text inputs. Worked with forms and [accessing form values](https://stackoverflow.com/questions/18606305/accessing-formdata-values).

```javascript
var formElements = document.forms["myform"].elements["inputTypeName"].value;
```

## Project - Beat That

### Global Variables

Do not use global variables as parameters for functions. Call the global variable within the function because when you want to update the global variable and it is used as a parameter in a function, the update only happens within the function.

### Array Max Min

[w3schools](https://www.w3schools.com/js/js_array_sort.asp)

JavaScript does not have built in functions for finding the max or min value in an array, but `Math.max()` can return the max value of an array through the following function.

```javascript
function myArrayMax(array) {
  return Math.max.apply(null, array);
}
```

### Array Numeric Sort

[MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

For numeric sort, create a compare function within the sort method.

```javascript
let numbers = [4, 2, 5, 1, 3];
numbers.sort((a, b) => a - b);
```

If an array contains objects, the objects can be sorted based on the objects' properties. Sort stability: if there is a match, the order will remain in the same order before calling the sort.

```javascript
const students = [
  { name: "Alex", grade: 15 },
  { name: "Devlin", grade: 15 },
  { name: "Eagle", grade: 13 },
  { name: "Sam", grade: 14 },
];

// Sort students by grade in ascending order
students.sort((firstItem, secondItem) => firstItem.grade - secondItem.grade);

[
  { name: "Eagle", grade: 13 },
  { name: "Sam", grade: 14 },
  { name: "Alex", grade: 15 }, // original maintained for similar grade (stable sorting)
  { name: "Devlin", grade: 15 }, // original maintained for similar grade (stable sorting)
];
```

### Array Find Object in Array using Properties

[MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find#find_an_object_in_an_array_by_one_of_its_properties)

Find an object in an array through one of its properties.

```javascript
const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

const result = inventory.find(({ name }) => name === "cherries");

console.log(result); // { name: 'cherries', quantity: 5 }
```

### Find Duplicate Values in an Array

[Dev.to - Huy Do](https://dev.to/huyddo/find-duplicate-or-repeat-elements-in-js-array-3cl3)

```js
const a = [4, 3, 6, 3, 4, 3];

function count_duplicate(array) {
  let counts = {};

  for (let counter = 0; counter < array.length; counter += 1) {
    if (counts[array[counter]]) {
      counts[array[counter]] += 1;
    } else {
      counts[array[counter]] = 1;
    }
  }

  return counts;
}
```

### Objects

Used objects to represent players in an array to retain their identities to allow players to be displayed in a leaderboard in descending or ascending order.

### For Loops

[MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for...in_statement)

Although JavaScript allows `for...in` statement, it is not recommended to use this to iterate over an array because it will also return user-defined properties or methods of the array. Use [`for...of`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) instead.

### Nested For Loops

Ensure that the counter variables have different names.

## Project - Blackjack
