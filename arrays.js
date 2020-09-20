const arr = [1, 2, 3, 4, 5];

console.log(arr.length);
console.log(arr[3]);

arr[0] = 2;
console.log(arr);

arr.push(3, 3);
console.log(arr);

arr.pop();
console.log(arr);

arr.unshift(10, 20);
console.log(arr);

arr.shift();
console.log(arr);
