// let str = '自动刷新你好binsom';
// console.log(str);
// let arr = ['a','b','c'];
//
// for (let n of arr.values()){
//     console.log(n)
// }
class A {
    constructor(name,age) {
        this.name = name;
        this.age = age;
        this.x = 1;
    }
    print() {
        console.log(this.num);
    }
}

class B extends A {
    constructor(name,age,num) {
        super(name,age);
        this.x = 2;
        this.num = num
    }
    m() {
        super.print();
    }
}

let b = new B('ww',45,997777);
b.m();
