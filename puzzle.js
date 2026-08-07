//==================================
// ROMPECABEZAS DINOSAD
// ARCHIVO PRINCIPAL
//==================================

//----------------------------------
// BOTONES
//----------------------------------

const btnPuzzle = document.getElementById("btnPuzzle");
const btnVolverPuzzle = document.getElementById("btnVolverPuzzle");
const btnVolverNiveles = document.getElementById("btnVolverNiveles");

//----------------------------------
// SECCIONES
//----------------------------------

const inicioPuzzle = document.getElementById("inicio");
const seccionNiveles = document.getElementById("seccionNiveles");
const seccionPuzzle = document.getElementById("seccionPuzzle");

//----------------------------------
// TABLERO
//----------------------------------

const puzzle = document.getElementById("puzzle");

//----------------------------------
// ABRIR MENÚ DE NIVELES
//----------------------------------

if(btnPuzzle){

    btnPuzzle.onclick=function(){

        inicioPuzzle.style.display="none";
        seccionNiveles.style.display="block";

    };

}

//----------------------------------
// VOLVER AL INICIO
//----------------------------------

if(btnVolverNiveles){

    btnVolverNiveles.onclick=function(){

        seccionNiveles.style.display="none";
        inicioPuzzle.style.display="block";

    };

}

//----------------------------------
// VOLVER DESDE EL JUEGO
//----------------------------------

if(btnVolverPuzzle){

    btnVolverPuzzle.onclick=function(){

        clearInterval(intervalo);

        seccionPuzzle.style.display="none";
        seccionNiveles.style.display="block";

    };

}