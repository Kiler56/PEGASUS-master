const profesor = document.getElementById("profesor");
const estudiante = document.getElementById("estudiante");
const logestudiante = document.getElementById("logestudiante");
const logprofesor = document.getElementById("logprofesor");
const registerform = document.querySelector("#registerform")
const registerbtn = document.querySelector("#registerbtn")
const loginbtn = document.querySelector("#loginbtn")

registerbtn.addEventListener("click", ()=>{
    logestudiante.classList.add("hidden");
    logprofesor.classList.add("hidden");
    registerform.classList.remove("hidden");
    
})

loginbtn.addEventListener("click", ()=>{
    registerform.classList.add("hidden");
    logprofesor.classList.remove("hidden");
    
})

profesor.addEventListener("click", ()=>{
    logestudiante.classList.add("hidden");
    logprofesor.classList.remove("hidden");
    
})

estudiante.addEventListener("click", ()=>{
    logprofesor.classList.add("hidden");
    logestudiante.classList.remove("hidden");
})

function login(){
    var email, pass 
    email = document.getElementById("email");
    pass = document.getElementById("password");
    if (email.value =="mbricenot@eafit.edu.co" && pass.value == "mario") {
        window.location = "../profesor.html";
    }else{
        alert("Correo y/o contraseña incorrectos");
    }
    return false;
}

function login2(){
    var email, pass 
    email = document.getElementById("email2");
    pass = document.getElementById("password2");
    if (email.value =="jecastrog@eafit.edu.co" && pass.value == "juan") {
        window.location = "../estudiante.html";
    }else{
        alert("Correo y/o contraseña incorrectos");
    }
    return false;
}

function register(){
    var email, pass,passconfirm,userE,userP, tipo; 
    email = document.getElementById("emailReg").value;
    pass = document.getElementById("passwordReg").value;
    passconfirm = document.getElementById("passwordConfirm").value;
    if (pass === passconfirm){
        userE = document.querySelector("#userE");
        userP = document.querySelector("#userP");
        if (userE.checked){
            tipo = "Estudiante"
        }else{
            tipo = "Profesor"
        }
        alert("se registro correctamente")
    } else{
        alert("Las contraseñas no coinciden")
    }
    return false;
}