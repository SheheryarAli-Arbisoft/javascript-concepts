/*
 * An array can declared by either of the following notations:
 *
 * 1. Object notation i.e. new Array()
 * 2. Literal notation i.e. []
 *
 * Note: The literal notation is most commonly used
 */

const arr = [1, 2, 3, 4, 5];

// To get the length of the array we can use the length property
console.log(arr.length);

// To get a value from an array we can use the index of that value
console.log(arr[3]);

// To change the value at a certain index the following procedure is used
arr[0] = 2; // Here [0] is the index position which can be between 0 and lenght - 1
console.log(arr);

// To add values to the end of the array the push() method is used
arr.push(3, 3);
console.log(arr);

// To remove one value from the end of the array the pop() method is used
arr.pop();
console.log(arr);

// To add values to the start of the array the unshift() method is used
arr.unshift(10, 20);
console.log(arr);

// To remove one value from the start of the array the shift() method is used
arr.shift();
console.log(arr);
