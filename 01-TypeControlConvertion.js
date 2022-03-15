let price = 111;
let stringPrice = "111";
let hasPassword = true;

console.log(
    "price :", typeof (price)
);

console.log(
    "String Price :", typeof (stringPrice)
);

console.log(
    "has password :", typeof (hasPassword)
);

// string bilgileri int ve float'a dönüştürmek
// bunun için 2 yol var = parseInt ve Number
// parseInt içinde harf olsada çevirir.
// number ise sadece rakam varsa çevirir.
let number1 = "11";
console.log("number1:", typeof (parseInt(number1)));

let number2 = "11px";
number2 = parseInt(number2); // ilginç bir şekilde bunu number olarak tekrar düzenledi (px nereye gitti :D)
console.log("number2 :", number2, typeof (number2));

let number3 = "11"
number3 = Number(number3);
console.log("number3 :", number3, typeof (number3));

let number4 = "11.4px";
number4 = Number(number4);
console.log("number4 :", number4, typeof (number4));


// Number veri tipini String'e dönüştürmek.
let number5 = 55;
number5 = number5.toString();
console.log(number5, typeof (number5));