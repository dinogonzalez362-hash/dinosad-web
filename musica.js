// ===============================
// MÚSICA
// ===============================

// Reproductor
let musica = document.getElementById("musica");

// Botón Música
let btnMusica = document.getElementById("btnMusica");

// Botón Siguiente canción
let btnSiguiente = document.getElementById("btnSiguiente");

// ===============================
// LISTA DE CANCIONES
// ===============================

let canciones = [
    "musica/prueba.mp3",
    "musica/prueba1.mp3"
];

// ===============================
// CARGAR DATOS GUARDADOS
// ===============================

let cancionActual = parseInt(localStorage.getItem("cancionActual")) || 0;

if(musica){

    musica.src = canciones[cancionActual];

    let tiempoGuardado = localStorage.getItem("tiempoMusica");

    if(tiempoGuardado){

        musica.currentTime = parseFloat(tiempoGuardado);

    }

    if(localStorage.getItem("musica") == "on"){

        musica.play().catch(()=>{});

        btnMusica.innerHTML = "🎵 Música ON";

    }else{

        btnMusica.innerHTML = "🔇 Música OFF";

    }

}

// ===============================
// GUARDAR EL TIEMPO
// ===============================

if(musica){

    setInterval(function(){

        if(!musica.paused){

            localStorage.setItem("tiempoMusica", musica.currentTime);

        }

    },1000);

}

// ===============================
// BOTÓN MÚSICA
// ===============================

if(btnMusica){

    btnMusica.onclick = function(){

        if(musica.paused){

            musica.play();

            btnMusica.innerHTML = "🎵 Música ON";

            localStorage.setItem("musica","on");

        }else{

            musica.pause();

            btnMusica.innerHTML = "🔇 Música OFF";

            localStorage.setItem("musica","off");

        }

    };

}

// ===============================
// BOTÓN SIGUIENTE CANCIÓN
// ===============================

if(btnSiguiente){

    btnSiguiente.onclick = function(){

        cancionActual++;

        if(cancionActual >= canciones.length){

            cancionActual = 0;

        }

        musica.src = canciones[cancionActual];

        localStorage.setItem("cancionActual", cancionActual);

        musica.play();

        btnMusica.innerHTML = "🎵 Música ON";

        localStorage.setItem("musica","on");

    };

}