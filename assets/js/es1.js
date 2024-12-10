//ESERCIZIO UNO

let btnLogin = document.getElementById("btnLogin");
let btnDelete = document.getElementById("btnDelete");

//ESERCIZIO DUE
let timer = document.getElementById("timer");


document.addEventListener("load" , init())

function init(){
    
    //ES 2
    setInterval(sessionTimer, 1000);


    loginButton();
    delButton();

    
}

function loginButton(){
    btnLogin.addEventListener("click", function(){
        let userForm = document.getElementById("userForm");
        let inputName = document.getElementById("inputName").value;
        let userLogged = inputName.toUpperCase();
        localStorage.setItem(`user-${inputName.toUpperCase()}`, inputName);
        printUser(userLogged);

       // userLogged = localStorage.getItem(`user-${inputName.toUpperCase()}`);
        
        userForm.reset();
    });
}

function delButton(){
    btnDelete.addEventListener("click", function(e){
        e.preventDefault();
        localStorage.clear();
        let userLabel = document.getElementById("userLabel");
        userLabel.innerText = "Benvenuto! Inserisci il tuo nome:";
    })
}

function printUser(element){
    let userLabel = document.getElementById("userLabel");
    userLabel.innerText = `Benvenuto ${element}!`;
}



//ESERCIZIO 2

function sessionTimer(){
    if(sessionStorage.getItem("Tempo")=== "NaN"){
        sessionStorage.setItem("Tempo", 0)
    }
    let tempo = parseInt(sessionStorage.getItem("Tempo")) + 1;
    sessionStorage.setItem("Tempo", tempo);
    
    
    timer.innerText = `La sessione corrente è in corso da ${sessionStorage.getItem("Tempo")} secondi!`;
}