//==================================
// NIVELES DEL ROMPECABEZAS
//==================================

//----------------------------------
// CONFIGURACIÓN
//----------------------------------

let TAM = 3;

let tablero = [];

let indiceVacio = 0;

let movimientosMezcla = 200;

//----------------------------------
// BOTONES
//----------------------------------

const nivelFacil = document.getElementById("nivelFacil");
const nivelNormal = document.getElementById("nivelNormal");
const nivelDificil = document.getElementById("nivelDificil");
const nivelExperto = document.getElementById("nivelExperto");

//----------------------------------
// NIVEL FÁCIL
//----------------------------------

if(nivelFacil){

    nivelFacil.onclick=function(){

        TAM = 3;

        movimientosMezcla = 200;

        seccionNiveles.style.display = "none";
        seccionPuzzle.style.display = "block";

        iniciarPuzzle();

    };

}

//----------------------------------
// NIVEL NORMAL
//----------------------------------

if(nivelNormal){

    nivelNormal.onclick=function(){

        TAM = 4;

        movimientosMezcla = 400;

        seccionNiveles.style.display = "none";
        seccionPuzzle.style.display = "block";

        iniciarPuzzle();

    };

}

//----------------------------------
// NIVEL DIFÍCIL
//----------------------------------

if(nivelDificil){

    nivelDificil.onclick=function(){

        TAM = 5;

        movimientosMezcla = 700;

        seccionNiveles.style.display = "none";
        seccionPuzzle.style.display = "block";

        iniciarPuzzle();

    };

}

//----------------------------------
// NIVEL EXPERTO
//----------------------------------

if(nivelExperto){

    nivelExperto.onclick=function(){

        TAM = 6;

        movimientosMezcla = 1000;

        seccionNiveles.style.display = "none";
        seccionPuzzle.style.display = "block";

        iniciarPuzzle();

    };

}