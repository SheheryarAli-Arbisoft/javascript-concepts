/*
 * Maps are a collection of key-valued pairs. The main difference between them and objects
 * is that in objects the keys can only be strings whereas in maps keys can be of any data type.
 * The other main difference is that of the methods used for insertion, deletion etc.
 */

//  NORMAL MAP
let user1 = { name: 'Sheheryar' };

const map = new Map();
map.set(user1, 2);

console.log(map.get(user1));

// In the case of normal map if we set the user object to null the contents of map should ideally
// be cleared but this is not the case. Since the object is being referenced in the map so it is
// reachable and hence not garbage collected.
user = null;
console.log(map.get(user1));
console.log(user1);

// WEAL MAP
let user = { name: 'Sheheryar' };

const map = new WeakMap();
map.set(user, 2);

console.log(map.get(user));

// In the case of weak map if we set the user object to null the contents of the map get cleared.
// The user object is now not reachable and hence is garbage collected.
user = null;
console.log(map.get(user));
console.log(user);
