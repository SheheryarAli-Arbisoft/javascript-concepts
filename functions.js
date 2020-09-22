/*
 * Function declarations can be declared any where in the document because they are hoisted
 * by the compiler to the top of the document. In this scenario the function can be called
 * before it is declared.
 *
 * Note: Function declaration are useful when we want to use a function in multiple places and we
 * know that the internal functionality will be the same in every situation
 */

func1();
// console.log(func1());

// Default text can also be passed to function i.e. if the parameter is passed then the
// passed value is used else the specified default value is used
function func1(text = 'Default text') {
  console.log('Hello World 1');
  //   return 'Hello World 1';
}

/*
 * When a function is declared and assigned to a variable then this expression in known as a
 * function expression. These are not hoisted because function expressions are initialized only
 * when the compiler reaches that line. In this scenario if the function is called before
 * initialization this will throw an error.
 *
 * Note: Function expressions are useful when we know that the execution logic depends on
 * a particular condition so we declare a global variable and initalize it where required.
 */

// func2();

const func2 = function () {
  console.log('Hello World 2');
};

func2();

/*
 * Arrow function provide a more concise way to write a function. They are used in the same
 * manner as function expression and also use the same hoisting principle as function
 * expressions. There are some differences as compared to other types i.e.
 *
 * 1. If there is one parameter then the parenthesis are optional. If there are zero or more
 *    more than one parameters then parenthesis are required.
 * 2. If there is only an expression and curly braces are not used then the result of that
 *    expression is returned from the arrow function. If curly braces are used then the same
 *    logic as regular functions is used.
 */

// func3()

const func3 = () => {
  console.log('Hello World 3');
};

func3();
