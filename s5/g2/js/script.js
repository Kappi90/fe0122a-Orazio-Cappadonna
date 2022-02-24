/*
var budget = document.querySelector('Input');

budget.for(function(calcola){
    calcola.addEventListener('click', function(){
        var numero = this.getAttribute('data-simbolo');
        document.querySelector('#risultato').value = numero;
    })
});

var budget = document.querySelector('Input')

    switch(budget){
        case '100%': 
            console.log('Hai il budget intero'); //false
        break;
        case '90%': 
            console.log('Hai speso il 10% del tuo budget'); //false
        break;
        case '80%': 
            console.log('Hai speso il 20% del tuo budget'); //false
        break;
        case '70%': 
            console.log('Hai speso il 30% del tuo budget'); //false
        break;
        case '60%': 
            console.log('Hai speso il 40% del tuo budget'); //false
        break;
        case '50%': 
            alert('Hai speso il 50% del tuo budget'); //true
        break;
        case '40%': 
            console.log('Hai speso il 60% del tuo budget'); //false
        break;
        case '30%': 
            console.log('Hai speso il 70% del tuo budget'); //false
        break;
        case '20%': 
            console.log('Hai speso l 80% del tuo budget'); //false
        break;
        case '10%': 
            alert('Hai speso il 90% del tuo budget'); //false
        break;
        case '0%': 
            console.log('Hai speso il 100% del tuo budget'); //false
        break;
        default: console.log('Il tuo budget') //mostra il default
}
*/

var budget = 100;

while (budget > 0){
    let spesa = Math.floor(Math.random()*50);
    budget -= spesa;
    document.getElementsById()
}