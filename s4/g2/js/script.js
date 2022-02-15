var nome = 'Orazio';

{
    let nome = 'Aleksanderi';
    console.log(nome);

    let cognome = 'Cappadonna';
    console.log(cognome);
}

console.log(nome);
//console.log(cognome); //Darà errore

//Uso di constant
var pet = "gatto";
console.log(pet);

{
    const pet = "cane";
    console.log(pet);

    const pet2 = "coniglio";
    console.log(pet2);
}

console.log(pet);  //Scriverà gatto

/*
const nome = 'Gianni'; //Darà errore, var dichiarata in precedenza
console.log(nome);
*/


const nome1 = 'Gianni';
console.log(nome1);


//Var booleana
var patente = true;
console.log(patente);

function checkUser(){
    var email = document.getElementById("email").value;
    var psw = document.getElementById("password").value;

    if(email == 'info@esempio.it' && psw == 'password'){
        console.log('loggato')
        return true;
    }else{
        console.log('escluso')
        return false;
    }

}

//Somma
var numero = 10;
var numero2 = 6;
document.getElementById('somma').innerHTML = (numero + numero2);

//Sottrazione
var numero = 15;
var numero2 = 8;
document.getElementById('sottrazione').innerHTML = (numero - numero2);

//Concatenazione con booleano
nome = 'Tizio';
cognome = 'Rossi';
anni = '30';
patente = false;
document.write("Il suo nome è: " + nome + " il cognome è: " + cognome + " di anni: " + anni + " ha la patente: " + patente);


