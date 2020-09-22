try {
  // The engine will try to execute the code. If no exception occurs then the catch block will
  // be skipped.
  console.log('TRY');

  // If an exception occurs then the execution will stop and the control will jump to the catch
  // block.
  //   throw new Error();
} catch (error) {
  // The catch block will run when an exception occurs
  console.log('CATCH');
} finally {
  // The finally block runs everytime even if an exception occurs or not
  console.log('FINALLY');
}
