// The setTimeout() accepts a callback function and a time in milliseconds. This function
// executes the callback after the specified time has elapsed.
setTimeout(() => console.log('SET TIMEOUT CALLED AFTER 3 SECONDS'), 3000);

// The setInterval() works the same way as setTimeout() but it keeps calling the provided
// function after the specified interval
setInterval(() => console.log('SET INTERVAL CALLED AFTER 3 SECONDS'), 3000);
