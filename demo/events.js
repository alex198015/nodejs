const EventEmitter = require('events');


//
// const emitter = new EventEmitter();
//
// emitter.on('anything', (data) => {
//     console.log(data)
// })
//
// emitter.emit('anything', {a: 1, b: 4});
//
// setTimeout(() => {
//     emitter.emit('anything', {c: 1, n: 4});
// },5000)

class Dispatcher extends EventEmitter{
    subscribe(eventName, cb){
    console.log('![Subscribe...]')
        this.on(eventName, cb)
    }
    dispatch(eventName, data){
    console.log('[Dispatching...]')
        this.emit(eventName, data)
    }
}

const dis = new Dispatcher()

dis.subscribe('aa', data => {
    console.log(data)
})

dis.dispatch('aa', {a: 55})