// function * fn() {
//     console.log('hello');
//     return 'binsom'
// }
// let it = fn();
// let result = it.next();
// console.log(result);



function * fn() {
    yield 1;
    yield 2;
    yield 3;
    return 4;
}
let it = fn();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
// for(let v of it){
//     console.log(v);
// }
