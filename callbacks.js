function answer1() {
  console.log('Answer 1');
}

function answer2() {
  console.log('Answer 2');
}

function test(x, f1, f2) {
  // Here f1 and f2 are considered callback functions because these are not values instead
  // these are functions which are passed as parameters and they are being called under
  // certain conditions.
  if (x) {
    f1();
  } else {
    f2();
  }
}

// Here answer1 and answer2 are being passed as parameters to the function instead of their
// results being passed.
test(true, answer1, answer2);
