// 3
// Asynchronous continuation-passing style
function additionAsync(a, b, callback) {
  setTimeout(() => callback(a + b), 100);
}

console.log('before');
additionAsync(1, 2, result => console.log(result));
console.log('after');