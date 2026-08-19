//==================================
// NUEVOS STICKERS
//==================================

// Botones
const btnNuevosStikers = document.getElementById("btnNuevosStikers");
const btnVolverNuevosStikers = document.getElementById("btnVolverNuevosStikers");

// Secciones
const inicioNuevosStikers = document.getElementById("inicio");
const seccionNuevosStikers = document.getElementById("seccionNuevosStikers");

//----------------------------------
// ABRIR NUEVOS STICKERS
//----------------------------------

if(btnNuevosStikers){

    btnNuevosStikers.onclick = function(){

        inicioNuevosStikers.style.display = "none";

        seccionNuevosStikers.style.display = "block";

    };

}

//----------------------------------
// VOLVER
//----------------------------------

if(btnVolverNuevosStikers){

    btnVolverNuevosStikers.onclick = function(){

        seccionNuevosStikers.style.display = "none";

        inicioNuevosStikers.style.display = "block";

    };

}