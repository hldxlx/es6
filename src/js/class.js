//多态 定义一个接口 可以再子类中实现不同的功能
class People{
    constructor(name){
        this.name = name
    }
    say(){
        console.log(`${this.name}`)
    }
}
class A extends People{
    constructor(name){
        super(name)
    }
}
class B extends People{
    constructor(name){
        super(name)
    }
}
let a = new A('a');
a.say();
let b = new B('b');
b.say();