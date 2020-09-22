// We can also add 'export' before each declaration. By doing this we will not have to
// explicitly export the declarations.

const greeting = 'Hello World';

const sayHi = () => {
  console.log(greeting);
};

// In ES5 and Nodejs the following syntax is followed
module.exports = { sayHi };

// In ES6 the following syntax is followed
// export { sayHi };
