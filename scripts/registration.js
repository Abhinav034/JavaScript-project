
function onToggle(obj){
    var val = obj.innerText;

    var btnLogin = document.getElementsByClassName("btn-login")[0];
    var loginText = document.getElementById("login-text");
    var btnRegister = document.getElementsByClassName("btn-register")[0];
    var registerText = document.getElementById("registration-text");

    switch(val){
        case "Create one":

            btnLogin.classList.add('hidden');
            loginText.classList.add('hidden');
            btnRegister.classList.remove('hidden');
            registerText.classList.remove('hidden');

            break;
        case "Log In":

            btnLogin.classList.remove('hidden');
            loginText.classList.remove('hidden');
            btnRegister.classList.add('hidden');
            registerText.classList.add('hidden');
            break;
    }
}
function onLoginText(){
    var btnLogin = document.getElementsByClassName("btn-login")[0];
    var loginText = document.getElementById("login-text");
    btnLogin.style.display = "none";
    loginText.style.display = "none";
}
function onRegisterText(){
    var btnRegister = document.getElementsByClassName("btn-register")[0];
    var registerText = document.getElementById("registration-text");
    btnRegister.style.display = "none";
    registerText.style.display = "none";
}