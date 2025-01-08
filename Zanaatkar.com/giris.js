
const loginButton = document.getElementById("show-login");
const registerButton = document.getElementById("show-register");
const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");

loginButton.addEventListener("click", () => {
    loginForm.classList.add("active");
    registerForm.classList.remove("active");
    loginButton.classList.add("active");
    registerButton.classList.remove("active");
});

registerButton.addEventListener("click", () => {
    registerForm.classList.add("active");
    loginForm.classList.remove("active");
    registerButton.classList.add("active");
    loginButton.classList.remove("active");
});
let adsoyad = "Resul Güngör"
let eposta = "123@eposta";
let sifre = "123";
function girisdogrulama() {
    var girilenemail = document.getElementById("login-email").value;
    var girilensifre = document.getElementById("login-password").value;
    if (girilenemail == eposta && girilensifre == sifre) {
        alert("Giriş Başarılı" + ad);
    } else {
        alert("Giriş Bilgileri Hatalı");
    }

}
function kayitekleme() {
    var kayitemail = document.getElementById("register-email").value;
    var kayitsifre = document.getElementById("register-password").value;
    var kayittekrarsifre = document.getElementById("register-password-confirm").value;
    var kayitadsoyad = document.getElementById("register-name").value;
    if(kayitsifre == kayittekrarsifre)
    {
        alert("Kayıt Başarılı");
        adsoyad = kayitadsoyad;
        eposta = kayitemail;
        sifre = kayitsifre;
    }
    else{
        alert("şifreler Uyuşmuyor");
        alert("kayıt başarısız"); 
    }
}