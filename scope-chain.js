/*
 * Scope chain in the process in which when a variable is referenced the engine tries to find
 * it in the current scope. If the variable does not exist in the current scope it looks for it
 * in the outer scope and goes out until the global scope. If the variable is also not present
 * in the global scope then 'undefined' is returned.
 */

let name1 = 'Sheheryar';

function test() {
  let name2 = 'Ahmed';

  console.log('\nInside Loop:');
  for (let i = 0; i < 1; i++) {
    let name1 = 'Ali';

    console.log('Name 1: ' + name1); // Ali
    console.log('Name 2: ' + name2); // Ahmed
  }

  console.log('\nOutside Loop:');
  console.log('Name 1: ' + name1); // Sheheryar
  console.log('Name 2: ' + name2); // Ahmed
  console.log('Name 3: ' + name3); // undefined

  console.log('\n');
}

test();
