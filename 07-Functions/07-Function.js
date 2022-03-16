
function hello() {
    console.log("Merhaba");
}

function helloWorld() {
    console.log("Hello World");
}

const sayHi = () => {
    return () => {
        console.log("selam");
    }
}

const sayHHi = function () {
    console.log("SELAAAAM");
}();


hello(); // invoke
helloWorld();
sayHi()();


// Default Parametre Atamak

let hName = document.querySelector("#baslik");


function greetigns(firstName, lastName) {

    if (firstName !== NaN && lastName !== NaN) {
        return hName.innerHTML = `${firstName} ${lastName}`;

    }

}

greetigns("Hasan", "Gürsoy");


// Arrow Function

const helloFunc = (firstName) => {
    console.log(`Merhaba ${firstName}`);
}

helloFunc("Hasan");

const helloFunc2 = firstName => console.log(`Merhaba ${firstName}`);
helloFunc2("Hasan");

