/*
 * Sets hold only values just like arrays but the main difference is that Sets are used where
 * uniqueness of values need to be preserved. Another difference is that of the method it
 * provides for insertion, deletion etc.
 */

// NORMAL SET
let user = { name: 'Sheheryar' };

const set = new Set();
set.add(user);

console.log(set.has(user));

// In the case of normal set if we set the user object to null the contents of set should ideally
// be cleared but this is not the case. Since the object is being referenced in the set so it is
// reachable and hence not garbage collected.
user = null;
console.log(set.has(user));
console.log(user);

// WEAK SET
let user = { name: 'Sheheryar' };

const set = new WeakSet();
set.add(user);

console.log(set.has(user));

// In the case of weak set if we set the user object to null the contents of the set get cleared.
// The user object is now not reachable and hence is garbage collected.
user = null;
console.log(set.has(user));
console.log(user);
