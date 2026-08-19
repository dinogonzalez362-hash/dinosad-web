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

    "prueba.mp3",
    "prueba1.mp3",
    "prueba2.mp3",
    "prueba3.mp3",
    "prueba4.mp3",
    "prueba5.mp3"

];

// ===============================
// CARGAR DATOS GUARDADOS
// ===============================

let cancionActual =
parseInt(localStorage.getItem("cancionActual")) || 0;

if(musica){

musica.src = canciones[cancionActual];
    let tiempoGuardado =
    localStorage.getItem("tiempoMusica");

    if(tiempoGuardado){

        musica.currentTime =
        parseFloat(tiempoGuardado);

    }

    if(localStorage.getItem("musica") == "on"){

        musica.play().catch(()=>{});

        if(btnMusica){

            btnMusica.innerHTML =
            "🎵 Música ON";

        }

    }else{

        if(btnMusica){

            btnMusica.innerHTML =
            "🔇 Música OFF";

        }

    }

}

// ===============================
// GUARDAR EL TIEMPO
// ===============================

if(musica){

    setInterval(function(){

        if(!musica.paused){

            localStorage.setItem(
                "tiempoMusica",
                musica.currentTime
            );

        }

    },1000);

}

// ===============================
// CAMBIAR CANCIÓN
// ===============================

function siguienteCancion(){

    cancionActual++;

    if(cancionActual >= canciones.length){

        cancionActual = 0;

    }
musica.pause();

musica.src = canciones[cancionActual];

musica.load();

musica.currentTime = 0;

musica.play().catch(function(e){
    console.log(e);
});

    localStorage.setItem(
        "cancionActual",
        cancionActual
    );

    localStorage.setItem(
        "tiempoMusica",
        0
    );

    localStorage.setItem(
        "musica",
        "on"
    );

    if(btnMusica){

        btnMusica.innerHTML =
        "🎵 Música ON";

    }

}

// ===============================
// CUANDO TERMINA LA CANCIÓN
// ===============================

if(musica){

    musica.addEventListener("ended",function(){

        siguienteCancion();

    });

}

// ===============================
// BOTÓN MÚSICA
// ===============================

if(btnMusica){

    btnMusica.onclick = function(){

        if(musica.paused){

            musica.play();

            btnMusica.innerHTML =
            "🎵 Música ON";

            localStorage.setItem(
                "musica",
                "on"
            );

        }else{

            musica.pause();

            btnMusica.innerHTML =
            "🔇 Música OFF";

            localStorage.setItem(
                "musica",
                "off"
            );

        }

    };

}

// ===============================
// BOTÓN SIGUIENTE
// ===============================

if(btnSiguiente){

    btnSiguiente.onclick = function(){

        siguienteCancion();

    };

}