// var obj = {
//     name:'kk',
//     'my name':'bin'
// }
// console.log(obj.name);
// console.log(obj['my name']);

let getName = Symbol('name');
let obj = {
    [getName](){
        return 'binsom'
    }
}
console.log(obj[getName]());
