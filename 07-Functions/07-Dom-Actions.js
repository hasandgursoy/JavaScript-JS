
let greeting = document.querySelector("#greeting");
greeting.addEventListener("click",domClick);
greeting.addEventListener("mouseover",mouseOver);

function domClick() {
    console.log("Tiklandı.");
    console.log(this.innerHTML ="Tıklandığı için bilgi değişti.");
    this.style.color == "red" ? this.style.color ="black":this.style.color ="red";
    
}

function mouseOver() {
    this.style.color = "blue";
}
