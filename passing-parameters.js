/*
 * In pass by value a copy of that variable is passed to the function. Any changes made to the
 * copy of the variable will not affect the original variable. Primitives are always
 * passed by value.
 */
function test1(x) {
  x = 10;
  console.log('Inside function: ', x);
}

let x = 5;

console.log('\nBefore function: ', x);
test1(x);
console.log('After function: ', x);
// console.log('\n');

/*
 * In pass by reference the memory address of the variable is passed to the function. Any
 * changes made to the passed variable will be reflected in the original variable. Objects and
 * arrays are always passed by reference.
 */
function test2(obj) {
  obj.age = 30;
  console.log('Inside function: ' + obj.age);
}

let obj = { age: 22 };

console.log('\nBefore function: ' + obj.age);
test2(obj);
console.log('After function: ' + obj.age);
console.log('\n');
