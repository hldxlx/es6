class Circle{
    draw(){
        console.log('画边框')
    }
}
class Descript{
    constructor(circle){
        this.cricle = cricle;
    }
    draw(){
        this.cricle.draw();
        this.setColor(cricle);
    }
    setColor(cricle){
        console.log('添加红色')
    }
}
let cricle = new Circle();
cricle.draw();
console.log("===========")
let c2 = new Descript(cricle);
c2.draw();
