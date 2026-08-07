//==================================
// IMÁGENES DEL ROMPECABEZAS
//==================================

//----------------------------------
// LISTA DE IMÁGENES
//----------------------------------

const imagenesPuzzle = [

    "puzzle1.png",
    "puzzle2.png"

];

//----------------------------------
// IMAGEN ACTUAL
//----------------------------------

let imagenActual = "puzzle1.png";

let ultimaImagen = -1;

//----------------------------------
// SELECCIONAR IMAGEN ALEATORIA
//----------------------------------

function seleccionarImagenPuzzle(){

    if(imagenesPuzzle.length == 1){

        imagenActual = imagenesPuzzle[0];

        return;

    }

    let numero;

    do{

        numero = Math.floor(
            Math.random() * imagenesPuzzle.length
        );

    }while(numero == ultimaImagen);

    ultimaImagen = numero;

    imagenActual = imagenesPuzzle[numero];

}