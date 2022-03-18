// INPUT içindeki değeri(value) almak

let formDom = document.querySelector("#userForm");
formDom.addEventListener("submit",formSubmit);

function formSubmit(event) {
    event.preventDefault();
    console.log("İşlem gerçeklşti");
    let scoreInputDom = document.querySelector("#score");
    console.log(scoreInputDom.value);
    localStorage.setItem('scoreInput',scoreInputDom.value);
}

// Bilmemiz gereken çok önemli iki şey var.
// 1. Formlarda inputun name parametresi çok önemli olmassa olmaz
// 2. Formlar yapı olarak method'da get tanımlı biz bunu preventDefault() diyerek engelleyebiliyoruz.