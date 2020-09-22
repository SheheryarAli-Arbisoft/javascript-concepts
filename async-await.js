/*
 * Aysnc / Await was introduced in ES8. This was introduced to further minimize the code
 * used in promises. The same logic is used behind the scenes as that used for promises.
 */

// To declare an async function just add the keyword before the function. An async function means
// that the function will always return a promise. This means that if the response of an async
// function is a promise then we can add promise request handlers to that response. Since the
// function returns a promise so it is executed asynchronously.
async function greeting() {
  // Here the await keyword tells the JS engine to wait for the response before moving onto the
  // next line. Once the promise has resolved then the response is returned and saved in
  // the result variable.
  const result = await new Promise((resolve, reject) =>
    setTimeout(() => resolve('Hello World'), 3000)
  );

  console.log(result);
}

greeting();
