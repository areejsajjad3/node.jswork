 //************CREATING A MODULE *////////////

 var url = 'http://mylogger.io/log'

 function log(message) {
     //Send an HTTP request 
     console.log("1234 " + message)
 }

 //in our main module we want to use this logger module.
 //so we should make it accessable because this is a module.
 //we want to make it public

 module.exports.log = log;
 // module.exports.endpoint=url;
 //so to export a module we use module.export and to load a module we use require