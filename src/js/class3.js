// function User(name,age) {
//     this.name = name;
//     this.age = age;
// }
class User{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    // User.getClassName = function(){
    //     return 'user'
    // }
    static getClassName(){
        return 'user'
    }
    // User.prototype.changeName = function(name){
    //     this.name = name;
    //     console.log(this.name)
    // }
    // User.prototype.changeAge = function(age){
    //     this.age = age;
    // }
    changeName(name){
        this.name = name;
        console.log(this.name)
    }
    changeAge(age){
        this.age = age;
    }
//     Object.defineProperty(User.prototype,'info',{
//     get(){
//         return 'name' + this.name +'age'+this.age;
//     }
// })
       get info(){
           return 'name' + this.name +'age'+this.age;
       }
}
// / function Manger(name,age,pwd){
//     User.call(this,name,age);
//     this.pwd = pwd;
// }

class Manger extends User{
    constructor(name,age,pwd){
        super(name,age);
        this.pwd = pwd;
    }
    changePwd(pwd){
        this.pwd = pwd;
    }
    get info(){
        var info = super.info;
        console.log(info,'==info');
        return info + '--new'
    }
}
// //继承静态方法
// Manger.__proto__ = User;
// //继承 prototype方法
// Manger.prototype = User.prototype;
// //添加新的方法
// Manger.prototype.changePwd = function (pwd) {
//     this.pwd = pwd;
// }
let m1  = new Manger('leo',1,'22');
m1.changeName('yryr');
console.log(m1.info);

// //假如不写constructor 那么它会默认为
// class manger2 extends Manger{
//     //不写constructor 那么它会默认为
//     constructor(...arg){
//         super(...arg)
//     }
// }
// let m2 = new manger2('ji',2,3);
// console.log(m2,'===m2')