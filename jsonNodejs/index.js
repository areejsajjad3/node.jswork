const fs = require('fs');

const bioData = {
    name: "areej",
    age: 23,
    school: "daaia inter college"
};

console.log(bioData.age);

const jsonData = JSON.stringify(bioData);
console.log(jsonData);


//to convert object to json we will use stringify

//this is undefined .. not possible
console.log(jsonData.school);

//to convert json to object we will use parse

const objData = JSON.parse(jsonData);
console.log(objData);
console.log(objData.age);



const jsonData1 = JSON.stringify(bioData);

fs.writeFile("json1.json", jsonData1, (err) => {
    console.log("done");
});

fs.readFile("json1.json", "utf-8", (err, data) => {

    console.log(data);
    const orgData = JSON.parse(data);
    console.log(orgData);
});