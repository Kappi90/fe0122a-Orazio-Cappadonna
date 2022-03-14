let pulsante = document.querySelector(".btn");

let allValue = document.querySelectorAll(".form-control");

let errore = document.querySelector(".avviso");

pulsante.addEventListener("click", function (e) {

    formValido = true;

    e.preventDefault();


    let [nome, cognome, email, password, indirizzo, citta, cap] = allValue


    allValue.forEach(function (elemento) {
        if (elemento.value == "") {
            elemento.previousElementSibling.textContent = "* Campo obbligatorio"
            formValido = false;
        } else {
            elemento.previousElementSibling.textContent = ""
        }
    });

    emailUtenti.forEach(function (elemento) {
        if (elemento == email.value) {
          email.previousElementSibling.textContent = "* Questa mail è già presente";
          formValido = false;
        }
      });

    if (formValido) {
        var nuovoUtente = new utente(nome.value, cognome.value, email.value, password.value, indirizzo.value, citta.value, cap.value)
        salvaDati(nuovoUtente);
        history.pushState({}, '', "login.html") //Aggiungo la pagina alla cronologia   
        location.href = "login.html"
    } else {
        console.log("mancano dati")
    }

});


function salvaDati(aggiungi) {

    let user = localStorage.getItem('utentiSalvati')
    let dataBase = user ? JSON.parse(user) : []
    dataBase.push(aggiungi)
    localStorage.setItem('utentiSalvati', JSON.stringify(dataBase));
}

class utente {
    constructor(
        nome, cognome, email, password, indirizzo, citta, cap
    ) {
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.password = password;
        this.indirizzo = indirizzo;
        this.citta = citta;
        this.cap = cap;
    }

}

let utenti = localStorage.getItem("utentiSalvati");
let arrayUtenti = JSON.parse(utenti);
let emailUtenti = [];

arrayUtenti.forEach(function (elemento) {
  elemento.email;
  emailUtenti.push(elemento.email);
});