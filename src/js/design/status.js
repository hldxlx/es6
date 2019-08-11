//状态 红绿黄灯
class State{
    constructor(color){
        this.color = color;
    }
    handle(context){
        console.log(`turn to ${this.color} light`)
        context.setState(this)
    }
}
//主体
class Context{
    constructor(){
        this.state = null;
    }
    getState(){
        return this.state;
    }
    setState(state){
        this.state = state;
    }
}
let context = new Context();
let green = new State('green');
let red = new State('red');
green.handle(context)
console.log(context.getState());
red.handle(context)
console.log(context.getState());