/*
 * When a variable is declared outside of all functions and can be accessed anywhere in the
 * program then that variable is said to have Global Scope.
 */

// var greeting1 = 'Hello World 1';

// function func1() {
//   console.log(greeting1);
// }

// func1();

/*
 * When a variable is declared in a function then it can be accessed only in that function
 * and its nested code blocks and not from outside the function. This type of variable is said
 * to have Local or Function Scope.
 */

// function func2() {
//   var greeting2 = 'Hello World';
//   console.log(greeting2);
// }

// console.log(greeting2);

/*
 * When a variable is declared inside a code block using the 'let' or 'const' keyword then it
 * can be accessed only in that code block and not from outside even in the function in which
 * the code block is present. This type of variable is said to have Block Scope.
 */

function func3(x) {
  if (x == 1) {
    let greeting3 = 'Hello World';
  } else {
    const greeting3 = 'Good Bye';
  }

  function func4() {
    // console.log(greeting3);

    function func5() {
      console.log(greeting3);
    }

    func5();
  }

  // console.log(greeting3);

  func4();
}

var greeting3 = 'Another';

func3(1);
