//==================================
// CONTENIDO
//==================================

// Botones
const btnContenido = document.getElementById("btnContenido");
const btnVolverContenido = document.getElementById("btnVolverContenido");

// Secciones
const inicioContenido = document.getElementById("inicio");
const seccionContenido = document.getElementById("seccionContenido");

//----------------------------------
// ABRIR CONTENIDO
//----------------------------------

if(btnContenido){

    btnContenido.onclick = function(){

        inicioContenido.style.display = "none";

        seccionContenido.style.display = "block";

    };

}

//----------------------------------
// VOLVER
//----------------------------------

if(btnVolverContenido){

    btnVolverContenido.onclick = function(){

        seccionContenido.style.display = "none";

        inicioContenido.style.display = "block";

    };

}