var bottoni = document.querySelectorAll('button')

bottoni.forEach(function (bottone) {
    bottone.addEventListener('click', function () {
        var style = this.getAttribute('data-style')
        var pSelector = document.querySelector("p")
        pSelector.style.color = style;
        pSelector.style.fontSize = style;
        pSelector.style.fontStyle = style;
    })
})

var toggle = document.querySelector('#menu .toggle')

//Se clicco sull'elemento toggle
toggle.addEventListener('click', function () {
    let tendina = document.querySelector('#menu .tendina')
    tendina.classList.toggle('nascosto')
})