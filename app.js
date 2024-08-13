let doctor = document.querySelector(".doctor");
let user = document.querySelector(".user");
let FordocReg=document.querySelector(".doctor-regis-login")
let ForuserReg = document.querySelector(".user-regis-login");
let shoW = document.querySelector(".input-form");
let closE = document.querySelector(".cross");
let body = document.querySelector("body");
let doctorregistration = document.querySelector(".d-registration");
let form = document.querySelector(".AB");
let doctorLoginPage=document.querySelector(".d-login")
let docLoginPage=document.querySelector(".ab")
let docLoginCross = document.querySelector(".doc-login-cross-1");


doctor.addEventListener("mouseover", showDocReg);
user.addEventListener("mouseover", showUserReg);

body.addEventListener("click", hideDocReg,hideUserReg);
body.addEventListener("click", hideUserReg);


doctorregistration.addEventListener("click",showDoctorRegistrationPage)
doctorLoginPage.addEventListener("click", showDoctorLoginPage);

closE.addEventListener("click", closeRegistrationPage);
docLoginCross.addEventListener("click",closeRegistrationPage)

function showDocReg() {
    FordocReg.classList.add("showDocReg");
}
function hideDocReg() {
    FordocReg.classList.remove("showDocReg");
}
function showUserReg() {
    ForuserReg.classList.add("showUserReg");
}
function hideUserReg() {
    ForuserReg.classList.remove("showUserReg");
}
function showDoctorRegistrationPage() {
    form.classList.add("doctor-ragistration-page");
}

function closeRegistrationPage() {
    form.classList.remove("doctor-ragistration-page");
    docLoginPage.classList.remove("show-Doc-LoginPage");
}

function showDoctorLoginPage() {
    docLoginPage.classList.add("show-Doc-LoginPage");
}