let items = [10, 20, 30, 40];

// Array Sona öğe ekleme -> push()

items.push(40);
console.log(items);

// Array Başa öğre ekleme -> unshift()

items.unshift(100);
console.log(items);

// Array sondaki öğeyi çıkarmak -> pop()

// Array baştaki öğeyi çıkarmak -> shift()

/*
splice() metot
splice() metot diziye hem eleman eklemek için hem de eleman 
silmek için kullanılır. Metodun ilk parametresi işlemin yapılacağı 
index numarasını, ikinci parametre ise kaç elemanın silineceğini belirtir.
*/