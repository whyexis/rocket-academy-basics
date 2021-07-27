# Learnings Journal

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

## Web Dev

### BootStrap

Learnt from [The Net Ninja's YouTube crash course](https://youtube.com/playlist?list=PL4cUxeGkcC9joIM91nLzd_qaH_AimmdAR)

### Script

TODO: Find out why in HTML \<script\> that imports a JavaScript file cannot run code inside it.

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

## Logic for Scissors Paper Stone

In the [Rock Paper Scissors](https://en.wikipedia.org/wiki/Rock_paper_scissors#Game-theoretic_variations) page on Wikipedia, one section described the logic of the game as isomorphic to modular arithmetic. This helped to simplify the writing of the game logic.

> The majority of such proposed generalizations are isomorphic to a simple game of modular arithmetic, where half the differences are wins for player one. For instance, Rock-Paper-Scissors-Spock-Lizard may be modeled as a game in which each player picks a number from one to five. Subtract the number chosen by player two from the number chosen by player one, and then take the remainder modulo 5 of the result. Player one is the victor if the difference is one or three, and player two is the victor if the difference is two or four. If the difference is zero, the game is a tie.

## JavaScript Modulo Operator

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

## Project - Blackjack
