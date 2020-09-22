/*
 * Generators are used when we want to return values from a function on demand or one by one
 * instead of returning the response as a whole.
 *
 * Note: Since generators have a next() method so they can be used in a for..of loop to
 * iterate over the yielded values one by one. It also returns the same object as required by
 * the for..of loop i.e. {done: true/false, value: ...}
 */

// A generator is declared by adding a (*) after the function keyword. A generator returns an
// object which contains a next() method. When a generator object is creted the code is not
// executed unitl the next() method is called. When the next() method is called it executes
// the code until it finds a yield and returns that value.
function* generatorFunc() {
  yield 1;
  yield 2;
  yield 3;
}

// A generator function is not executed until the next() method is called. It returns a special
// generator object containing next() method.
const generator = generatorFunc();

// When the next() method is called an object of the form {done: true/false, value: ...} is
// returned. If done is false then the value can be fetched otherwise after the final yield
// done becomes true and value becomes undefined.
const one = generator.next().value;
const two = generator.next().value;
const three = generator.next().value;

console.log(one);
console.log(two);
console.log(three);
