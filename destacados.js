//==================================
// DESTACADOS
//==================================

// Botones
const btnDestacados = document.getElementById("btnDestacados");
const btnVolverDestacados = document.getElementById("btnVolverDestacados");

// Secciones
const inicioDestacados = document.getElementById("inicio");
const seccionDestacados = document.getElementById("seccionDestacados");

//----------------------------------
// ABRIR DESTACADOS
//----------------------------------

if(btnDestacados){

    btnDestacados.onclick = function(){

        inicioDestacados.style.display = "none";

        seccionDestacados.style.display = "block";

    };

}

//----------------------------------
// VOLVER
//----------------------------------

if(btnVolverDestacados){

    btnVolverDestacados.onclick = function(){

        seccionDestacados.style.display = "none";

        inicioDestacados.style.display = "block";

    };

}