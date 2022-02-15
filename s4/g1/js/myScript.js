function changeColor() {
    var color = document.getElementById('colore').style.color = '#000';
    if(color == '#000'){
    document.getElementById('colore').style.color = '#FF0000';
    }else if(color != '#000'){
        document.getElementById('colore').style.color = '#000';
    }
}


function fontParagrafo(){
    document.getElementById('paragrafo').style.fontSize = '24px';
}

function reSizefontParagrafo(){
    document.getElementById('paragrafo').style.fontSize = '16px';
}


function somma(){
    return 6 + 6;
}