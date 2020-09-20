let name1 = 'Sheheryar';

function test() {
  let name2 = 'Ahmed';

  console.log('\nInside Loop:');
  for (let i = 0; i < 1; i++) {
    let name1 = 'Ali';
    console.log('Name 1: ' + name1);
    console.log('Name 2: ' + name2);
  }

  console.log('\nOutside Loop:');
  console.log('Name 1: ' + name1);
  console.log('Name 2: ' + name2);
  console.log('Name 3: ' + name3);

  console.log('\n');
}

test();
