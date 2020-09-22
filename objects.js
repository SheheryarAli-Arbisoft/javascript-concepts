/*
 * An object can be created with either of the following notations:
 *
 * 1. Object notation i.e. new Object()
 * 2. Literal notation i.e. {}
 *
 * Note: The literal notation is most commonly used
 */

let key1 = 'likes movies';

// Objects store properties as key-valued pairs. The key is a string and the value can be any
// any data type. Property names containing one word do not required quotations but more than
// one word i.e. spaces etc. require quotation marks to be used.
const user = {
  // Properties can be added in the following manner
  name: 'Sheheryar',
  age: 22,

  // Methods can be added by the following short hand notation or using function expressions
  // or arrow functions e.g. property_name: function
  getDetails() {
    return `${this.name} : ${this.qualification}`;
  },

  // Computed properties can be added to objects e.g. [variable_name]. In this scenario the
  // property name will be the value stored inside the key1 variable and not 'key1' itself
  [key1]: true,
};

// In JavaScript objects are dynamic i.e. properties can be added to objects after they have
// been initalized. Properties can be functions as well. Properties can be accessed using the
// dot (.) notation.
user.qualification = 'Bachelor';

user.sayHi = function () {
  console.log(`Hello ${this.name}`);
};

// In order to access properties that contain more than one word dot(.) notation cannot be
// used instead used bracket ([]) notation.
user['likes reading'] = false;

console.log(user);

user.sayHi();

console.log(user);
console.log(user.getDetails());

// To iterate over the properties of an object the for..in loop can be used. The for..in loop
// fetches each property of the object and we can use that property to print the
// corresponding values
for (let key in user) {
  console.log(`${key}: ${user[key]}`);
}

// To delete a property the delete keyword is used along with the property to be deleted
delete user.age;
console.log(user);

/* Constructor functions can be used to create objects with some inital properties and have
 * a same structure i.e. fields. The drawback of object literals is that we will need to create
 * a new literal for each object whereas with constructor function we can use the 'new'
 * keyword and an object will be created with the same properties as all the other objects.
 */

function User(name, age) {
  this.name = name;
  this.age = age;

  this.getDetails = function () {
    return `${this.name}: ${this.age}`;
  };

  // By default the constructor function returns this but if we return an object then the
  // custom object will be returned instead of this.

  // return {
  //   // This is property value short hand i.e. if the property being passed and the value to
  //   // assigned have the same name then only the variable name can be passed.
  //   name, // Same as name: name
  //   age, // Same as age: age

  //   getDetails() {
  //     return `${this.name}: ${this.age}`;
  //   },
  // };
}

let user1 = new User('Sheheryar', 22);
console.log(user.getDetails());

let user2 = new User('Ahmed', 11);
console.log(use2.getDetails());
