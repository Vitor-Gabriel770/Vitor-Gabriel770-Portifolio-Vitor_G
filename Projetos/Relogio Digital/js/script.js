const horas = document.getElementById("horas");

const minutos = document.getElementById("minutos");

const segundos = document.getElementById("segundos");

const dia = document.getElementById("dia");

const mes = document.getElementById("mes");

const ano = document.getElementById("ano");


const relogio = setInterval(() => {

    const dateToday = new Date();

    let hr = dateToday.getHours();
    let mn = dateToday.getMinutes();
    let sg = dateToday.getSeconds();
    let day = dateToday.getDate();
    let month = dateToday.getMonth()+1  ;
    let year = dateToday.getFullYear();

    if (hr < 10) hr = '0' + hr;
    if (mn < 10) mn = '0' + mn;
    if (sg < 10) sg = '0' + sg;
    // if (month < 12) month = 1 + month;
    if (year < 10) sg = year = '0' + year;

    horas.textContent = hr;
    minutos.textContent = mn;
    segundos.textContent = sg;

    dia.textContent = day;
    mes.textContent = month;
    ano.textContent = year;


});

// alert(segundos.textContent);

screen.orientation.lock('portrait')
screen.orientation.lock('landscape')
screen.orientation.unlock()