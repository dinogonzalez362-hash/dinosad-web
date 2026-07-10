// ===============================
// FONDOS AUTOMÁTICOS
// ===============================

// Lista de fondos
let fondos = [

    "dino.jpg",
    "dino1.jpg",
    "dino2.jpg",
    "dino3.jpg",
    "dino4.jpg",
    "dino5.jpg"

];

// Fondo actual
let fondoActual = 0;

// Buscar el div del fondo
let fondo = document.getElementById("fondo");

// ===============================
// CAMBIAR FONDO
// ===============================

if(fondo){

    setInterval(function(){

        // Desaparece
        fondo.style.opacity = "0";

        setTimeout(function(){

            // Siguiente imagen
            fondoActual++;

            if(fondoActual >= fondos.length){

                fondoActual = 0;

            }

            // Cambia la imagen
            fondo.style.backgroundImage =
            "url('" + fondos[fondoActual] + "')";

            // Vuelve a aparecer
            fondo.style.opacity = "1";

        },1000);

    },5000);

}