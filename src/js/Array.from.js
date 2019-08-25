// let arr = Array.from({
//     '0':'11',
//     '1':'aa',
//     'length':'2'
// },function(item,index){
//     return item + '---' + index
// })
// console.log(arr);

var set = new Set(['a','b','c']);
console.log(Array.from(set));

let arr2 = Array.of(12);
console.log(arr2);