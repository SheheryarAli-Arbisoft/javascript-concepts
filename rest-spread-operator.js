// /*
//  * When the number of arguments being passed to a function can vary in length then the rest
//  * parameter operator (...rest) can be used. The rest operator converts all of the arguments
//  * into an iterable list that is array like. We can then traverse the list using a for loop
//  * or for..of loop.
//  *
//  * Note: The following things are to be kept in mind:
//  *
//  * 1. We can fetch any number of arguments before the ...rest parameters i.e.
//  * (arg1, arg2, ...rest) will fetch the first 2 arguments and the rest will be stores in ...rest.
//  *
//  * 2. Any arguments after the ...rest parameters will not be fetched because ..rest stores
//  * all of the remaining arguments i.e. (arg1, ...rest, arg2) will fetch only the first argument
//  * and the remaining arguments will be stored in ...rest.
//  */

// function sum(...numbers) {
//   let sum = 0;

//   for (let num of numbers) {
//     sum += num;
//   }

//   console.log(sum);
// }

// sum(1, 2, 3, 4);

// /*
//  * When we want to fetch all the values stored in an array or all the properties of an object
//  * then the spread operator (...var) can be used. It's syntax is the same as rest but the
//  * type of operation to perform depends on the context where the spread operator is used.
//  *
//  * This operator is generally used to fetch all the contents of arrays and object which can be
//  * useful in copying of objects and arrays.
//  *
//  * Note: The spread operator works in the same way as a for..of loop i.e. in the case of
//  * iterables it calls the next() method and converts the iterable to a flat list. In the case
//  * of objects it copies all of the properties of the object.
//  *
//  * The same principles apply for spread operator for objects. Below is a demonstration of
//  * arrays but the same can be done for objects.
//  */

// let arr1 = [1, 2, 3];

// // This will convert arr1 to a flat list and then pass that list to arr2.
// let arr2 = [...arr];

// // If we were to used arr1 in this case this would not work because Math.max() expects a list
// // of numbers and does not work if an array is passed
// console.log(Math.max(...arr1));

// // As we know that arrays are passed by reference. The below statement will return false because
// // when we use the spread operator the JS engine instead of referencing the actual object copies
// // the contents and creates a new object and assign a reference of the new object to arr2
// console.log(arr1 === arr2);

const a = { name: 'Sheheryar', age: 22, education: 'ABC' };
const b = { name: 'Ali', age: undefined };

const c = { ...a, ...b };

console.log(c);
