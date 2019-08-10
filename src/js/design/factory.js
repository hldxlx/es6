class Product{
    constructor(name){
        console.log(name);
    }
    init(){
        console.log('init')
    }
    fun1(){
        console.log('fun1')
    }
}
class Creater{
    create(n){
        return new Product(n);
    }
}
let creater1 = new Creater();
let c = creater1.create('p1');
console.log(c);
c.init();
