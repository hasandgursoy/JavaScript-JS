let realCounter = 100;
let counter = document.querySelector("#counter");
let increase = document.querySelector("#increase");
let decrease = document.querySelector("#decrease");

counter.innerHTML = realCounter;


increase.addEventListener("click",clickEvent);
decrease.addEventListener("click",clickEvent);

function clickEvent() {
    console.log(this.id);
    this.id== "increase" ? realCounter+=1 : realCounter-=1;
    localStorage.setItem('realCounter',realCounter);
    console.log(localStorage.getItem('realCounter'));
    counter.innerHTML = realCounter;
}