// Liste içerisindeki son elemana ulaşmak veya eleman eklemek

let lastChild = document.querySelector("ul#list>li:last-child");
console.log(lastChild)
lastChild.innerHTML ="Son öğe değişti";

let firstChild = document.querySelector("ul#list>li:first-child");

let ulDom = document.querySelector("ul#list");

let liDom = document.createElement('li');

liDom.innerHTML = "Kendi oluşturduğumuz öğe";

// ulDom.append(lidom) = en sona ekler.
// ulDom.prepend(lidom) = en başa ekler.

ulDom.append(liDom);
ulDom.prepend(liDom);