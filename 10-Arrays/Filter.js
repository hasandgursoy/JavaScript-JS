// Filter ile Array içerisinden sadece istenilen bilgilerin alınması

// 5 harfden fazla olanlar ?

const PRODUCTS = ["Mic","Cable","Speaker","Desktop PC","Server","Mouse","Keyboard"];
const NEW_PRODUCTS = PRODUCTS.filter(item => item.length > 5);
console.log(NEW_PRODUCTS);

// Aktif Kullanicilar

const USERS = [
    {fullname:"Ayse Sumer",isActive : false},
    {fullname: "Ahmet Urgan",isActive:true},
    {fullname: "Ahsen Basar",isActive:true},
    {fullname: "Aksel Durmaz",isActive:false},
]

const ACTIVE_USERS = USERS.filter(filter => filter.isActive === true);
console.log(ACTIVE_USERS);