const fs = require("fs");

fs.writeFileSync("readtext.txt", "My name is areej");

//above data will be overwritten

fs.writeFileSync("readtext.txt", "My name is areej sajjad");

//to add new data with old data

fs.appendFileSync("readtext.txt", "my father name is sajjad ahmed");

//to readfile 
// node.js adds additional data called buffer when u read file data which is use to store binary data
const buff_data = fs.readFileSync("readtext.txt");
console.log(buff_data);

//<Buffer 4d 79 20 6e 61 6d 65 20 69 73 20 61 72 65 65 6a 20 73 61 6a 6a 61 64 6d 79 20 66 61 74 68 65 72 20 6e 61 6d 65 20 69 73 20 73 61 6a 6a 61 64 20 61
//68 ... 3 more bytes>

org_data = buff_data.toString();
console.log(org_data);

const buff_data1 = fs.readFileSync("readtext.txt", "utf-8")
console.log(buff_data1);


//to rename file
fs.renameSync("readtext.txt", "newreadtext.txt");

///******************************Async ***********************/
fs.writeFile("areejtext.txt", "My name is areej", (err, data) => {
    console.log("Data written into file");
    console.log(err);


});

fs.appendFile("areejtext.txt", "and what are you doing here?", (err) => {
    console.log("Data appended in  file");
    console.log(err);

})

//this will take 2 arguments
fs.readFile("areejtext.txt", "utf-8", (err, data) => {
    console.log("Data read from  file");
    console.log(data);
    console.log(err);
});