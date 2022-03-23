//Dichiaro variabili globali
var regioni = document.querySelector('#regioni'); //Seleziono il select della regione
var province = document.querySelector('#province'); //Seleziono il select della provincia
var regSel = document.querySelector('#reg-sel'); //Seleziono dove inserire il nome della regione
var provSel = document.querySelector('#prov-sel'); //Seleziono dove inserire il nome della provincia
var imgRegioni = document.querySelector('#img-reg'); //Seleziono dove inserire l'immagine della regione
var imgProvince = document.querySelector('#img-prov'); //Seleziono dove inserire l'immagine della provincia
//Fetch delle regioni e associo funzioni per riempire le option delle regioni e aggiungo eventlistener al change
fetch('regioni.json')
    .then(function (response) { return response.json(); })
    .then(function (risposta) {
    aggiungiRegioni(risposta);
    regioni.addEventListener('change', aggiungiProvince); //Aggiungo le province al select appena seleziono la regione
    province.addEventListener('change', aggiungiHtml); //Aggiung il nome della regione e provincia selezionata e aggiungo pure l'immagine
});
//Aggiungo le option al selettore regioni
function aggiungiRegioni(p) {
    for (var i = 0; i < p.length; i++) {
        var option = document.createElement('option');
        option.setAttribute('value', p[i].prov_regione);
        option.innerText = p[i].prov_regione;
        regioni.append(option);
    }
}
//Funzione che riempie le option delle province al change del selettore regioni
function aggiungiProvince() {
    //Dichiaro delle variabili
    var opt = document.querySelector('#province option');
    var arrProvince = [];
    var selezionato = regioni.value;
    //Fetch del json delle province, con un ciclo for riempio l'array con le province della regione selezionata
    fetch('province.json')
        .then(function (response) { return response.json(); })
        .then(function (risposta) {
        var option = document.createElement('option');
        for (var i = 0; i < risposta.length; i++) {
            if (risposta[i].prov_reg == selezionato) {
                arrProvince.push(risposta[i].prov_nome);
            }
            else {
                arrProvince.splice(0, risposta[i].prov_nome); //Serve per aggiornare l'array e le option del selettore ad ogni change
                province.remove(opt);
                option.setAttribute('value', 'none');
                province.append(option);
            }
        }
        arrProvince.forEach(function (element) {
            var option = document.createElement('option');
            option.setAttribute('value', element);
            option.innerText = element;
            province.append(option);
        });
    });
    /*
        //Reset dei campi al change della regione selezionata
        regSel.innerText = ''
        provSel.innerText = ''
        imgRegioni.setAttribute('src', '')
        imgProvince.setAttribute('src', '')*/
}
function aggiungiHtml() {
    var selezionato = province.value; //Prendo il valore della provincia selezionata
    fetch('province.json')
        .then(function (response) { return response.json(); })
        .then(function (risposta) {
        for (var i = 0; i < risposta.length; i++) {
            if (risposta[i].prov_nome == selezionato) {
                //Aggiungo il nome della regione e della provincia selezionata
                regSel.innerText = risposta[i].prov_reg;
                provSel.innerText = risposta[i].prov_nome;
                //Aggiungo le immagini della regione e della provincia selezionata
                imgRegioni.setAttribute('src', 'img/regioni/' + risposta[i].prov_reg + '.png');
                imgProvince.setAttribute('src', 'img/province/' + risposta[i].prov_nome + '.png');
            }
        }
    });
}
