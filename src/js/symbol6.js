// var obj = {'leo':'123456','zengliang':'3232323'};
// obj[Symbol.iterator] = function(){
//     let self = this;
//     let i = 0;
//     const names = Object.keys(this);
//     const length = names.length;
//     return {
//         next:function(){
//             let name = names[i++];
//             let qq = self[name];
//             return {value:{name,qq},done:i > length}
//         }
//     }
// }
// for(let u of obj){
//     console.log(u);
// }






// var obj = {'leo':'123456','zengliang':'3232323'};
// var obj2 = {'leo':'2','zengliang':'22'};
// let iteratorFun = function(){
//     let self = this;
//     let i = 0;
//     const names = Object.keys(this);
//     const length = names.length;
//     return {
//         next:function(){
//             let name = names[i++];
//             let qq = self[name];
//             return {value:{name,qq},done:i > length}
//         }
//     }
// }
// obj[Symbol.iterator] = iteratorFun;
// obj2[Symbol.iterator] = iteratorFun;
// for(let u of obj){
//     console.log(u);
// }


// let obj = {
//     length:2,
//     '0':'abc',
//     '1':'ddd'
// }
// obj[Symbol.iterator] = [][Symbol.iterator];
// for(let i of obj){
//     console.log(i);
// }



console.log('leo'[Symbol.iterator]);
for(let char of 'leo'){
    console.log(char);
}