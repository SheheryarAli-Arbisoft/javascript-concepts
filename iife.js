/* Immediately Invoked Function Expresseion (IIFE) is a function that provides the following
 * benifits over an ordinary function:
 *
 * 1. This function has its own scope and does not conflict with function or variables in the
 * same scope or outer scope.
 *
 * 2. If two function have the same name but one is normal function and the other is IIFE then
 * this will not cause an error.
 *
 * Note: IIFE are invoked at lexical time i.e. a normal function once declared can be called
 * anywhere in the program but an IIFE is called when it is ecountered by the compiler. It
 * cannot be called like a normal function.
 */

// To decalre an IIFE we use (function comes here)(). The first bracket it used for function
// declaration and second is used to invoke that function. The function declaration must be
// of the same format as function expression except for the assignment part.
(function () {
  console.log('This is an Immediately Invoked Function Expresseion (IIFE)');
})();
