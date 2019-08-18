// function asyncFun(a,b,cb){
//     setTimeout(function(){
//         cb(a + b)
//     },200)
// }
// asyncFun(1,2,function(result){
//     console.log(result);
// });
// console.log('gg');




// function asyncFun(a,b,cb){
//     setTimeout(function(){
//         cb(a + b)
//     },2000)
// }
// //多层时这样不优雅，这也是promise规范产生的原因
// asyncFun(1,2,function(result){
//     if(result > 2){
//         asyncFun(result,2,function(result){
//             if(result > 4){
//                 asyncFun(result,2,function(result){
//                     console.log('ok')
//                 });
//             }
//         });
//     }
// });
// console.log('gg');




//promise 优雅
function asyncFun(a,b){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve(a + b)
        },2000)
    });
}
asyncFun(1,2)
    .then(function(result){
        if(result > 2){
            return asyncFun(result,2);
        }
    },function(err){
        console.log('first'+ err); //no number
    })
    .then(function(result){
        if(result > 4){
            console.log('ok了')
        }
    })




//4 异常处理
// function asyncFun(a,b){
//     return new Promise(function(resolve,reject){
//         if(typeof a !== 'number' || typeof b !== 'number'){
//             reject(new Error('no number'))
//         }
//         setTimeout(function(){
//             resolve(a + b)
//         },2000)
//     });
// }
// asyncFun(1,'p')
//     .then(function(result){
//         if(result > 2){
//             return asyncFun(result,2);
//         }
//     },function(err){
//         console.log('first'+ err); //no number
//     })
//     .then(function(result){
//         if(result > 4){
//             console.log('ok了')
//         }
//     })
//     .catch(function(err){
//         console.log('second'+ err);
//     })
