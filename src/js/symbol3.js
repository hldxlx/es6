let name = Symbol('name');
let obj = {
    age:11,
    [name]:'kk'
}
// console.log(Object.keys(obj));//打印不出symbol属性值
// for(let k in obj){
//     console.log(k);//打印不出symbol属性值
// }
//console.log(Object.getOwnPropertyNames(obj));//打印不出symbol属性值
console.log(Object.getOwnPropertySymbols(obj))
let key = Object.getOwnPropertySymbols(obj)[0];
console.log(obj[key]);  //可以打印出symbol属性值
