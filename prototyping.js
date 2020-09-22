// This Constructor function is used to create Person objects
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// Anything added to the prototype object of Person will be accessible by all objects made
// using the function constructor.
Person.prototype.getFullName = function () {
  console.log(this.firstName + ' ' + this.lastName);
};

// This Constructor function is used to create SoftwareEngineer objects
function SoftwareEngineer(person, experience) {
  this.experience = experience;

  // By setting the __proto__ property equal to the person object being passed if a property
  // is not defined in the constructor function then the engine will look for that property
  // in the prototpye object of the person object.
  this.__proto__ = person;
}

let p1 = new Person('Sheheryar', 'Ali');

// SoftwareEngineer.prototype = p1;

// Since this function is not defined in the constructor it is fetched from the prototype object
p1.getFullName();

let s1 = new SoftwareEngineer(p1, 1);

// Since this function is not defined in the constructor so this property will be fetched from
// the prototpye object of the __proto__ property i.e. in this case the prototpye object of the
// person object that was passed during object creation
s1.getFullName();
