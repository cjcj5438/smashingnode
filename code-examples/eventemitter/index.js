var EventEmitter=require('events').EventEmitter,a=new EventEmitter;
a.on('event',function () {
    console.log('emit called')
})
a.emit('event')