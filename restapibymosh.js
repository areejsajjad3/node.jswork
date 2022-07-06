//const http = require("http");

//const server = http.createServer((req, res) => {

//    if (req.url == "/") {
//        res.write("Welcome to home page");
//        res.end();
//    } else if (req.url == "/api/courses") {
//        res.write(JSON.stringify([1, 2, 3]));
//        res.end();
//    }
//});
//server.listen(3000);
const Joi = require("joi"); // WHAT IS RETURNED IN THIS IS A CLASS //DEPENDENCY 1
const express = require("express"); ////DEPENDENCY 22
const app = express();

app.use(express.json()); // uses as middleware

//global define courses array
const courses = [{
        id: 1,
        name: "course1"
    },
    {
        id: 2,
        name: "course2"
    },
    {
        id: 3,
        name: "course3"
    },
]

app.get("/", (req, res) => { //yrl, callback/route handler

    res.send("hellp world!!!!!");
    res.end();
})


app.get("/api/post/:year/:month", (req, res) => { //yrl, callback/route handler

    // res.send(req.params);
    res.send(req.query);
    res.end();
})

//one url to get all courses array
app.get("/api/courses", (req, res) => { //yrl, callback/route handler

        //res.send([1, 2, 3]);
        res.send(courses);
        res.end();
    })
    //one url to get specific course array i-e ofcourse with id
app.get("/api/courses/:id", (req, res) => { //yrl, callback/route handler

    //res.send(req.params.id);
    //find is method for every array in js , in parameter we pass function
    const course = courses.find(c => c.id == parseInt(req.params.id))
    if (!course) {
        return res.status(404).send('The given id was not found for any course');
    }

    res.send(course);
    res.end();
})


//Handling post/create request
//no need to mention id in the route because we are adding

app.post("/api/courses", (req, res) => {

    //***************instead of schema object logic use func here *************************************/

    const { error } = validateCourse(req.body);
    if (error) {
        res.status(400).send(result.error.details[0].message);
        return;
    }

    //const schema = {
    //    name: Joi.string().min(3).required()
    //};
    //const result = Joi.validate(req.body, schema);
    //console.log(result);
    //input validation--never trust on user
    //if (!req.body.name || req.body.name.length < 3) 
    //if (result.error) {
    //Bad request =400
    //res.status(400).send("Name is required and should be minimum 4 length");
    //    res.status(400).send(result.error.details[0].message);
    //    return;
    // }
    const course = {
            id: courses.length + 1, //because adding new element to array of coures
            name: req.body.name,
        }
        //push is method for every array in js to push new element in array
    courses.push(course);
    res.send(course);

});

//for updating/put/patch ofcourse we need an id which needs improvment
app.put("/api/courses/:id", (req, res) => {

    //**************************look up courses**************************************
    //**************************if not existing, error 404***************************


    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) {
        return res.status(404).send('The given id was not found for course');
    }

    //----------------------------------------------------------------------------------------------

    //********************************validation***************************************
    //********************************if invalid, error 400- Bad request***************

    //const result = validateCourse(req.body);

    //object destructor -- because of this it is not required  --------------->const result = validateCourse(req.body);
    const { error } = validateCourse(req.body);

    // const schema = {
    //    name: Joi.string().min(3).required()
    //};
    //const result = Joi.validate(req.body, schema);
    //console.log(result);


    //input validation--never trust on user
    //if (!req.body.name || req.body.name.length < 3) 
    //if (result.error) {
    //Bad request =400
    //res.status(400).send("Name is required and should be minimum 4 length");
    if (error) {
        res.status(400).send(error.details[0].message);
        return;
    }

    //----------------------------------------------------------------------------------------------------

    //***********************************************update course if all fine*************************
    //***********************************************return course to client***************************

    //course is object which can access any of field like course.id or course.name just like in json index.js file
    course.name = req.body.name;
    res.send(course);

    //------------------------------------------------------------------------------------------------
});

app.delete("/api/courses/:id", (req, res) => {

    //step 1 is to check whether id is valid
    //if not return 404 error that means id not found
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) {
        return res.status(404).send('The given id was not found for course');
    }

    //if found then delete
    const index = courses.indexOf(course);
    courses.splice(index, 1); //means by splice we remove elem of arrat and by 1 we mean remove 1 elem of that index

    //now return the obj

    res.send(course);
});

//instead of validating one property of object course pass complete obj for validation
function validateCourse(course) {
    const schema = {
        name: Joi.string().min(3).required()
    };
    return Joi.validate(course, schema);
};
//Environment Variable
const port = process.env.PORT || 3000;

app.listen(port, () =>
    console.log(`Listening to port ${port}....`)
);