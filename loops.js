/*
 * The for loop is used to execute a code block a fixed number of times. It has three parts
 * i.e. initialization, condition and step. All the three parts can be written in the body
 * of the loop or written separately.
 */

for (let i = 0; i < 5; i++) {
  console.log(i + 1);
}

// In this example the initalization is taking place outside the body of for loop
let i = 0;

for (; i < 5; i++) {
  console.log(i + 1);
}

// In this example the initalization is taking place outside the body of for loop and step is
// being performed inside
let j = 0;

for (; j < 5; ) {
  console.log(j + 1);
  j++;
}

// In this example the initalization is taking place outside the body of for loop. The step and
// condition are being handled inside the body. This type of for loop is the same as a while
// loop
let j = 0;

for (;;) {
  if (j < 5) {
    console.log(j + 1);
    j++;
  } else {
    break;
  }
}

/*
 * The while loop is used to execute a code block until condition is true. In this loop the
 * condition is checked before executing the code block i.e. pre checking of condition occurs.
 */

let i = 0;

while (i < 5) {
  console.log(i + 1);
  i++;
}

/*
 * The do while loop is used to execute a code block atleast once. In this loop the condition
 * is checked after the iteration i.e. post checking occurs.
 */

let i = 5;

do {
  console.log(i);
  i++;
} while (i < 5);
