// let arr = [1,2,3,'5',5,5];
// let kis = new Set(arr);
// kis.add({name:'kk'});
// let boo = kis.delete({name:'kk'});
// console.log(kis);
// console.log(boo);//false



//
// let arr = [1,2,3,'5',5,5];
// let kis = new Set(arr);
// kis.add(kis);
// let boo = kis.delete(kis);
// console.log(boo);  //true


let arr = ['fs','se','e3','e3 '];
let newArr = Array.from(new Set(arr));
console.log(newArr);
console.log(Set.prototype[Symbol.iterator] ===Set.prototype.values);