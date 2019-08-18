//all
// function asyncFun(a,b){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             resolve(a + b)
//         },2000)
//     });
// }
// let list = [];
// asyncFun(1,2)
//     .then(function(result){
//         list.push(result);
//         return asyncFun(2,3)
//     })
//     .then(function(result){
//         list.push(result)
//     });
// var promise = Promise.all([asyncFun(1,2),asyncFun(2,3)]);
// promise.then(function (res) {
//     console.log(res);
// })






//race
function asyncFun(a,b,time){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve(a + b)
        },time)
    });
}
var promise = Promise.race([asyncFun(1,2,200),asyncFun(5,6,1200),asyncFun(50,60,20)]);
promise.then(function (res) {
    console.log(res);
})