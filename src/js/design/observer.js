class Subject{
    constructor(){
        this.status = 0;
        this.observers = [];
    }
    getStatus(){
        return this.status;
    }
    setStatus(status){
        this.status = status;
        this.allfil();
    }
    allfil(){
        this.observers.forEach(observer =>{
            observer.update();
        })
    }
    attach(observer){
        this.observers.push(observer)
    }
}
class Observer{
    constructor(name,subject){
        this.name = name;
        this.subject = subject;
        this.subject.attach(this);
    }
    update(){
        console.log(`name:${this.name}----status:${this.subject.status}`)
    }
}
let s1 = new Subject();
let o1 = new Observer('kks',s1);
let o2 = new Observer('kks',s1);
let o3 = new Observer('kks',s1);
s1.setStatus('1');
s1.setStatus('2');
s1.setStatus('3');

