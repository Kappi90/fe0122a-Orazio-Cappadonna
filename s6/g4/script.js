$(() => {
    $("#inizia").click(function(){
        $("#box").animate({
            width: "300px"
        }, {
            duration: 30000,
            easing: "linear",
            step: function(x){
                $('#testo').text(Math.round(x * 100/ 300) + '%');
            },
            complete: function(){
                $('#testo').text('Download completato');
            }
        });
    });
});