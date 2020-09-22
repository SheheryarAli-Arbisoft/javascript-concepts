/*
 * Classes were introduced in ES6 with the aim of adding correct OOP features in JavaScript.
 * JavaScript traditionally uses prototyping to create objects but with the intoduction of
 * Classes OOP priniciple such as Inheritance, Overriding, Access specifiers etc. were made
 * possible in JavaScript.
 *
 * Note: Classes use the concept of prototyping behind the scenes but all the logic is hidden
 * to use and we can only focus on the required functionality.
 */

// To declare a class use the class keyword along with the class name. Classes can also be
// declared using class expressions i.e. let user = class {}
class User {
  // To create a protected property use (_) before variable name. The _ does not enforce
  // language level control rather it is a convention used to remember that access to this
  // variable must be controlled. It can still be accessed from outside the class.
  _age = 22;

  // To create a private variable use (#) before variable name. This value cannot be accessed
  // from outside the class and property setters and getters have to be used if we want to
  // change the value.
  #qualification = 'Bachelor';

  // We can also create static properties. These properties do not require an object to be
  // accessed instead they can be referenced by the class name
  static className = 'User';

  // This is the constructor which accepts inital paramters and initalizes the properties
  constructor(name) {
    this.name = name;
  }

  // Object property setters and getters can also be used in a class
  set qualification(value) {
    this.#qualification = value;
  }

  // Methods can be used in the same way as in object literals
  sayHi() {
    console.log('Hello from User');
  }

  // We can also create static functions which can be accessed in the same way as
  // described above for static properties.
  static testStaticMethod() {
    console.log('This is a static method of User');
  }
}

// To create a subclass from the parent class use the 'extends' keyword. When a subclass is
// created all of the properties and methods of the parent class are copied in the subclass.
// When a class is extended then all of the static and non static properties are copied
// from the parent class to the subclass.
class SoftwareEngineer extends User {
  // When a constructor is defined in a subclass it must call the super() method which
  // calls the constructor of the parent class. This is because derived classed cannot initialize
  // objects they have to rely on the parent class for the initalization. If super() is not
  // called then an error is thrown
  constructor(name) {
    super(name);
  }

  // If a property with the same name is declared in the subclass then it overrides the
  // property in the parent class.
  sayHi() {
    console.log('Hello from Software Engineer');
  }
}

console.log(User.className);
User.testStaticMethod();

let user = new User('Sheheryar');

console.log(user._age);
console.log(user.qualification);

let softwareEngineer = new SoftwareEngineer('Ahmed');

user.sayHi();
softwareEngineer.sayHi();
