//==================================
// NUEVAS PUBLICACIONES
//==================================

// Botones
const btnNuevos = document.getElementById("btnNuevos");
const btnVolverNuevos = document.getElementById("btnVolverNuevos");

// Secciones
const inicioNuevos = document.getElementById("inicio");
const seccionNuevos = document.getElementById("seccionNuevos");

//----------------------------------
// ABRIR NUEVOS
//----------------------------------

if(btnNuevos){

    btnNuevos.onclick = function(){

        inicioNuevos.style.display = "none";

        seccionNuevos.style.display = "block";

    };

}

//----------------------------------
// VOLVER
//----------------------------------

if(btnVolverNuevos){

    btnVolverNuevos.onclick = function(){

        seccionNuevos.style.display = "none";

        inicioNuevos.style.display = "block";

    };

}