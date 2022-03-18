// Formlarla Çalışmak : Bölüm Sonu Egzersizi

/*
1 : Formu Seç
2 : Input Bilgisini UL içerisine ekle
3 : Form  içindeki bilgiyi sıfırla
4 : Eğer forma bilgi girilmezse kullaniciyi uyar
*/

const alert = () =>`<div class="alert alert-warning alert-dismissible fade show" role="alert">
<strong>Holy guacamole!</strong> You should check in on some of those fields below.
<button type="button" class="close" data-dismiss="alert" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
</div>`;

let userFormDom = document.querySelector("#userForm");
userFormDom.addEventListener('submit', formHandler);

function formHandler(event) {
    event.preventDefault();
    const userName = document.querySelector("#username");
    const score = document.querySelector("#score");
    
    if (userName.value && score.value) { // eğer username value ve score value'su varsa eklesin.
        addItem(userName.value, score.value); // gönderdikden sonra sıfırladık.
        userName.value ="";
        score.value = "";
    }else{
        console.log('hatalı Giriş');
        let error = document.querySelector("#alert");
        error.innerHTML= alert();
    }

    
    
}

let userListDom = document.querySelector("#userList")
const addItem = (userName, score) => {
    let liDom = document.createElement("li");
    liDom.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
    liDom.innerHTML = `${userName} <span class="badge bg-primary rounded-pill">${score}</span>`;
    userListDom.append(liDom);
}

