// var ok = 'ok';
// var obj = {
//     ['myid'+ok]:'007',
//     ['age'+ok]:22,
//     getName(firstName,lastName) {
//         return {firstName,lastName}
//     },
//     set name(name){
//         this.name = name;
//     },
//     get name(){
//         return this.name;
//     }
// };
// var obj2 = {};
// modules.exports = {obj,obj2}


// console.log(Object.is({},{}),{} === {});
// console.log(Object.is(NaN,NaN),NaN === NaN);
// console.log(Object.is(+0,-0),+0 === -0);

// var obj = {};
// var obj2 = Object.assign({},{name:'lele'})
// console.log(obj === obj2);

const DEF = {
    name:'nn'
}
function test(opts) {
    let options = Object.assign({},DEF,opts);
    console.log(options);
}
test({age:11})