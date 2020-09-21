/*
 * Function declaration are hoisted to the top of the document at compile time. Because of
 * it is possible to call a function before it has been declared.
 */

sayHi();

function sayHi() {
  console.log('Hello World');
}

// sayHi()

/*
 * Variable declarations with 'var' are hoisted to the top of the document. The initialization
 * is kept at its position.
 *
 * Note: Variable declarations with 'let' and 'const' are not hoisted.
 */

// This example will throw an error becaused only the declation is hoisted i.e. var num1; and
// the initialization is kept on the same line after conosle.log() i.e. num1 = 6;
console.log(num1);
var num1 = 6;

// This example will print 6 because the declaration is hoisted and initialization is taking
// place before conosle.log()
num2 = 6;
console.log(num2);
var num2;

// This example will throw an error because only 'var' variables are hoisted and 'let' and
// 'const' are kept on the same line.
num3 = 6;
console.log(num3);
let num3;
