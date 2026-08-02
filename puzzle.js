//==================================
// ROMPECABEZAS DINOSAD
//==================================

//----------------------------------
// CONFIGURACIÓN
//----------------------------------

const btnPuzzle = document.getElementById("btnPuzzle");
const btnVolverPuzzle = document.getElementById("btnVolverPuzzle");
const inicioPuzzle = document.getElementById("inicio");

// Secciones
const seccionNiveles = document.getElementById("seccionNiveles");
const seccionPuzzle = document.getElementById("seccionPuzzle");

// Botones de niveles
const nivelFacil = document.getElementById("nivelFacil");
const nivelNormal = document.getElementById("nivelNormal");
const nivelDificil = document.getElementById("nivelDificil");
const nivelExperto = document.getElementById("nivelExperto");

const btnVolverNiveles = document.getElementById("btnVolverNiveles");

// Tablero
const puzzle = document.getElementById("puzzle");

let  =  TAM = 3;
let tablero = [];

let indiceVacio = 0;

let movimientosMezcla = 200;
//----------------------------------
// CRONÓMETRO
//----------------------------------

let tiempo = 0;
let intervalo = null;

const cronometro = document.getElementById("cronometro");
//----------------------------------
// ABRIR SELECCIÓN DE NIVELES
//----------------------------------

if (btnPuzzle) {

    btnPuzzle.onclick = function () {

        inicioPuzzle.style.display = "none";
        seccionNiveles.style.display = "block";

    };

}

//----------------------------------
// VOLVER DESDE NIVELES
//----------------------------------

if (btnVolverNiveles) {

    btnVolverNiveles.onclick = function () {

        seccionNiveles.style.display = "none";
        inicioPuzzle.style.display = "block";

    };

}

//----------------------------------
// NIVEL FÁCIL
//----------------------------------
if (nivelFacil) {

    nivelFacil.onclick = function () {

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
if (nivelNormal) {

    nivelNormal.onclick = function () {

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
if (nivelDificil) {

    nivelDificil.onclick = function () {

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
if (nivelExperto) {

    nivelExperto.onclick = function () {

        TAM = 6;

        movimientosMezcla = 1000;

        seccionNiveles.style.display = "none";

        seccionPuzzle.style.display = "block";

        iniciarPuzzle();

    };

}

//----------------------------------
// VOLVER DESDE EL ROMPECABEZAS
//----------------------------------

if (btnVolverPuzzle) {

    btnVolverPuzzle.onclick = function () {

        clearInterval(intervalo);

        seccionPuzzle.style.display = "none";

        seccionNiveles.style.display = "block";

    };

}

//----------------------------------
// INICIAR TABLERO
//----------------------------------

function iniciarPuzzle(){
tablero = [];

let cantidad = TAM * TAM;

for(let i = 0; i < cantidad - 1; i++){

    tablero.push(i);

}

tablero.push(-1);

indiceVacio = cantidad - 1;

    mezclarPuzzle();

    dibujarPuzzle();
//----------------------------------
// INICIAR CRONÓMETRO
//----------------------------------

tiempo = 0;

if(cronometro){

    cronometro.innerHTML = "⏱️ Tiempo: 00:00";

}

clearInterval(intervalo);

intervalo = setInterval(actualizarCronometro,1000);
}

//----------------------------------
// MEZCLAR TABLERO
//----------------------------------

function mezclarPuzzle(){

for(let i = 0; i < movimientosMezcla; i++){
        let vecinos = obtenerVecinos(indiceVacio);

        let aleatorio = Math.floor(
            Math.random()*vecinos.length
        );

        moverPieza(vecinos[aleatorio]);

    }

}

//----------------------------------
// OBTENER VECINOS
//----------------------------------

function obtenerVecinos(posicion){

    let vecinos=[];

    let fila=Math.floor(posicion/TAM);
    let columna=posicion%TAM;

    if(fila>0){
        vecinos.push(posicion-TAM);
    }

    if(fila<TAM-1){
        vecinos.push(posicion+TAM);
    }

    if(columna>0){
        vecinos.push(posicion-1);
    }

    if(columna<TAM-1){
        vecinos.push(posicion+1);
    }

    return vecinos;

}
//----------------------------------
// MOVER PIEZA
//----------------------------------

function moverPieza(posicion){

    let temporal = tablero[posicion];

    tablero[posicion] = tablero[indiceVacio];

    tablero[indiceVacio] = temporal;

    indiceVacio = posicion;

    requestAnimationFrame(function(){

        dibujarPuzzle();

    });

}
//----------------------------------
// DIBUJAR TABLERO
//----------------------------------

function dibujarPuzzle(){

    puzzle.innerHTML = "";
    puzzle.style.gridTemplateColumns = `repeat(${TAM},1fr)`;
puzzle.style.gridTemplateRows = `repeat(${TAM},1fr)`;

    let anchoTablero = puzzle.clientWidth;
    let altoTablero = puzzle.clientHeight;

    let anchoPieza = anchoTablero / TAM;
    let altoPieza = altoTablero / TAM;

    for(let i = 0; i < tablero.length; i++){

        let valor = tablero[i];

        let pieza = document.createElement("div");

        pieza.className = "pieza";

        pieza.style.width = anchoPieza + "px";
        pieza.style.height = altoPieza + "px";

        //----------------------------------
        // ESPACIO VACÍO
        //----------------------------------

        if(valor == -1){

            pieza.style.background = "#111";

        }else{

            let columna = valor % TAM;
            let fila = Math.floor(valor / TAM);

            pieza.style.backgroundImage = "url('puzzle.png')";
            pieza.style.backgroundRepeat = "no-repeat";

            pieza.style.backgroundSize =
                anchoTablero + "px " + altoTablero + "px";

            pieza.style.backgroundPosition =
                (-columna * anchoPieza) + "px " +
                (-fila * altoPieza) + "px";

            pieza.onclick = function(){

                tocarPieza(i);

            };

        }

        puzzle.appendChild(pieza);

    }

}
//----------------------------------
// TOCAR PIEZA
//----------------------------------

function tocarPieza(posicion){

    let vecinos = obtenerVecinos(indiceVacio);

    if(vecinos.indexOf(posicion) == -1){

        return;

    }

moverPieza(posicion);

setTimeout(function(){

    comprobarVictoria();

},300);
}
//----------------------------------
// COMPROBAR VICTORIA
//----------------------------------

function comprobarVictoria(){

    let ultima = TAM * TAM - 1;

    for(let i = 0; i < ultima; i++){

        if(tablero[i] != i){

            return;

        }

    }

    if(tablero[ultima] == -1){

        // Mostrar la última pieza
        tablero[ultima] = ultima;

        // Dibujar la imagen completa
        dibujarPuzzle();

        clearInterval(intervalo);

        setTimeout(function(){

            alert("🎉 ¡Felicitaciones! Completaste el rompecabezas.");

        },150);

    }

}
//----------------------------------
// ACTUALIZAR CRONÓMETRO
//----------------------------------

function actualizarCronometro(){

    tiempo++;

    let minutos = Math.floor(tiempo/60);
    let segundos = tiempo%60;

    minutos = String(minutos).padStart(2,"0");
    segundos = String(segundos).padStart(2,"0");

    if(cronometro){

        cronometro.innerHTML =
        "⏱️ Tiempo: "+minutos+":"+segundos;

    }

}