let RagistrationBtn=document.querySelector(".u-registration")
let LoginBtn=document.querySelector(".u-login")
let RegistrationPage=document.querySelector(".USER")
let cross = document.querySelector(".u-cross");
let cross1=document.querySelector(".user-login-cross-1")
let LoginPage=document.querySelector(".user-login-div")


RagistrationBtn.addEventListener("click",ShowupRgispage)
cross.addEventListener("click", removeRagispage);

LoginBtn.addEventListener("click", ShowupLoginpage);
cross1.addEventListener("click", removeRagispage);



function ShowupRgispage() {
    RegistrationPage.classList.add("user-reg-page")
}

function removeRagispage() {
    RegistrationPage.classList.remove("user-reg-page");
    LoginPage.classList.remove("show-user-LoginPage")
}
function ShowupLoginpage() {
    LoginPage.classList.add("show-user-LoginPage");
}