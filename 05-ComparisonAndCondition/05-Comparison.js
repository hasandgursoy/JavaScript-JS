// Karşılaştırma Operatörleri

let price = "100";

// ( == ) Sadece değer eşitse tür önemli değil

console.log(price ==1);
console.log(price == 100); // Buna baktı ve true dedi bu dil tuhaf dil :D
console.log(parseInt(price) == 100); 
console.log("==============================================================")

// ( === ) Hem değer Hem tür eşitse 

console.log(price === 100); // Şimdi oldu işte o yüzden her zaman bunu kullanalaım.
console.log(Number(price) ===100);

// ( !== ) Hem değer Hemde tür eşit değilse

// Geri kalan operatörleri yazmicam (<, > >= ,<=,&&,||,!)
