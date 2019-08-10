class Car{
    constructor(num){
        this.num = num;
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
class Park{
    constructor(floors){
        this.floors = floors || [];
        this.carList = {};//存储摄像头拍摄返回的车辆信息

    }
    in(car){

    }
    out(car){

    }
}
