aggiungiUtenti();

function aggiungiUtenti() {
    //Richiamo i dati dal local storage
    let controlloUtente = localStorage.getItem("utentiSalvati");
    let arrayUtenti = JSON.parse(controlloUtente);
    var table = document.getElementById('contenitore');

    //Creo il ciclo per aggiungere tr,td all'interno della tabella con i dati degli utenti registrati
    arrayUtenti.forEach(function (element) {

        //Creo variabile per creare gli elementi tr
        var tr = document.createElement('tr');

        //Aggiungo il tr creato nella tabella
        table.append(tr);

        //Creo un ciclo for in per inserire nella tabella tutti i nuovi tr che verranno creati
        for (utentiSalvati in element) {

            //Creo una variabile per creare gli elementi td
            var td = document.createElement('td');

            //Aggiungo il td creato al tr
            tr.append(td)

            //Inserisco nell'HTML gli utenti registrati
            td.innerHTML = element[utentiSalvati]
        }

        var cancella = document.createElement("button")
        cancella.classList.add('cancellaUtente')
        cancella.innerHTML = 'elimina'
        tr.append(cancella)
        cancella.addEventListener('click', function () {
            tr.remove();
            eliminaUtente();
        })
        /*
                var nascondi = document.createElement("button")
                nascondi.classList.add('nascondiPassword')
                nascondi.innerHTML = 'nascondi'
                tr.append(nascondi)*/



    });
}

var nascondi = document.getElementById('mostraPass')
var tde = document.querySelectorAll('td:nth-child(4)');
nascondi.addEventListener('click', function () {

    if(tde[0].style.visibility == 'visible'){
        tde[0].style.visibility = 'hidden'
    }else{
        tde[0].style.visibility = 'visible'
    }

   /* tde[0].style.visibility = 'visible';
     tde[1].style.visibility = 'visible';
     tde[2].style.visibility = 'visible';
     tde[3].style.visibility = 'visible';
     tde[4].style.visibility = 'visible';*/
    console.log(tde)
})

function eliminaUtente(user) {
    let ls = localStorage.getItem('utentiSalvati')
    let db = JSON.parse(ls);
    let indiceElemento = db.find(function (el) {
        return utentiSalvati.id == el.id
    })
    var indexElement = db.indexOf(indiceElemento)
    db.splice(indexElement, 1)
    localStorage.setItem('utentiSalvati', JSON.stringify(db))
}