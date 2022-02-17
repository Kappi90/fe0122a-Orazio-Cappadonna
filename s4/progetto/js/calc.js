
/*Funzione tasti input*/
function inpuTask(tasto){
    let result = document.getElementById('display');
    let number = tasto.id; 
    result.value += number;
}

/*Funzione tasto C*/
function resetCalculator(){
    let result = document.getElementById('display');
    result.value = ''; 
}

/*Funzione tasto "="*/
function total(){
    let result = document.getElementById('display');
    result.value = eval(result.value);
}

/*Funzione tasto delete*/
function del(){
    let result = document.getElementById('display');
    result.value = result.value.slice(0, -1);
}
