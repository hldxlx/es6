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
        return 'vadi ok';
    })
    //假如返回的不是一个promise，它内部会进行处理将它转为一个promise,然后就可以继续.then()
    // var promise = Promise.resolve('vadi ok');
    // var  promise = new Promise(function(resolve,reject){
    //     reject('vadi ok');
    // })
    .then(function(res){
        console.log(res);
    })
