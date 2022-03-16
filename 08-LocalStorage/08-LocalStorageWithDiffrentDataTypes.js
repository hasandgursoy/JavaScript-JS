
// Farklı Veri Tiplerini Saklama

let user = {username:"Hasan Gürsoy",isActive: true};


// Biz obje verisini normal şekilde local strorage'da tutamıyoruz bu yüzden json olarak tutmamız gerekiyor.
// JSON.stringify(user) diyerek obje verisini Json string'e dönüştürüyoruz.
localStorage.setItem('userInfo',JSON.stringify(user));

// Local Storage'daki veriyi console'a okumatmak için de ilk önce getItem > JSON.parse(user) diyerek halledebiliyoruz.

let userInfo = localStorage.getItem('userInfo');
userInfo = JSON.parse(userInfo);
console.log(userInfo);


// İkinci örnek

let items = [1,2,3,user];


localStorage.setItem('items',JSON.stringify(items));


let itemRead = localStorage.getItem('items');
itemRead = JSON.parse(itemRead);
console.log(itemRead);