/*
 * The for..of loop is used to iterate over values in an iterable. Objects are be defualt
 * not iterable. Objects use the for..in loop to iterate over keys. If we want to iterate
 * over the values of an object we can convert it to an iterable by adding the
 * Symbol.iterator property. After this the object can be used in a for..of loop
 * to iterate over its values.
 */

const range = {
  from: 1,
  to: 5,
};

// The Symbol.iterator is a hidden property i.e. a function that is attached to the object
range[Symbol.iterator] = function () {
  // This function must return an object which contains the next() method
  // used by the for..of loop
  return {
    current: this.from,
    last: this.to,

    // The next() method returns the next value for the iteration in the form on an object.
    // The object has two properties i.e. done and value.
    next() {
      if (this.current <= this.last) {
        // If done is false then the for..of loop fetches the value property
        return { done: false, value: this.current++ };
      } else {
        // If done is true then the for..of loop stops the iteration
        return { done: true };
      }
    },
  };
};

// After the Symbol.iterator property is added the for..of loop can be used for the object
for (num of range) {
  console.log(num);
}
