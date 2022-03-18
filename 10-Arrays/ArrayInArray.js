let items = [1, 2, 3, 4, 5];

// Array içinde Array:

let femaleUsers = ["Ayse", "Hulya", "Merve"];
let maleUsers = ["Ahmet", "Hasan", "Mehmet"];

items.unshift(femaleUsers);
items.push(maleUsers);

console.log(items);
console.log(items.length);
console.log(items[0][0]);

// Array içerisinden öğe ayırmak -> splice(pos,item?)

let newItems = items.splice(2, 4);
console.log(newItems);

// Array içerisindeki öğenin index bilgisini bulmak ->indexOf('value)
console.log(
    items.indexOf(2)
);

// Arrayleri Kopyalamak -> slice,[...ES6]
let copyItems = items; // böyle diyince yeni liste oluşmuyor referans tipli olduğu için gerçek liste zarar görüyor.
// işte atama yaparak kopyalanmadığı için slice kullanıcaz.
items = [1, 2, 3, 4, 5];

copyItems = items.slice(1, 3);
console.log(copyItems);

// ES6 ve sonrasında gelen kopyalama işlemi de var

let es6Items = [...items];
console.log(es6Items);

let allUsers = [...femaleUsers, ...maleUsers];
console.log(allUsers);

// Array içerisindeki bilgiyi String'e çevirmek -> toString(),join()
console.log(typeof (allUsers.toString()));
console.log(allUsers.join("--"));

console.log(allUsers.sort());

items = [6, 10, 20, 74, 250];
console.log("====================");

// Sıralama Algoritması da göstereyim.
items = items.sort((a, b) => { return a - b });

let names = "javascriptloops";
let newnames = names.split("");
let sortedNames = newnames.sort();
console.log(sortedNames)

