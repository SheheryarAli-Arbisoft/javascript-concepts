/*
 * When a function calls itself this phenomenon is known as recursion. The recursive function
 * must have a base case which stops further self calls. The other case is the reduced case
 * which continues further with self calls. If the base case is not defined or the condition
 * is not correct then the function calls keep on recurring and this leads to the Call Stack
 * becoming full and this furhter leads to a StackOverflow exception.
 */

function factorial(n) {
  // This is the base case which stops the recursive process
  if (n === 1) {
    return n;
  }

  // This is the reduced case which leads to further recursive calls
  return n * factorial(n - 1);
}

console.log(factorial(4));
