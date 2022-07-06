//not anonmouys function
function sum(a, b) {
    const c = a + b;
    return c;
}

console.log(sum(10, 20));


//not anonmouys function because function has no name 
var sum = function(a, b) {
    const c = a + b;
    return c;
}

console.log(sum(10, 20));

//callback functions
//calling one function as an argument in another function
//so that first function is executed first
//javascript is event friven language
//it doesn't wait for response from one function and executes another function
//we don't want this scenrio always

const perOne = (friend, callfriend) => {
    console.log(`I am busy with ${ friend}. I will call you later`);
    callfriend(); //call back function
}
const perTwo = () => {
    console.log(`I called you later`);

}
perOne("Areej", perTwo);


//Event loop + Synchronous /Asychronous concepts
const func2 = () => {
    setTimeout(() => {
        console.log(`func 2 is here`);
    }, 3000);
}

const func1 = () => {
    console.log(`func 1 is here`);
    func2();
    console.log(`func 1 is ended`);
}

func1();