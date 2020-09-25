// (function autorun() {
//   let x = 1;
//   function log() {
//     console.log(x);
//   }
//   function run(fn) {
//     let x = 100;
//     fn();
//   }
//   run(log);
// })();

// const foo = (a) => (b) => (c) => {
//   console.log(a);
//   console.log(b);
//   console.log(c);
// };

// foo(2)(3)(4);

// (function test() {
//   setTimeout(function () {
//     console.log(4);
//   }, 0);

//   new Promise(function executor(resolve) {
//     console.log(1);
//     for (var i = 0; i < 10000; ++i) {
//       i === 9999 && resolve();
//     }

//     console.log(2);
//   }).then(function () {
//     console.log(5);
//   });

//   console.log(3);
// })();

// (() => {
//   let i = 0;

//   setTimeout(() => {
//     console.log(1 + ` => i: ${++i}`);
//   }, 0);

//   new Promise((resolve) => {
//     console.log(2 + ` => i: ${++i}`);

//     setTimeout(() => {
//       console.log(3 + ` => i: ${++i}`);
//     }, 0);

//     resolve();
//   })
//     .then(() => {
//       console.log(6 + ` => i: ${++i}`);

//       return new Promise((resolve) => {
//         console.log(4 + ` => i: ${++i}`);

//         setTimeout(() => {
//           console.log(5 + ` => i: ${++i}`);
//           resolve();
//         }, 0);
//       });
//     })
//     .then(() => {
//       console.log(7 + ` => i: ${++i}`);
//     });

//   console.log(8 + ` => i: ${++i}`);
// })();

(async () => {
  let i = 0;

  setTimeout(() => {
    console.log(1 + ` => i: ${++i}`);
  }, 0);

  await new Promise((resolve) => {
    console.log(2 + ` => i: ${++i}`);

    setTimeout(() => {
      console.log(3 + ` => i: ${++i}`);
    }, 0);

    resolve();
  });

  console.log(6 + ` => i: ${++i}`);

  await new Promise((resolve) => {
    console.log(4 + ` => i: ${++i}`);

    setTimeout(() => {
      console.log(5 + ` => i: ${++i}`);
      resolve();
    }, 0);
  });

  console.log(7 + ` => i: ${++i}`);

  console.log(8 + ` => i: ${++i}`);
})();
