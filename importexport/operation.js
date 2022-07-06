//const add1 = require("./index")
//const name = require("./index")
//const obj = require("./index");

//console.log(obj);
//output
//{ name1: 'areej', add1: [Function: add], sub1: [Function: sub] }


//jis naam sy module ko export kiya h property laga kar wohi naam use karna hai yaha usko access karny k liye
//console.log(obj.add1(5, 10));
///console.log(obj.name1);
//console.log(obj.sub1(5, 10));

//console.log(add1(5, 100));

//*********or either do object destructing method */
const { add1, sub1 } = require("./index");
console.log(add1(5, 10));
//console.log(name1);
console.log(sub1(5, 10));