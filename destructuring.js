/*
 * With the help of destructuring we can only extract required values from an object or array
 * and use them as normal variables instead of referencing the original value to access
 * each value by index or key.
 *
 * Note: The destructuring principles are same for arrays and objects, the main difference is
 * that in case of objects the order of destructuring variables does not matter but in the case
 * of arrays the order of destructuring variables matters.
 */

const user = {
  name: 'Sheheryar',
  age: 22,
  qualification: 'Bachelor',
  'likes reading': false,
  'likes movies': true,
};

// To destructure values from an object we use the following method. We simply write the name
// of the property that is to be fetched in the curly braces and only that property is fetched.
// If a property mentioned is not present in the object then that property becomes undefined
const {
  // To rename a property we used 'property_name:  new_name'
  name: firstName,

  // To fetch a property just use the exact property name used in the object
  age,

  // To add a default value to a property if that property is not present in the object
  // we use the same procedure for default values as used in functions
  qualification = 'Matric',

  // To fetch the rest of the properties that are not mentioned explicitly we can use the rest
  // operator. The rest object will contain all of the remaining properties.
  ...rest
} = user;

// The fetched properties can be referenced normally with providing the reference of the object
console.log(firstName);
console.log(age);

// To print the properties of the rest object we can reference the key and the value will
// be printed
console.log(rest['likes movies']);

// Destructuring can also be used in function parameters when we only want to get certain
// properties from an object

printName(user);

// The same desctructuring principles as mentioned above are valid when using desctructuring
// in function parameters
function printName({ name }) {
  console.log(name);
}
