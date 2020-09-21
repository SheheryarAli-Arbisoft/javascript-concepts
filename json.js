/*
 * JSON.stringify() is used to convert an object to a JSON string
 */

const obj1 = {
  name: 'Sheheryar',
  designation: 'Software Engineer',
};

// A JSON encoded string representation of the object is returned
const jsonString1 = JSON.stringify(obj1);
console.log(jsonString1);

/*
 * JSON.parse() is used to create an object from a JSON string
 */

const jsonString2 = '{"name":"Sheheryar","designation":"Software Engineer"}';

// An object is returned from the JSON encoded string
const obj2 = JSON.parse(jsonString2);
console.log(obj2);
