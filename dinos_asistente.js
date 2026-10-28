//==================================
// DINOS ASISTENTE
//==================================


//==================================
// BOTÓN
//==================================

const btnAsistencia =
    document.getElementById("btnAsistencia");


//==================================
// VARIABLES
//==================================

let asistenciaActiva = false;


//==================================
// CONTENEDOR PRINCIPAL
//==================================

const asistente =
    document.createElement("div");

asistente.id =
    "dinosAsistente";

document.body.appendChild(
    asistente
);


//==================================
// MENSAJE
//==================================

const mensajeAsistente =
    document.createElement("div");

mensajeAsistente.id =
    "mensajeAsistente";

mensajeAsistente.innerHTML =
    "💬 ¡Hola! ¿Con cuál Dino querés hablar?";

asistente.appendChild(
    mensajeAsistente
);


//==================================
// CONTENEDOR DE DINOS
//==================================

const contenedorDinos =
    document.createElement("div");

contenedorDinos.id =
    "contenedorDinos";

asistente.appendChild(
    contenedorDinos
);


//==================================
// CREAR DINOS
//==================================

dinos.forEach(function(dinoInfo){

    const contenedor =
        document.createElement("div");

    contenedor.className =
        "contenedorDino";


    //----------------------------------
    // CÍRCULO
    //----------------------------------

    const dino =
        document.createElement("button");

    dino.className =
        "dinoAsistente";

    dino.dataset.dino =
        dinoInfo.id;

    dino.dataset.nombre =
        dinoInfo.nombre;

    dino.classList.add(
        "dino-" + dinoInfo.color
    );


    //----------------------------------
    // NOMBRE
    //----------------------------------

    const nombre =
        document.createElement("span");

    nombre.className =
        "nombreDino";

    nombre.innerHTML =
        dinoInfo.nombre;


    //----------------------------------
    // CLIC
    //----------------------------------

    dino.onclick = function(){

        seleccionarDino(
            dinoInfo.id
        );

    };


    //----------------------------------
    // AGREGAR
    //----------------------------------

    contenedor.appendChild(
        dino
    );

    contenedor.appendChild(
        nombre
    );

    contenedorDinos.appendChild(
        contenedor
    );

});


//==================================
// BOTÓN HABLAR
//==================================

const btnHablar =
    document.createElement("button");

btnHablar.id =
    "btnHablarDino";

btnHablar.innerHTML =
    "💬 Hablar";

btnHablar.style.display =
    "none";

asistente.appendChild(
    btnHablar
);

const sugerenciaAsistente = document.createElement("aside");
sugerenciaAsistente.id = "sugerenciaDinoAsistente";
sugerenciaAsistente.setAttribute("aria-live", "polite");
sugerenciaAsistente.hidden = true;

const imagenSugerenciaAsistente = document.createElement("img");
imagenSugerenciaAsistente.id = "imagenSugerenciaDino";
imagenSugerenciaAsistente.alt = "";

const textoSugerenciaAsistente = document.createElement("p");
textoSugerenciaAsistente.id = "textoSugerenciaDino";

const accionesSugerenciaAsistente = document.createElement("div");
accionesSugerenciaAsistente.className = "accionesSugerenciaDino";

const btnHablarSugerencia = document.createElement("button");
btnHablarSugerencia.id = "btnHablarSugerenciaDino";
btnHablarSugerencia.type = "button";

const btnCerrarSugerencia = document.createElement("button");
btnCerrarSugerencia.id = "btnCerrarSugerenciaDino";
btnCerrarSugerencia.type = "button";
btnCerrarSugerencia.setAttribute("aria-label", "Cerrar sugerencia");
btnCerrarSugerencia.textContent = "×";

accionesSugerenciaAsistente.append(btnHablarSugerencia, btnCerrarSugerencia);
sugerenciaAsistente.append(imagenSugerenciaAsistente, textoSugerenciaAsistente, accionesSugerenciaAsistente);
document.body.appendChild(sugerenciaAsistente);

const imagenesSugerenciaDino = {
    Ale: "dino1.jpg",
    Leo: "dino3.jpg",
    Nico: "dino4.jpg"
};

const frasesSugerenciaDino = {
    Ale: [
        "¿Por qué no probás una partida de Memory? Un poco de estrategia y vemos cómo te va.",
        "¿Ya escuchaste la música de la página? Podría acompañar bien mientras explorás.",
        "¿Querés hablar un rato? Estoy acá para escucharte.",
        "¿Leíste el capítulo uno del modo historia? Ahí empieza la aventura."
    ],
    Leo: [
        "¡Ey! ¿Por qué no jugás una partida? Prometo no festejar antes de tiempo... capaz 😄",
        "¿Ya escuchaste la música de la página? Ponela y seguimos explorando.",
        "¿Querés hablar un rato? ¡Tengo tiempo y una que otra idea!",
        "¿Leíste el capítulo uno? Dale, que quiero saber qué te parece la aventura."
    ],
    Nico: [
        "¿Te pinta jugar una partida de Memory? Está bueno para despejar un rato.",
        "¿Ya escuchaste la música de la página? Si querés, exploramos algo mientras suena.",
        "¿Querés charlar un rato? Podemos hablar de lo que tengas ganas.",
        "¿Leíste el capítulo uno del modo historia? Es un buen lugar para empezar."
    ]
};

const ESPERA_PRIMERA_SUGERENCIA_DINO = 30000;
const ESPERA_SIGUIENTE_SUGERENCIA_DINO = 75000;
let proximaSugerenciaDino = 0;
let dinoSugerenciaActual = null;

function obtenerSugerenciaLocalDino() {
    const dinoInfo = dinos[Math.floor(Math.random() * dinos.length)];
    const frases = frasesSugerenciaDino[dinoInfo.nombre];
    return {
        dino: dinoInfo,
        texto: frases[Math.floor(Math.random() * frases.length)]
    };
}

function mostrarSugerenciaLocalDino() {
    const sugerencia = obtenerSugerenciaLocalDino();
    dinoSugerenciaActual = sugerencia.dino;
    imagenSugerenciaAsistente.src = imagenesSugerenciaDino[sugerencia.dino.nombre];
    imagenSugerenciaAsistente.alt = sugerencia.dino.nombre;
    textoSugerenciaAsistente.textContent = sugerencia.texto;
    btnHablarSugerencia.textContent = "Hablar con " + sugerencia.dino.nombre;
    sugerenciaAsistente.hidden = false;
}

function ocultarSugerenciaLocalDino() {
    sugerenciaAsistente.hidden = true;
    proximaSugerenciaDino = Date.now() + ESPERA_SIGUIENTE_SUGERENCIA_DINO;
}

window.ocultarSugerenciaLocalDino = ocultarSugerenciaLocalDino;

btnCerrarSugerencia.addEventListener("click", ocultarSugerenciaLocalDino);

btnHablarSugerencia.addEventListener("click", function () {
    if (dinoSugerenciaActual) {
        sugerenciaAsistente.hidden = true;
        abrirChatDino(dinoSugerenciaActual);
    }
});

setInterval(function () {
    if (!asistenciaActiva) {
        sugerenciaAsistente.hidden = true;
        return;
    }

    const chatAbierto = document.getElementById("seccionChatDino");
    if (chatAbierto && getComputedStyle(chatAbierto).display !== "none") {
        sugerenciaAsistente.hidden = true;
        proximaSugerenciaDino = Date.now() + ESPERA_SIGUIENTE_SUGERENCIA_DINO;
        return;
    }

    if (sugerenciaAsistente.hidden && Date.now() >= proximaSugerenciaDino) {
        mostrarSugerenciaLocalDino();
    }
}, 5000);


//==================================
// SELECCIONAR DINO
//==================================

function seleccionarDino(numero){

    const dinoInfo =
        obtenerDino(numero);

    if(!dinoInfo){

        return;

    }


    //----------------------------------
    // GUARDAR
    //----------------------------------

    dinoSeleccionado =
        numero;

    localStorage.setItem(
        "dinoSeleccionado",
        numero
    );


    //----------------------------------
    // QUITAR SELECCIÓN
    //----------------------------------

    const botones =
        document.querySelectorAll(
            ".dinoAsistente"
        );

    botones.forEach(function(boton){

        boton.classList.remove(
            "dinoSeleccionado"
        );

    });


    //----------------------------------
    // MARCAR DINO
    //----------------------------------

    const seleccionado =
        document.querySelector(
            '.dinoAsistente[data-dino="' +
            numero +
            '"]'
        );

    if(seleccionado){

        seleccionado.classList.add(
            "dinoSeleccionado"
        );

    }


    //----------------------------------
    // MENSAJE
    //----------------------------------

    mensajeAsistente.innerHTML =
        "Elegiste a " +
        dinoInfo.nombre;


    //----------------------------------
    // BOTÓN HABLAR
    //----------------------------------

    btnHablar.style.display =
        "block";

    btnHablar.innerHTML =
        "💬 Hablar con " +
        dinoInfo.nombre;


    //----------------------------------
    // CERRAR PANEL
    //----------------------------------

    asistente.style.display =
        "none";

    asistenciaActiva =
        true;

    btnAsistencia.innerHTML =
        "🦖 Asistencia ON";

}


//==================================
// BOTÓN HABLAR
//==================================

btnHablar.onclick = function(){

    const dino =
        obtenerDinoSeleccionado();

    if(!dino){

        return;

    }


    //----------------------------------
    // PREPARADO PARA EL CHAT
    //----------------------------------

    abrirChatDino(
        dino
    );

};


//==================================
// ACTIVAR / DESACTIVAR
//==================================

if(btnAsistencia){

    btnAsistencia.onclick =
        function(){


        //----------------------------------
        // ACTIVAR
        //----------------------------------

        if(!asistenciaActiva){

            asistenciaActiva =
                true;

            proximaSugerenciaDino =
                Date.now() + ESPERA_PRIMERA_SUGERENCIA_DINO;

            btnAsistencia.innerHTML =
                "🦖 Asistencia ON";

            mensajeAsistente.innerHTML =
                "💬 ¡Hola! ¿Con cuál Dino querés hablar?";

            asistente.style.display =
                "block";

            return;

        }


        //----------------------------------
        // ABRIR PANEL
        //----------------------------------

        if(
            asistente.style.display ===
            "none"
        ){

            mensajeAsistente.innerHTML =
                "💬 ¡Hola! ¿Con cuál Dino querés hablar?";

            asistente.style.display =
                "block";

            return;

        }


        //----------------------------------
        // DESACTIVAR
        //----------------------------------

        asistenciaActiva =
            false;

        sugerenciaAsistente.hidden =
            true;

        btnAsistencia.innerHTML =
            "🦖 Asistencia OFF";

        asistente.style.display =
            "none";

    };

}