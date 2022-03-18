// Formlarla bilgi gönderirken form methoduna POST vermek daha güvenlidir.
// Tabikide https olunca aslında tam olarak güvenli oluyor ancak default tanımlı
// GET methodundan daha iyidir.

// Gönder butonuna bastığımızda sayfa her seferinde yenileniyor bunu engellemeye çalışalım.
// FORM SUBMIT

let formDom = document.querySelector("#userForm");
formDom.addEventListener('submit',formSubmit);


function formSubmit(event){
    event.preventDefault(); // default işlemi engelledik sayfa yenilenmedi ve console'a yazı yazdırabildik.
    console.log("islem gerçekleşti");
    
}


