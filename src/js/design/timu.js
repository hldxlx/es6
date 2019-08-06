//车和行程
class Car{
    constructor(number,name){
        this.number = number;
        this.name = name;
    }
}
class kuaiche extends Car{
    constructor(number,name){
        super(number,name);
        this.price = 1;
    }
}
class zhuanche extends Car{
    constructor(number,name){
        super(number,name);
        this.price = 2;
    }
}

class Trip{
    constructor(car){
        this.car = car;
    }
    start(){
        console.log(`${this.car.name}----${this.car.number}`)
    }
    end(){
        console.log(`${this.car.price}`)
    }
}
let car = new kuaiche('10025','kkd');
let trip = new Trip(car);
trip.start();
trip.end();
