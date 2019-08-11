const EventEmitter = require('events').EventEmitter;
const event = new EventEmitter();
event.on('kk',info =>{
    console.log('kk',info)
})
event.emit('kk','6666');
//cd src/js/design/
// node observer2.js      kk 6666
class Dog extends EventEmitter{
    constructor(name){
        super();
        this.name = name;
    }
}
let dd = new Dog('simi');
dd.on('bark',function(){
    console.log(this.name,'bark')
})
dd.emit('bark');

//stream 用到自定义事件
//const fs = require('fs');
// const readStream = fs.createReadStream('./data/file1.txt');
// let length = 0;
// readStream.on('start',function(chunk){
//     let len = chunk.toString().length;
//     console.log(length);
//     length += len;
// })
// readStream.on('end',function(){
//     console.log(length);
// })