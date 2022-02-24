let bottone = document.getElementById('bottone');

bottone.addEventListener('click', function () {
    //Selezione e lettura degli elementi
    let aggiunta = document.getElementById('aggiunta').value;
    let lista = document.getElementById('lista');

    //Creiamo l'elemento
    let li = document.createElement('li');
    li.innerHTML = aggiunta;

    li.addEventListener('click', function () {
        li.remove();
        rimuoviElementoDaDb(li);
    })

    lista.append(li);

    document.querySelector('#aggiunta').value = '';

    salvaDatiNelDb(aggiunta);
})

function creaHTML() {

    let elementiSalvati = JSON.parse(localStorage.getItem('elementiSalvati'))

    elementiSalvati.forEach(function (elemento) {

        let li = document.createElement('li')
        li.innerHTML = elemento

        li.addEventListener('click', function(){
            li.remove();
            rimuoviElementoDaDb(li);
        })

        lista.append(li)
        
    });

}
creaHTML();

//con questa funzione salvo e aggiorno i dati in localstorage
function salvaDatiNelDb(aggiunta) {

    var ls = localStorage.getItem('elementiSalvati')

    var db = ls ? JSON.parse(ls) : [];
    db.push(aggiunta)

    localStorage.setItem('elementiSalvati', JSON.stringify(db));
}

//con questa funzione rimuovo un elemento da localstorage
function rimuoviElementoDaDb(el) {

    let ls = localStorage.getItem('elementiSalvati')
    let db = JSON.parse(ls)

    let indiceElemento = db.indexOf(el.innerHTML)

    db.splice(indiceElemento, 1)

    localStorage.setItem('elementiSalvati', JSON.stringify(db))
}