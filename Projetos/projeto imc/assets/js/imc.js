const form = document.getElementById("form")
form.addEventListener("submit", function (event) {

    event.preventDefault();
    // previne o comportamento padrão do  evento submit do js,ou eja impede o recarregamento da paginá  

    const peso = document.getElementById('weight').value;

    const altura = document.getElementById('height').value;

    const imc = peso / (altura * altura);

    // alert(`${imc}`);

    document.getElementById('infos').classList.remove('hidden');

    // onde aparece do valor de imc

    let descricao;


    // condições do imc

    const CampoImc = document.

        getElementById('value');

    // CampoImc.classList.add("attention");

    CampoImc.style.color = "red";



    if (imc < 17) {
        descricao = ("Cuidado Você Está Muito Abaixo do Peso!")

        CampoImc.style.color = "gray"


    }

    else if ((imc >= 18.5) && (imc <= 25)) {
        descricao = ("Você Está No Peso ideal!")

        CampoImc.style.color = "green"

    }
    
    else if ((imc > 25) && (imc <= 30)) {
        descricao = ("Cuidado Você Está com sobrepeso")

        CampoImc.style.color = "yellow"

    }

    else if ((imc > 30) && (imc <= 35)) {
        descricao = ("Cuidado Você Está com Obesidade Moderada")



        CampoImc.style.color = "orange"

    }

    else if ((imc > 35) && (imc <= 40)) {
        descricao = ("Cuidado Você Está com Obesidade Sevéra")

        CampoImc.style.color = "orangered"

    }
    else {

        descricao = ("Cuidado Você Está com Obesidade Mórbida")

    }

    CampoImc.textContent = imc.toFixed(1);

    document.getElementById('description').textContent = descricao;




});

screen.orientation.lock('portrait')
screen.orientation.lock('landscape')
screen.orientation.unlock()