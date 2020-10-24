
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



    var btnRegister = document.getElementsByClassName("btn-register")[0];
    btnRegister.addEventListener('click' , ()=>{
        
        var username = document.getElementById('username').value.trim()
        var password = document.getElementById('password').value.trim()

            var registrationObj = {
                username: username,
                password: password
            }


            fetch(`/reg?info=${JSON.stringify(registrationObj)}`).then((response)=>{

                

               response.json().then((data)=>{
                   console.log(data)
                if (data.status === 'Unsuccessful'){
                    alert('Username already exsits')
                }else{
                    alert('Registration successful')
                    window.location.href = "http://localhost:3000"
                    
                }
               })
                

        })

        });


    var btnLogin = document.getElementsByClassName("btn-login")[0];

    btnLogin.addEventListener('click' , ()=>{
        var username = document.getElementById('username').value.trim()
        var password = document.getElementById('password').value.trim()

        var loginObj = {
            username: username,
            password: password
        }

        fetch(`/login?info=${JSON.stringify(loginObj)}`).then((response)=>{
           
            response.json().then((data)=>{
                if (data.status === 'Unsuccessful'){
                    alert('Invaid Username/Password')
                }else{
                    alert('Logged In Successfully')
                    window.location.href = "http://localhost:3000/form.html"
                    
                }
               })


           
         })


    })