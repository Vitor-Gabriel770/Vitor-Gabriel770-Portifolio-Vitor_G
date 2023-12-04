const visor = document.getElementById("resultado");

function insert(num) {
    
    
    visor.innerHTML += num

}

function clean() {
    visor.innerHTML = "0";

    visor.style.fontSize = "2rem";

}

function back() {

    let resultado = visor.innerHTML;

    visor.innerHTML = resultado.substring(0, resultado.length - 1);

}

function calcular() {

    resultado = visor.innerHTML;

    if (resultado.length > 2) {
        visor.innerHTML = eval(resultado);
    }

    else {

        visor.innerHTML = "coloque 2 num e operador";

        visor.style.fontSize = "1rem";

        const time = setTimeout(clean, 2000)

    }
}

screen.orientation.lock('portrait')
screen.orientation.lock('landscape')
screen.orientation.unlock()