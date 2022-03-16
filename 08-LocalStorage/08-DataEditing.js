/*
LocalStorage ile Veri Eklemek, Düzenlemek ve Silme

Local Storage Nedir?
Web Storage terimi web sayfasında yapılan değişikliklerin kaydının
tutulmasına karşılık gelmektedir. Örneğin bir web sayfasında kayıt formu
doldurulurken sayfanın kapatıldığını veya başka sayfaya geçtiğimizi varsayalım.
Kayıt form sayfasına döndüğümüzde kayıtların kaybolması sinir bozucu bir durum olabilir.
Bu durumun önüne geçmek için cookie yani çerez dediğimiz sistemlerle geçici veriler saklanabilmekteydi.
Ancak bu çerez dosyalarının hem 4 kb ile sınırlı olması hem de üçüncü şahıslar tarafından kolay
erişilebiliyor olması Local Storage teriminin yaygınlaşmasına neden olmuştur.
HTML 5 ile birlikte web sayfaları veriyi yerel (local) veya tarayıcı (browser) içinde saklayabilir hale gelmiştir.
Bu sayede eskiden cookie’ler ile yaptığımız işlemler daha güvenli ve daha hızlı şekilde yapılabilir hale gelmiştir. 
Daha hızlı çalışmasının nedeni artık veriler her sunucu istediğinde değil, sadece çağırıldıklarında gelmektedir.
Veriler key/value şeklinde saklanmaktadır ve web sayfaları sadece kendi oluşturdukları verilere erişebilmektedir.
Birçok tarayıcı Web Storage API yapısıyla uyumlu şekilde çalışabilmektedir.

Nasıl Kullanılır?
HTML 5 ile tarayıcılar iki tane yerel kayıt türünü desteklemektedir.

-localStorage
-sessionStorage
Bu iki kayıt türü arasındaki en temel fark localStorage kayıtları zaman aşımı olmaksızın
tutarken sessionStorage kayıtları oturum sonlanana kadar ya da veri kaybolana kadar tutmaktadır.
Ancak LocalStorage ve SessionStorage kullanıcı tarafından kolayca okunabilir ve değiştirilebilir,
bu sebeple uygulama içerisindeki güvenlik ile ilgili verilerin depolanmaması gerekmektedir.
LocalStorage ve SessionStorage sayfalar arasındaki ve client işlemleri arasındaki hassas olmayan
verilerin taşınmasında tercih edilmektedir.
 */

// (f12)= Aplication kısmından buluyoruz. 
localStorage.setItem("mycat","Tom");
console.log( localStorage.getItem("mycat"));
localStorage.removeItem("mycat");