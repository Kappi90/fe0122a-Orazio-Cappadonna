// Quando il documento è pronto...

$( () => {
    $('h2').click(function(){
        $(this).toggleClass('meno').next().toggleClass('menu-tendina');
    });
})
