let container = document.createElement('div');  
    container.setAttribute("class", "box");
    $("body").append(container);

/*function creaElementi(){    
    
}
creaElementi();*/

function creaCard(){  
    let card = document.createElement('div');
    card.setAttribute("class", "card");
    container.append(card);
    console.log(card);
}


for(let i=0; i < 16; i++){
    creaCard();
}

