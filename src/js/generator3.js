//yield值和赋值
// function *fn(_name){
//     let name = yield _name;//yield 默认返回undefined
//     return name;
// }
// let it = fn('som');
// console.log(it.next());
// console.log(it.next());



// function *fn(_name){
//     let name = yield _name;
//     return name;
// }
// let it = fn('som');
// console.log(it.next());
// console.log(it.next('liang'));

function asyncF(name){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve('my name is' + name);
        })
    })
}
function *fn() {
    console.log(yield asyncF('leo'));
}
let gf = fn();
function exec(gf,value) {
    let result = gf.next(value);
    if(!result.done){
        if(result.value instanceof Promise){
            result.value.then(function(v){
                exec(gf,v);
            })
        }else{
            exec(gf,result.value)
        }
    }
}
exec(gf);
