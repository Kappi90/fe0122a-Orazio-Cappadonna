// quando il documento è pronto...(forma breve)...
$(() => {
    $("#l-btn").click(function () {
        let w = $('#img-l').width();
        let lProp = parseInt($('#img-l').css('left'));
        if(lProp -600 > -w){
        $('#img-l').animate({
            left: '-=300px'
        });
        }else{
            $('#img-l').animate({
                left: '0px'
            });
        }
    });

    $("#r-btn").click(function () {
        let w = $('#img-l').width();
        let lProp = parseInt($('#img-l').css('right'));
        if(lProp +600 > +w){
        $('#img-l').animate({
            left: '+=300px'
        });
        }else{
            $('#img-l').animate({
                left: '0px'
            });
        }
    });
});
    // creo una variabile "carosello" e creo così un oggetto jQuery che contenga gli elementi ul (il selettore è #img-l).
    

    // gestisco il click event handler per il pulsante sinistro.
    
        // creo una variabile "lProp" che contiene il valore della proprietà "left" (usa parseInt per convertire in numero intero)
        // qui contengo l'ul che serve per muovere l'elemento a destra e sinistra.
        

        // determino il nuovo valore della proprietà left e prima creo una nuova variabile "newLProp" che lo contiene. 
        // Utilizzo l'if.
        

        // uso il metodo animate per cambiare il valore della proprietà "left"
    

    // gestisco il click event handler per il pulsante destro
    
        // uso il codice per la gestione del pulsante sinistro, l'unica variazione è la determinazione del nuovo valore
        // della proprietà "left".
        

        // determino il nuovo valore della proprietà "left"
        

        // uso il metodo animate per cambiare il valore della proprietà left
     