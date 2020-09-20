function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.getFullName = function () {
  console.log(this.firstName + ' ' + this.lastName);
};

function SoftwareEngineer(person, experience) {
  this.experience = experience;

  this.__proto__ = person;
}

let p1 = new Person('Sheheryar', 'Ali');
let p2 = new Person('Ahmed', 'Ali');

p1.getFullName();

let s1 = new SoftwareEngineer(p1, 1);
s1.getFullName();
