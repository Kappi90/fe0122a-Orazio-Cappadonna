//RICHIAMO DATI DAL LOCAL STORAGE - EMAIL
let utenti = localStorage.getItem("utentiSalvati");
let arrayUtenti = JSON.parse(utenti);

//DEFINISCO LE VARIABILI
let inputMail = document.querySelector("#exampleInputEmail1")
let inputPass = document.querySelector("#exampleInputPassword1")
let bottone = document.querySelector("button")

bottone.addEventListener("click", function (evento) {
    let logValid = false
    evento.preventDefault();

    //Questo metodo sostituiscce tutti i cicli forEach 
    let utenteTrovato = arrayUtenti.find(user => user.email == inputMail.value && user.password == inputPass.value);

    if (utenteTrovato != undefined) {
        alert('ok')
        logValid = true
        history.pushState({}, "", "elencoUtenti.html");
        location.href = "elencoUtenti.html";
    } else {
        inputMail.previousElementSibling.textContent = "* Email errata"
    }

});