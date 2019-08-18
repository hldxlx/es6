// class User{
//     constructor(name){
//         this.name = name;
//     }
//     send(cb){
//         let name = this.name;
//         return new Promise(function(resolve,reject){
//            setTimeout(function(){
//                if(name == 'bin'){
//                    resolve('成功')
//                }else{
//                    reject('失败')
//                }
//            },100)
//         })
//     }
// }
// let user = new User('bin');
// user.send().then(function(res){
//     console.log(res)
// })

class User{
    constructor(name,pwd){
        this.name = name;
        this.pwd = pwd;
    }
    validateName(cb){
        let name = this.name;
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                if(name == 'bin'){
                    resolve('成功1')
                }else{
                    reject('失败1')
                }
            },100)
        })
    }

    validatePwd(cb){
        let pwd = this.pwd;
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                if(pwd == '123'){
                    resolve('成功2')
                }else{
                    reject('失败2')
                }
            },100)
        })
    }
}
let user = new User('bin','123');
user.validateName()
    .then(function(res){
    return user.validatePwd();
    })
    .then(function(res){
        console.log(res);
    })