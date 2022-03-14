/*
$.ajax({
    url: 'https://sofin.wp-admin.it/public/api/v1/user',
    method: 'POST', //il metodo post aggiunge un nuovo utente
    data: { //è un oggetto, creo un nuovo utente
        name: "Mario",
        lastname: "Rossi",
        email: "test.shaSDADSADSAylee@example.org",
        email_verified_at: "2021-12-13T14:17:06.000000Z",
        password: "$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi",
        role_id: 4,
    }
});
*/

/*
fetch(
    'https://sofin.wp-admin.it/public/api/v1/user',
    {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: "Marco",
            lastname: "Rossi",
            email: "tesdDSDSDSDssddst.shaylee@example.org",
            password: "$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi",
            role_id: 4
        }),
    }
);*/

fetch('https://sofin.wp-admin.it/public/api/v1/user') //Fai una chiamata da questo indirizzo
    .then(response => response.json()) //trasforma la risposta in un JSON
    .then(data => { //quando hai finito di trasformare la risposta in JSON
        console.log("Success:", data) //il JSON fa le seguenti cose

        var table = document.getElementById('contenitore');

        //Creo il ciclo per aggiungere tr,td all'interno della tabella con i dati degli utenti registrati
        data.forEach(element => {

            //Creo variabile per creare gli elementi tr
            var tr = document.createElement('tr');

            //Aggiungo il tr creato nella tabella
            table.append(tr);

            //Creo un ciclo for in per inserire nella tabella tutti i nuovi tr che verranno creati
            for (data in element) {

                //Creo una variabile per creare gli elementi td
                var td = document.createElement('td');

                //Aggiungo il td creato al tr
                tr.append(td)

                //Inserisco nell'HTML gli utenti registrati
                td.innerHTML = element[data]
                
            }

            //Cancella utente
            var cancella = document.createElement("button")
            cancella.classList.add('cancellaUtente')
            cancella.innerHTML = 'elimina'
            tr.append(cancella)
            cancella.addEventListener('click', function () {

                fetch("https://sofin.wp-admin.it/public/api/v1/user/" + element.id, {
                        method: "DELETE",
                        headers: {
                            "Content-Type": "application/json",
                        }
                    })
                    .then(() => {
                        tr.remove();
                    })
            })
        });
    });

//Bottone genera nuovo utente
let bottone = document.querySelector("button");

bottone.addEventListener("click", () => {
    history.pushState({}, "", "addUser.html");
    location.href = "addUser.html"
});