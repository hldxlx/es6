const EventEmitter = require('events').EventEmitter;
const event = new EventEmitter();
event.on('kk',info =>{
    console.log('kk',info)
})
event.emit('kk','6666');
//cd src/js/design/
// node observer2.js      kk 6666