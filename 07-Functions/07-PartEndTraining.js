
let counterDom = document.querySelector("#number");
let increaseDom = document.querySelector("#increase");
let decreaseDom = document.querySelector("#decrease");

increaseDom.addEventListener("click",() => {
    let newCount = Number(counterDom.innerHTML) + 1;
    counterDom.innerHTML = newCount.toString();
    console.log(this.id);
});

decreaseDom.addEventListener("click",() => {
    counterDom.innerHTML = (Number(counterDom.innerHTML) -1).toString();
    console.log(this.id);
});



