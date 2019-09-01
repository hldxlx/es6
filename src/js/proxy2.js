// var obj = {name:'leo'};
// var proxy =  new Proxy(obj,{
//     get:function (target,key) {
//         return 'no';
//     },
//     set:function (target,key,value) {
//         Reflect.set(target,key,value);
//     }
// });
// console.log(proxy.name);
// proxy.name = 'kks';
// console.log(obj.name,'===obj.name');



// var obj = {name:'kks',_name:'posf'};
// var proxy = new Proxy(obj,{
//     has:function (target,key) {
//         if(key[0] === '_'){
//             return false
//         }else{
//             return key in target
//         }
//     }
// });
// var bool = 'name' in proxy;
// console.log(bool);
// console.log('_name' in proxy);



var obj2 = {
    name:'tr',
    _name:'kk',
    age:12,
    gruoup:'js'
}
var proxy2 = new Proxy(obj2,{
    enumerate:function (target) {
        return Object.keys(target).filter(function (key) {
        })[Symbol.iterator]();
    }
})
for(var key in proxy2){
    console.log(key,'22')
}

