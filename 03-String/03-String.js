let email = "hasangursoy@gmail.com"
let firstName = "hasan";
let lastName = "gursoy";

// String Karakter Sayisı  -> lenth
console.log(email.length);

// Ilk Karakteri Bulmak -> [0] ve .charAt()

console.log(firstName[0]);
console.log(firstName.charAt(1));

// buyuk harf / kucuk harf

firstName =firstName[0].toLocaleUpperCase()+firstName.substring(1);
console.log(firstName);
lastName = lastName[0].toUpperCase() + lastName.substring(1);
console.log(lastName);

// String içinde istediğimiz bilgiyi aramak ve yerini bulmak için -> search()

let arananBilgi = email.search('@');
console.log(arananBilgi);
email.replace('@',"/");
console.log(email.replace("@","/"));
console.log(email);
email = email.replace("@","/");
console.log(email);

// Belli bir yere kadar al -> slice() 

let DOMAIN = email.slice(arananBilgi+1);
console.log(DOMAIN);

console.log(DOMAIN.indexOf('.'));
let Uzanti = DOMAIN.slice(6);
console.log(Uzanti);

// Bilgiyi değiştir -> replace()
email = email.replace('gmail.com','kodluyoruz.org');
email = email.replace("/","@");
console.log(email);

// İstediğim bilgi varmı -> includes()
// true false döner.

console.log(email.includes('dkfhsd'));
console.log(email.includes('@'));


// İstediğim bilgiyle başladı mı ? bitti mi ?  -> startsWidth(), endsWidth()

console.log(email.endsWith("@"));
console.log(email.startsWith("h"));

// İlk harflerini Büyük yapmak  -> substring() yada slice()

let fullName =`${firstName[0].toUpperCase()+ firstName.substring(1)} ${lastName[0].toUpperCase()+lastName.substring(1)}`;
console.log(fullName);
let otherFullName = `${firstName[0].toLowerCase()+firstName.slice(1)} ${lastName[0].toLowerCase()+lastName.slice(1)}`;
console.log(otherFullName);

// Metinleri birleştirme -> Concat

let allKnowledge = `${firstName.concat(" ",lastName," ",email)}`
console.log(allKnowledge);

// Split 

let parcalanmis = allKnowledge.split(" ");
console.log(parcalanmis);