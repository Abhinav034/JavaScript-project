//validate username field
// const database = require('./public/scripts/database.js')

function validateLoginForm(){
    var btnLogin = document.getElementsByClassName("btn-login")[0];

    //registration
    if(btnLogin.classList.contains("hidden")){
        var username = document.forms["login-register"]["username"].value;
        // alert(username);
        
        // var arr = database.read("userAccounts");
        // alert(arr);

        return true;
    } 
    //login
    else{
        alert("login");
    }
}