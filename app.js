//function sayHello(name) {
//  console.log('Hello ' + name);
//}

//sayHello("Areej");

//LOADING A MODULE

//console.log(module);
//require( ) ..this function is not in browser but in node
// it takes the name and path of target module we want to load

//require('./logger') //because they are in same place so ./ we get here what we exported from logger module
//require function returns what we exported from require module.
//var logger = require('./logger')
//const logger = require('./logger')
//console.log(logger)
//logger.log('message')

//const path = require('path')
//var pathobj = path.parse(__filename)
//console.log(pathobj);
//const os = require('os');

//var totalMemory = os.totalmem();
//var freeMemory = os.freemem();

//console.log('Total Memory: ' + totalMemory);

//simplify the expression by using template string called ES6/ ES2015
//ECMAScript 6 : it define new features that should be added to javascript
//v8 engine in javascript implements alot of new features
//in ECMAScript there is a template string which helps us build string without  
//concetenation


//Before node we couldn't get this kind of information using javascript,
//becuase it only ran inside browser and we could work with window and document obj.
//console.log(`Total Memory: ${totalMemory}`);
//console.log(`Free Memory: ${freeMemory}`);


//const fs = require('fs');
//const file = fs.readdirSync('./');
//console.log(file);

//fs.readdir('./', function(err, files) {
//  if (err)
//    console.log('Error', err);
//else
//  console.log('Result', files);
//})

const EventEmitter = require('events')
const emitter = new EventEmitter();

//Register a listner
//emitter.on() is exactly same as emitter.addListner
//it takes 2 arguments first is name of event and second is callback func
//this function will be called when event is raised
emitter.on('messageLogged', (EventArr) => {
    console.log('Listner called', EventArr)
})

//we raised an event here nothing more
//before raising an event we need to register the listenere
//listener is a fucntion that will be called when event will be raised


emitter.emit('messageLogged', { id: 1, url: 'http://' })