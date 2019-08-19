// let name = Symbol.for('name');
// let name2 = Symbol.for('name');
// console.log(name === name2);
// console.log(Symbol.keyFor(name));

let arr = ['a','b','c','d'];
let iterator = arr[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());