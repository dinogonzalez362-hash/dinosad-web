//==================================
// PUBLICACIONES
//==================================

// Botones
const btnPublicaciones = document.getElementById("btnPublicaciones");
const btnVolverPublicaciones = document.getElementById("btnVolverPublicaciones");

// Secciones
const inicioPublicaciones = document.getElementById("inicio");
const seccionPublicaciones = document.getElementById("seccionPublicaciones");

//----------------------------------
// ABRIR PUBLICACIONES
//----------------------------------

if(btnPublicaciones){

    btnPublicaciones.onclick = function(){

        inicioPublicaciones.style.display = "none";

        seccionPublicaciones.style.display = "block";

    };

}

//----------------------------------
// VOLVER
//----------------------------------

if(btnVolverPublicaciones){

    btnVolverPublicaciones.onclick = function(){

        seccionPublicaciones.style.display = "none";

        inicioPublicaciones.style.display = "block";

    };

}