
let names = prompt("Lütfen adınızı giriniz : ");

names = names[0].toLocaleUpperCase() + names.slice(1);


document.body.style.backgroundColor="gray"
let img = document.createElement("img");
img.src="1.png";
document.body.appendChild(img);

let sayHello = document.createElement("p");
sayHello.style.color = "orange";
sayHello.style.fontSize = "x-large";
sayHello.innerHTML  = `Merhaba ${names}! Hoş Geldin!`;
document.body.appendChild(sayHello);

let showDate = document.createElement("p");
showDate.style.color ="orange";
showDate.style.fontSize="x-large";
document.body.appendChild(showDate);
let date = new Date();
    let nDate = date.toString().split(' ');
    console.log(nDate)
function showTime(){
    let n = new Date().toLocaleString()
    let nowDate = nDate[4];
    showDate.innerHTML = `${n}`;
}

setInterval(() =>{showTime();},1000);

let newp = document.createElement("p");
newp.style.color = "orange";
newp.style.fontSize = "x-large";
newp.innerHTML = "Tarihinde Kodluyoruz Frontend Web Development Patikası Birinci Ödevi Yapıyorsun";
document.body.appendChild(newp);
