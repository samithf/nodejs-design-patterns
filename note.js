// 1
// direct style
function add(a, b) {
  return a + b;
}
console.log(add(1, 2));

// 2
// Synchronous continuation-passing style
function add(a, b, callback) {
  callback(a + b);
}

console.log('before');
add(1, 2, result => console.log(result));
console.log('after');
// prints => before 3 after

// 3
// Asynchronous continuation-passing style
function additionAsync(a, b, callback) {
  setTimeout(() => callback(a + b), 100);
}

console.log('before');
additionAsync(1, 2, result => console.log(result));
console.log('after');
// prints => before after 3