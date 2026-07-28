//==================================
// ROMPECABEZAS DINOSAD
//==================================

//----------------------------------
// CONFIGURACIÓN
//----------------------------------

const btnPuzzle = document.getElementById("btnPuzzle");
const btnVolverPuzzle = document.getElementById("btnVolverPuzzle");

const inicioPuzzle = document.getElementById("inicio");
const seccionPuzzle = document.getElementById("seccionPuzzle");

const puzzle = document.getElementById("puzzle");

const TAM = 3;

let tablero = [];
let indiceVacio = 8;
//----------------------------------
// CRONÓMETRO
//----------------------------------

let tiempo = 0;
let intervalo = null;

const cronometro = document.getElementById("cronometro");
//----------------------------------
// ABRIR ROMPECABEZAS
//----------------------------------

if (btnPuzzle) {

    btnPuzzle.onclick = function () {

        inicioPuzzle.style.display = "none";
        seccionPuzzle.style.display = "block";

        iniciarPuzzle();

    };

}

//----------------------------------
// VOLVER
//----------------------------------

if (btnVolverPuzzle) {

    btnVolverPuzzle.onclick = function () {

        seccionPuzzle.style.display = "none";
        inicioPuzzle.style.display = "block";

    };

}

//----------------------------------
// INICIAR TABLERO
//----------------------------------

function iniciarPuzzle(){

    tablero = [

        0,1,2,
        3,4,5,
        6,7,-1

    ];

    indiceVacio = 8;

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

    for(let i=0;i<200;i++){

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

    let tamano = puzzle.clientWidth / TAM;

    for(let i = 0; i < tablero.length; i++){

        let valor = tablero[i];

        let pieza = document.createElement("div");

        pieza.className = "pieza";

        //----------------------------------
        // ESPACIO VACÍO
        //----------------------------------

        if(valor == -1){

            pieza.style.background = "#111";

        }else{

            let x = valor % TAM;
            let y = Math.floor(valor / TAM);

            pieza.style.backgroundImage = "url('puzzle.png')";

            pieza.style.backgroundSize =
                (tamano*TAM)+"px "+(tamano*TAM)+"px";

            pieza.style.backgroundPosition =
                (-x*tamano)+"px "+(-y*tamano)+"px";

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

    for(let i = 0; i < 8; i++){

        if(tablero[i] != i){

            return;

        }

    }

    if(tablero[8] == -1){

        // Mostrar la última pieza
        tablero[8] = 8;

        // Dibujar la imagen completa
        dibujarPuzzle();
clearInterval(intervalo);
        // Mensaje de victoria
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