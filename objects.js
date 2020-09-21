const user = {
  name: 'Sheheryar',
  age: 22,

  getDetails() {
    return `${this.name} : ${this.qualification}`;
  },
};

user.qualification = 'Bachelor';

user.sayHi = function () {
  console.log(`Hello ${this.name}`);
};

console.log(user);

user.sayHi();

delete user.age;
console.log(user);

let key = 'likes reading';
user[key] = false;

console.log(user);
console.log(user.getDetails());
