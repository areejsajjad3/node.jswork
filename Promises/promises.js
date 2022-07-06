//har promise output daita hai either resolved form mai either reject form mai jo hum thena nd catch ki help sy cater karty hain
let p = new Promise((resolve, reject) => {

    let a = 1 + 1;
    if (a == 13)
        resolve("sucess");
    else
        reject("failed");
});

//then is going to be execute when promise is resolved
//catch when promise is rejected

p.then((message) => {
    console.log(`this is then ${message}`);

}).catch((message) => {
    console.log(`this is catch ${message}`);
});

const userLeft = false;
const userwatchcatmeme = false;

function watchtutorialPromise() {
    return new Promise((resolve, reject) => {
        if (userLeft) {
            reject({
                name: "User left",
                message: " :("
            })
        } else if (userwatchcatmeme) {
            reject({
                name: "User watching cat meme not tutoial",
                message: ":((("
            })
        } else {
            resolve("Thumbs up tutoial watched");
        }
    })
}

watchtutorialPromise().then((message) => {
    console.log(`this is resolved promise response :))) ${message}`);

}).catch((error) => {
    console.log(`this is rejected promise response :((( ${error.message}`);
});

//when we add a async keyword at the start of function we want that func to return a promise rather then a value
//by await we means wait for someties