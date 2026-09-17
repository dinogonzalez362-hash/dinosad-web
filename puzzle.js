//==================================
// ROMPECABEZAS DINOSAD
// ARCHIVO PRINCIPAL
//==================================

//----------------------------------
// BOTONES
//----------------------------------

const btnJuegosDinoSad = document.getElementById("btnJuegosDinoSad");
const btnPuzzle = document.getElementById("btnPuzzle");
const btnVolverJuegosDinoSad = document.getElementById("btnVolverJuegosDinoSad");
const btnVolverPuzzle = document.getElementById("btnVolverPuzzle");
const btnVolverNiveles = document.getElementById("btnVolverNiveles");

//----------------------------------
// SECCIONES
//----------------------------------

const inicioPuzzle = document.getElementById("inicio");
const seccionJuegosDinoSad = document.getElementById("seccionJuegosDinoSad");
const seccionNiveles = document.getElementById("seccionNiveles");
const seccionPuzzle = document.getElementById("seccionPuzzle");

//----------------------------------
// TABLERO
//----------------------------------

const puzzle = document.getElementById("puzzle");

//----------------------------------
// ABRIR MENÚ DE JUEGOS
//----------------------------------

if(btnJuegosDinoSad){

    btnJuegosDinoSad.onclick=function(){

        inicioPuzzle.style.display="none";
        seccionJuegosDinoSad.style.display="block";

    };

}

//----------------------------------
// ABRIR MENÚ DE NIVELES
//----------------------------------

if(btnPuzzle){

    btnPuzzle.onclick=function(){

        if (seccionJuegosDinoSad) {
            seccionJuegosDinoSad.style.display="none";
        }

        seccionNiveles.style.display="block";

    };

}

//----------------------------------
// VOLVER AL MENÚ DE JUEGOS
//----------------------------------

if(btnVolverJuegosDinoSad){

    btnVolverJuegosDinoSad.onclick=function(){

        seccionJuegosDinoSad.style.display="none";
        inicioPuzzle.style.display="block";

    };

}

//----------------------------------
// VOLVER AL INICIO
//----------------------------------

if(btnVolverNiveles){

    btnVolverNiveles.onclick=function(){

        seccionNiveles.style.display="none";
        seccionJuegosDinoSad.style.display="block";

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