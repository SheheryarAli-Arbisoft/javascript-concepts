// In ES5 we use the following syntax to import properties from another module
const { sayHi } = require('./module1');

// If a property in a module is exported using export default then we can access it directly
// without having to destructure it.
const User = require('./module3');

// In ES6 the following syntax is used to import properties from another module
// import { sayHi } from './module1';
// import User from './module3';

sayHi();

let user = new User('Sheheryar');
console.log(user.name);
