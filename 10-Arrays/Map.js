// Map Kullanımı

const USERS = ["AYSE","MehMet","TugCE","AkSEL"];

// userName içinde orjinal isim kalsın,
// shortName icinde ilk harf buyuk. (A.)
// newName icinde ilk harf buyuk olsun

const NEW_USERS = USERS.map((e) => {
   
    return e.toLowerCase();
});

console.log(NEW_USERS);

// Normalde arrow func da return istemez evet ama obje eklerken sorun oluyor o yüzden bu örneklerde return kullanmak gerekli ve süslü parantez içine almak da lazım.
const USERS_OBJ = USERS.map((e) => {
    {
    return {userName: e, shortName: `${e[0].toUpperCase()}.`,newName:`${e[0].toUpperCase()+e.slice(1).toLowerCase()}`}
    }
});

console.log(USERS_OBJ);

