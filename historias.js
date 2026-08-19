//==================================
// HISTORIAS
//==================================

// Botones
const btnHistorias = document.getElementById("btnHistorias");
const btnVolverHistorias = document.getElementById("btnVolverHistorias");

// Secciones
const inicioHistorias = document.getElementById("inicio");
const seccionHistorias = document.getElementById("seccionHistorias");

//----------------------------------
// ABRIR HISTORIAS
//----------------------------------

if(btnHistorias){

    btnHistorias.onclick = function(){

        inicioHistorias.style.display = "none";

        seccionHistorias.style.display = "block";

    };

}

//----------------------------------
// VOLVER
//----------------------------------

if(btnVolverHistorias){

    btnVolverHistorias.onclick = function(){

        seccionHistorias.style.display = "none";

        inicioHistorias.style.display = "block";

    };

}