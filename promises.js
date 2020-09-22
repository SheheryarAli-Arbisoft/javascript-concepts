/*
 * Promises were introduced in ES6. Promises are used to execute a task asynchronously just in
 * the same way we use callbacks but they offer some imporvements as compared to traditional
 * callbacks. They have the following benifits:
 *
 * 1. They make the code more manageable and readable i.e. most of the logic has already been
 * implemented and we can use promises in a more modular fashion.
 *
 * 2. They allow us to chain multiple requests one after the other whereas in callbacks chaining
 * becomes complicated when there are more than 2 callbacks that need to be executed one after
 * the other.
 *
 * 3. Promises also improve the way in which error handling is done i.e. it has different
 * request handlers for successful and failed responses so it makes it easy to focus on only one
 * thing rather than handling all the possibilities in a single function.
 *
 * 4. When using callbacks we must know what to do prior to executing the request whereas in
 * promises that logic can be added anywhere in the code an at any time.
 */

// Promises are declared using the following manner. They require an executor function which has
// 2 arguments i.e. resolve and reject which are callbacks. The logic is added inside this
// function and if the function is executed successfully then resolve() is called else
// reject() is called. There are request handlers i.e. then, catch, finally which are used to
// handle the result of a promise either successful or failed.
let promise1 = new Promise((resolve, reject) => {
  // If a promise is successful resolve is called
  resolve('Promise 1 executed successfully');

  // If a promise failed then reject is called
  //   reject(new Error('Promise 1 execution failed'));
});

promise1
  // When the resolve() callback is called then control is handed over to the .then() request
  // handler. This request handler accepts the result and performs the required functionality.
  .then((result) => console.log(result))

  // When the reject() callback is called then control is handed over to the .catch() request
  // handler. This request handler accepts the error and performs the required functionality.
  .catch((error) => console.log(error.message))

  // The finally() request handler is executed in either case resolve() or reject(). This is
  // mostly used for cleanup purposes such as stopping the loading bar etc.
  .finally(() => console.log('Promise 1 cleaup performed'));

// The request handlers can be chained in a promise. This is useful when we want to execute
// asynchronous requests in a sequential manner. When a request handler returns a promise then
// the result is passed to the next defined request handler in the chain. This works for both
// .then() and .catch(). Since finally() is executed at the end so it is not chained.
let promise2 = new Promise((resolve, reject) => {
  resolve('Promise 2 Successful 1');

  //   reject('Promise 2 Failed 1');
});

// Because of chaining promises make the code more readable and manageable as compared to
// using traditional callbacks.
promise2
  // Each call of resolve() in then() will pass down to the next request handler.
  .then((result) => {
    console.log(result);

    return new Promise((resolve, reject) => {
      resolve('Promise 2 Successful 2');
    });
  })
  .then((result) => {
    console.log(result);

    return new Promise((resolve, reject) => {
      resolve('Promise 2 Successful 3');
    });
  })
  .then((result) => {
    console.log(result);
  })

  // Each call of reject() in catch() will pass down to the next request handler.
  .catch((error) => {
    console.log(error);

    return new Promise((resolve, reject) => {
      reject('Promise 2 Failed 2');
    });
  })
  .catch((error) => {
    console.log(error);

    return new Promise((resolve, reject) => {
      reject('Promise 2 Failed 3');
    });
  })
  .catch((error) => {
    console.log(error);
  })

  .finally(() => {
    console.log('Promise 2 cleanup performed');
  });

// The Promise API also provides some useful methods

// Promise.all() is used to send multiple asynchronous requests simultaneously and throws an
// error if any one of the requests fail. This function will return the responses in the same
// order as the order of the promises supplied despite which promise finishes first.
Promise.all([
  new Promise((resolve) => setTimeout(() => resolve(1), 3000)), // 1
  new Promise((resolve) => setTimeout(() => resolve(2), 2000)), // 2
  new Promise((resolve) => setTimeout(() => resolve(3), 1000)), // 3
]).then((responses) => {
  responses.forEach((response) => {
    console.log(response);
  });
});

// There are other methods as well:
//
// 1. Promise.allSettled() will return the response in the form {status, value} where status
// indicates where a promise was successful or not. It will not throw an error even if some of
// the promises fail.
//
// 2. Promise.race() will return the first settled response either successful or not.
//
// 3. Promise.resolve() is used to immediately resolve a promise.
//
// 4. Promise.reject() is used to immediately reject a promise.
