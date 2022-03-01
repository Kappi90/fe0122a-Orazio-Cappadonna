// Quando il documento è pronto...
/*var nome = $('#nome');
var email1 = $('#email-1');
var email2 = $('#email-2');
var iscriviti = $('#iscr-news');
var pulisci = $('#pulisci-form');


$(document).ready(function(){
    $(iscriviti).click(function(){
        if(nome.val() == ''){
            $('#nome').css('border', '2px solid red');
            $('#nome').next().text('//Questo campo è obbligatorio').fadeOut(2000);
        }else if(!(nome.val()=='')){
            $('#nome').css('border', '2px solid green')
            //console.log('ok')
        }
        if(email1.val() == ''){
            $('#email-1').css('border', '2px solid red')
            $('#email-1').next().text('//Questo campo è obbligatorio').fadeOut(2000);
        }else if(!(email1.val()=='')){
            $('#email-1').css('border', '2px solid green')
            //console.log('ok')
        }
        if(email2.val() == ''){
            $('#email-2').css('border', '2px solid red')
            $('#email-2').next().text('//Questo campo è obbligatorio').fadeOut(2000);
        }else if(!(email2.val()=='')){
            $('#email-2').css('border', '2px solid green')
            //console.log('ok')
        }

        if(email1.val() !== email2.val() || email1.val() == ""){
            console.log('Non è corretto')
        }else if(email1.val() === email2.val()){
            alert('ottimo')
        }
    })
})


$(document).ready(function(){
    $(pulisci).click(function(){
        $('#form-email').remove(' ');
    })
})



        // inizializzo una variabile di controllo a true
        
        // utilizzo una dichiarazione if e se il valore di nome è presente altrimenti devo scrivere *Richiesto
        
        // nell'else uso next e text per impostare l'elemento span adiacente
        
        // assegno a due variabili il valore dei due campi email
        
        // ripeto la condizione nel nome anche per l'email
        
        // nella verifica devo mettere una ulteriore condizione se le email inserite sono diverse
        //invio del form se tutti i campi sono validi
    //gestisco il click sul pulsante Pulisci il form, i campi devono essere vuoti e 
    //posizionare un asterisco per identificare il campo obbligatorio. 
*/



$('#iscr-news').click(function(){
    let nome = $('#nome').val();
    let email1 = $('#email-1').val();
    let email2 = $('#email-2').val();
    let isValid = true;

    //Seleziono tutti gli input type text all'interno del form
    let campi = $('#form-email input[type="text"]'); 

    //Forma breve
    campi.each(function(indice,elemento){
        if($(elemento).val() == ''){
            //gestisci errore
            $(elemento).next().text('* Required')
            isValid = false;
        }else{
            //rimuovi errore
            $(elemento).next().text('*')
        }
    });

   /*if(nome == ''){
        //gestisci errore
        $('#nome').next().text('* Required')
        isValid = false;
    }else{
        //rimuovi errore
        $('#nome').next().text('*')
    }

    if(email1 == ''){
        //gestisci errore
        $('#email-1').next().text('* Required')
        isValid = false;
    }else{
        //rimuovi errore
        $('#email-1').next().text('*')
    }

    if(email2 == ''){
        //gestisci errore
        $('#email-2').next().text('* Required')
        isValid = false;
    }else{
        //rimuovi errore
        $('#email-2').next().text('*')  
    }*/

    if(email1 != email2){
        //gestisci errore
        $('#email-2').next().text('Must be equal')
        isValid = false;
    }else{
        //rimuovi errore
        $('#email-2').next().text('*')
    }

    if(isValid){
        //Se tutto è compilato correttamente invia form
        $('#form-email').submit()
    }
});

$('#pulisci-form').click(function(){
    $('#form-email input[type="text"]').val('');
})


    