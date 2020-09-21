// Arithmetic operators
let arith1 = 2;
let arith2 = 3;

console.log(
  '\nArithmetic Operators (+, -, *, /, %, **):\n======================'
);
console.log(`Addition (+) e.g. ${arith1} + ${arith2} = ${arith1 + arith2}`);
console.log(`Subtraction (-) e.g. ${arith1} - ${arith2} = ${arith1 - arith2}`);
console.log(
  `Mutliplication (*) e.g. ${arith1} * ${arith2} = ${arith1 * arith2}`
);
console.log(`Division (/) e.g. ${arith1} / ${arith2} = ${arith1 / arith2}`);
console.log(`Modulus (%) e.g. ${arith1} % ${arith2} = ${arith1 % arith2}`);
console.log(
  `Exponentiation (**) e.g. ${arith1} ** ${arith2} = ${arith1 ** arith2}`
);
// console.log('\n');

// Increment / Decrement operators
let x = 1;

console.log('\nIncrement Operator (++):\n======================');
console.log(`Initial Value: ${x}`);
console.log(`Value after Pre-Increment (++num): ${++x}`);
console.log(`Final Value: ${x}`);
console.log('\n');
console.log(`Initial Value: ${x}`);
console.log(`Value after Post-Increment (num++): ${x++}`);
console.log(`Final Value: ${x}`);

console.log('\nDecrement Operator (--):\n======================');
console.log(`Initial Value: ${x}`);
console.log(`Value after Pre-Decrement (--num): ${--x}`);
console.log(`Final Value: ${x}`);
console.log('\n');
console.log(`Initial Value: ${x}`);
console.log(`Value after Post-Decrement (num--): ${x--}`);
console.log(`Final Value: ${x}`);
// console.log('\n');

// Assignment operators
console.log('\nAssignment Operator (=):\n======================');

console.log(`Assignment (=) : ${(c = 2 + 3)}`);
console.log(`Assignment (+=) : ${(c += 1)}`); // Same as c = c + 1
console.log(`Assignment (-=) : ${(c -= 1)}`); // Same as c = c - 1
console.log(`Assignment (*=) : ${(c *= 4)}`); // Same as c = c * 4
console.log(`Assignment (/=) : ${(c /= 2)}`); // Same as c = c / 2
console.log(`Assignment (%=) : ${(c %= 3)}`); // Same as c = c % 3
// console.log('\n');

// Comparison operators
let comp1 = 1;
let comp2 = 1;

console.log(
  '\nComparison Operators (< , > , <=, >=, ==, !=, ===, !===):\n======================'
);

console.log(`Less than (<) : ${comp1 < comp2}`);
console.log(`Greater than (>) : ${comp1 > comp2}`);
console.log(`Less than or equal(<=) : ${comp1 <= comp2}`);
console.log(`Greater than or equal(>=) : ${comp1 >= comp2}`);
// These compare only by value
console.log(`Equal (==) : ${2 == '2'}`);
console.log(`Not Equal (!=) : ${2 != '2'}`);
// These compare by value and by type
console.log(`Equal (==) : ${2 === '2'}`);
console.log(`Not Equal (!=) : ${2 !== '2'}`);
// console.log('\n');

// Logical operators
let log1 = true;
let log2 = false;

let log3 = '';
let log4 = 'Supercar';

console.log('\nLogical Operators (&&, ||, !)):\n======================');
console.log(`AND (&&) : ${log1 && log2}`);
console.log(`OR (||) : ${log1 || log2}`);
console.log(`NOT (!) : ${!log1}`);
console.log(`AND finds first falsy value (&&) : ${log3 && log4}`);
console.log(`OR finds first truthy value (||) : ${log3 || log4}`);
console.log('\n');
