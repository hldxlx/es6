class A{
    constructor(){
        this.name = 'bins'
    }
    getName(name){
        this.name = name;
    }
}
class B extends A{
    constructor(){
        super();
        this.age = 22;
    }
    getAge(){

    }
    [Symbol('fullname')](){
        
    }
}
B.prototype.getClass = function () {
    
}
var b = new B;
//Object.keys 能够得到自身的可枚举的属性，但得不到原型链上的属性
console.log(Object.keys(B.prototype));
//Object.getOwnPropertyNames(b) 能够得到自身属性，包括不可枚举的属性，但得不到原型链上的属性
//得不到Symbol属性
console.log(Object.getOwnPropertyNames(B.prototype));


//可以得到自身的Symbol属性 包括不可枚举的属性
console.log(Object.getOwnPropertySymbols(B.prototype));

for(let key in b){
    console.log(key);
}

console.log(Object.getOwnPropertyDescriptor(B.prototype, 'getAge'));

class User{
    constructor(){

    }
}
var p = {
    getName(){

    }
}
var user = new User();
console.log(user.__proto__ === User.prototype);

user.__proto__ = p;
console.log(user.getName);

Object.setPrototypeOf(user,p);
var proto = Object.getPrototypeOf(user);
console.log(proto === user.__proto__);

