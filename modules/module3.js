// If we are only exporting a single property in a module then we can use the 'export default'
// keywords. By doing this we will not have to destructure it when importing instead we can
// directly access the exported object.

class User {
  constructor(name) {
    this.name = name;
  }
}

// In ES5 the following syntax is used if we want to use 'export default'
module.exports = User;

// In ES6 syntax use the following
// export default User;
