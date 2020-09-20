function answer1() {
  console.log('Answer 1');
}

function answer2() {
  console.log('Answer 2');
}

function test(x, f1, f2) {
  if (x) {
    f1();
  } else {
    f2();
  }
}

test(true, answer1, answer2);
