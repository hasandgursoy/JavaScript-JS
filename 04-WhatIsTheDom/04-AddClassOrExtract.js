// CSS class eklemek veya Cıkarmak


let greeting = document.querySelector("#greeting");

// Class Ekleme

greeting.classList.add("text-primary");
console.log(greeting.classList);

greeting.classList.add("title");
greeting.classList.add("new-info","second-class","third-class");

// Class Çıkarma

greeting.classList.remove("text-primary");
greeting.classList.remove("title","new-info","second-class","third-class");



