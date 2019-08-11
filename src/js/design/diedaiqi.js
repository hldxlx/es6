class Interator{
    constructor(container){
        this.list = container.list;
        this.index = 0;
    }
    next(){
        if(this.hasNext()){
            return this.list[this.index++]
        }
        return null
    }
    hasNext(){
        if(this.index >= this.list.length){
            return false;
        }
        return true
    }
}
class Container{
    constructor(list){
        this.list = list;
    }
    getInterator(){
        return new Interator(this);
    }
}

let contai = new Container([1,2,3,4]);
let inter = contai.getInterator();
while (inter.hasNext()){
    console.log(inter.next());
}