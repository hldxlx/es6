function User(name,age) {
    this.name = name;
    this.age = age;
}
User.getClassName = function(){
    return 'user'
}
User.prototype.changeName = function(name){
    this.name = name;
    console.log(this.name)
}
User.prototype.changeAge = function(age){
    this.age = age;
}
Object.defineProperty(User.prototype,'info',{
    get(){
        return 'name' + this.name +'age'+this.age;
    }
})
function Manger(name,age,pwd){
    User.call(this,name,age);
    this.pwd = pwd;
}
//继承静态方法
Manger.__proto__ = User;
//继承 prototype方法
Manger.prototype = User.prototype;
//添加新的方法
Manger.prototype.changePwd = function (pwd) {
    this.pwd = pwd;
}
let m1  = new Manger('leo',1,'22');
m1.changeName('toni');
console.log(m1.info)