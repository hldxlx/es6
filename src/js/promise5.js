let promise = Promise.resolve('hello');
//相当于
// let promise = new Promise(function(resolve,reject){
//     resolve('hello');
// })
promise.then(function(res){
    console.log(res);
});
let promise2 = Promise.reject('err');
promise2.then(null,function (err) {
    console.log(err);
})