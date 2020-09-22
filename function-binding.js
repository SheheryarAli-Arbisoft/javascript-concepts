/*
 * JavaScript has a global object 'this' which is passed as an object reference when no other
 * object is present in the current context. Because of this if a function is called and it has
 * a reference to this then the wrong object may be called.
 */

let user = {
  name: 'Sheheryar',
  sayHi() {
    console.log(`Hello ${this.name}`);
  },
};

// This will return undefined because the function is passed as a callback in the context of
// setTimeout() because it is asynchronous the user object does not exist so undefnied is
// returned instead of the actual value.
setTimeout(user.sayHi, 1000);

// To fix this problem the first way is to use a wrapper function. However this has a problem
// i.e. if the user object is changed before setTimeout has executed the callback then the
// wrong result may be displayed.
setTimeout(() => {
  user.sayHi();
}, 1000);

user = {
  sayHi() {
    console.log('Hello World');
  },
};

// The second way is to declare the function outside of the object and bind that function to
// the current object. In this way from wherever the function is called it will return the
// same result.
user1 = {
  name: 'Sheheryar',
};

function sayHi1() {
  console.log(`Hello ${this.name}`);
}

// To bind a function to an object we use the .bind() method
let boundedFunc = sayHi1.bind(user1);

// Now that the function is binded to the object it will always return the same result.
setTimeout(boundedFunc, 1000);
