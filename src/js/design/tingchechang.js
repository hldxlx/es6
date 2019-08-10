class Car{
    constructor(num){
        this.num = num;
    }
}
class Park{
    constructor(floors){
        this.floors = floors || [];
    }
    in(car){
        const info = this.camera.shot(car);
        const i = parseInt(Math.random() * 100 % 100);
        const place = this.floor[0].places[i];
        place.in();
        info.place = place;

        this.carList[car.num] = info;

    }
    out(car){
        const info = this.carList[car.num];
        const place = info.place;
        place.out();
        this.screen.show(car,info.inTime);
        delete this.carList[car.num]

    }
    emptyNum(){
        this.floors.map(floor =>{
            console.log(floor.emptyN())
        })
    }
}
class Floor{
    constructor(index,places){
        this.index = index;
        this.places = places || [];
    }
    emptyNum(){
        let num = 0;
        this.places.forEach(p =>{
            if(p.empty){
                num = num +1
            }
        })
        return num;
    }
}
class Place{
    constructor(){
        this.empty = true;
    }
    in(){
        this.empty = false;
    }
    out(){
        this.empty = true;
    }
}
class Camera{
    shot(car){
        return {
            num:car.num,
            inTime:Date.now()
        }
    }
}
class Screen{
    show(car,inTime){
        console.log('车牌号',car.num);
        console.log('停车时间',Date.now() - inTime);
    }
}