$(() => {

    const mieImg = ["arrabbiato", "bello", "piangere", "ridere", "amare", "amare1", "spavento", "shock", "arrabbiato", "bello",
        "piangere", "ridere", "amare", "amare1", "spavento", "shock"
    ];

    //genera ciclicamente 16 div contenenti le immagini pescate randomicamente
    for (let i = 0; i < 16; i++) {

        let random = Math.floor(Math.random() * mieImg.length); //Genera un numero intero(floor) che va da zero a 15

        let immagineRandom = mieImg.splice(random, 1); //elimina l'elemento una volta selezionato da random

        $('<div class="images" id="emoji' + i + '"><img id="' + i + '" src="img/' + immagineRandom + '.png" width="130" height="130"</div>').appendTo('#memory'); //crea il div con all'interno class id e immagine, incrementando ogni volta di 1 il num all'interno dell'id 

    }

    //Array in cui si salvano le informazioni degli elementi cliccati
    let immaginiCliccate = [];

    //Gestione dell'evento click
    $('.images').click(function () {

        //Aumento contatore click
        let nClick = $('.numclicks span').text();
        nClick++;
        $('.numclicks span').text(nClick);

        //Game over
        if(nClick > 32){ //Con 32 mosse perdi
            $('#youLose').show(); 
            $('#memory').hide('slow');
        }

        if (immaginiCliccate.length != 2) {

            //crea una variabile contente l'id dell'immagine cliccata
            let imgId = $(this).children().attr('id');

            //crea una variabile contenente l'attributo src dell'immagine cliccata
            let imgSrc = $(this).children().attr('src');

            //mostra l'immagine presente nell'elemento cliccato
            $('#' + imgId).show('slow');
            
            //crea un oggetto contenente le proprietà id ed src salvate nelle 2 variabili appena create
            let oggettoImg = {
                id: imgId,
                src: imgSrc
            }

            //aggiungi l'oggetto appena creato all'array immaginiCliccate
            immaginiCliccate.push(oggettoImg);           

            //controllo quante immagini ho cliccato
            if (immaginiCliccate.length == 2) {

                //confronta gli elementi cliccati
                if (immaginiCliccate[0].src == immaginiCliccate[1].src) {
                    
                    immaginiCliccate = []

                } else {
                    setTimeout(function () {
                        
                        $('#' + immaginiCliccate[0].id).hide('slow')
                        $('#' + immaginiCliccate[1].id).hide('slow')
                        immaginiCliccate = []

                    }, 500);

                }

            }

        }

    });

    //Al click parte il gioco e il timer
    $('#start').click(function () {

        $('#start').hide('slow'); //Nasconde il tasto start
        $('#memory').show(); //Mostra il gioco
        $('#timer').show(); //Mostra il timer
        $('#restart').show(); //Mostra il tasto restart
        $('#counter').show(); //Mostra il counter dei click
        let now = new Date()
        now.setHours(0);
        now.setMinutes(0);
        now.setSeconds(0);

        setInterval(function () {

            let h = now.getHours();
            let m = now.getMinutes();
            let s = now.getSeconds();

            now.setSeconds(s + 1)

            h = now.getHours();
            m = now.getMinutes();
            s = now.getSeconds();

            $('#timer').text("Time: " + h + ':' + m + ':' + s)
        }, 1000)
    });

    $('#restart').click(function(){ 
        window.location.reload() //Refresha la pagina
    });


});