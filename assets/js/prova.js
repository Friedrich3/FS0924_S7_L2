//ESERCIZIO UNO

let btnLogin = document.getElementById("btnLogin");
let btnDelete = document.getElementById("btnDelete");

let timer = document.getElementById("timer");
let interval;

document.addEventListener("load", init())

function init() {

    btnLogin.addEventListener("click", function (e) {
        e.preventDefault();
        let userForm = document.getElementById("userForm");
        let inputName = document.getElementById("inputName").value;
        let userLogged = inputName.toUpperCase();
        localStorage.setItem(`user-${inputName.toUpperCase()}`, inputName);
        printUser(userLogged);
        interval = setInterval(function() {
            sessionTimer(userLogged);
        }, 1000);
        

        userForm.reset();
    });

    btnDelete.addEventListener("click", function (e) {
        e.preventDefault();
        localStorage.clear();
        let userLabel = document.getElementById("userLabel");
        userLabel.innerText = "Benvenuto! Inserisci il tuo nome:";

        clearInterval(interval);
    })

}


function printUser(element) {
    let userLabel = document.getElementById("userLabel");
    userLabel.innerText = `Benvenuto ${element}!`;
}


function sessionTimer(element) {
    if (!sessionStorage.getItem(`Tempo${element}`)) {
        console.log("entrato true");
        sessionStorage.setItem(`Tempo${element}`, 0);
    } else {
        console.log("entrato false");
        let tempo = parseInt(sessionStorage.getItem(`Tempo${element}`)) + 1;
        sessionStorage.setItem(`Tempo${element}`, tempo);
    }


    timer.innerText = `La sessione corrente è in corso da ${sessionStorage.getItem(`Tempo${element}`)} secondi!`;
}

function resetAllStorage(){
    sessionStorage.clear();
    localStorage.clear();
}

