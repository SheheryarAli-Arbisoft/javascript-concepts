/*
 * A string can be decalred using the following ways:
 *
 * 1. Double quotes ("")
 * 2. Single quotes ('')
 * 3. Backticks (``)
 *
 * Note: When using backticks expressions can be added using ${}
 */

let name = 'Sheheryar';

console.log(name);

// Characters can be accessed using the index postion or using string.charAt() method.
console.log(name[2]);

// Strings are immutable i.e. once a string is defined it cannot be changed. The following
// example will show an error if used in strict mode and is invalid.
name[2] = 'a';
console.log(name);

// There are many built-in methods for strings. An example is shown below, there are many other
// besides this such as substring, slice, includes etc.
console.log(name.toUpperCase());

// To iterate over characters of a string a for loop or for..of loop can be used just like the
// way used in arrays.
for (char of name) {
  console.log(char);
}
