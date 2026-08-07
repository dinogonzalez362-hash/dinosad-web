//==================================
// CRONÓMETRO DEL ROMPECABEZAS
//==================================

//----------------------------------
// VARIABLES
//----------------------------------

let tiempo = 0;

let intervalo = null;

const cronometro = document.getElementById("cronometro");

//----------------------------------
// INICIAR
//----------------------------------

function iniciarCronometro(){

    tiempo = 0;

    if(cronometro){

        cronometro.innerHTML = "⏱️ Tiempo: 00:00";

    }

    clearInterval(intervalo);

    intervalo = setInterval(actualizarCronometro,1000);

}

//----------------------------------
// ACTUALIZAR
//----------------------------------

function actualizarCronometro(){

    tiempo++;

    let minutos = Math.floor(tiempo / 60);
    let segundos = tiempo % 60;

    minutos = String(minutos).padStart(2,"0");
    segundos = String(segundos).padStart(2,"0");

    if(cronometro){

        cronometro.innerHTML =
        "⏱️ Tiempo: " + minutos + ":" + segundos;

    }

}

//----------------------------------
// DETENER
//----------------------------------

function detenerCronometro(){

    clearInterval(intervalo);

}