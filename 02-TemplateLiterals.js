let username = "hasan";
const DOMAIN = "kodluyoruz";

let email = username + "@" + DOMAIN;
console.log("Merhaba ", username, " sitemize hoş geldin ", " mail adresin :", email);

let info = `Merhaba ${username}, sitemize hoş geldin! Mail adresin ${email}`;
let time = `Takvim : ${new Date().getDate()+"/"+new Date().getDay()+"/"+new Date().getFullYear()}`;
console.log(info);
console.log(time);

