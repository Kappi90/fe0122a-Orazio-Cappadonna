var date = new Date();
document.getElementById('full-data').innerHTML = date;

var anno = date.getFullYear();
document.getElementById('anno').innerHTML = ("Anno: " + anno);

var mese = date.getMonth();
document.getElementById('mese').innerHTML = ("Mese: " + mese);

var giorno = date.getDate();
document.getElementById('giorno').innerHTML = ("Giorno: " + giorno); 

var gSettimana = date.getDay();
document.getElementById('gSettimana').innerHTML = ("Giorno della settimana: " + gSettimana); 

var prova = new Date('2022-02-21T11:19:53');
document.getElementById('prova').innerHTML = ("Prova: " + prova);

var parse = Date.parse('2022-02-21');
console.log(parse);