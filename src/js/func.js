// var fn = function(name){
//
// }
// var fn = (name) =>{
//
// }
// var fn = name =>{
//
// }

// setTimeout(function () {
//
// },1000)
//
// setTimeout(n =>{
//
// },1000)
class User{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    changeName(name){
        this.name = name;
    }
    changeAge(age){
        this.age = age;
    }
    turn(name,age){
        var self = this;
        let fn = () =>{
            console.log(self === this)
            this.changeName(name);
            this.changeAge(age);
        }
        fn();
    }
}
var user = new User('kkd',11);
user.turn('le',30);