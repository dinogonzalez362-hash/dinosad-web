//==================================
// CHAT DE LOS DINOS
// DINOSAD WEB
//==================================


//==================================
// ELEMENTOS
//==================================

const seccionChatDino =
    document.getElementById(
        "seccionChatDino"
    );

const btnVolverChat =
    document.getElementById(
        "btnVolverChat"
    );

const nombreDinoChat =
    document.getElementById(
        "nombreDinoChat"
    );

const estadoDinoChat =
    document.getElementById(
        "estadoDinoChat"
    );

const caraDinoChat =
    document.getElementById(
        "caraDinoChat"
    );

const mensajesChatDino =
    document.getElementById(
        "mensajesChatDino"
    );

const inputChatDino =
    document.getElementById(
        "inputChatDino"
    );

const btnEnviarChatDino =
    document.getElementById(
        "btnEnviarChatDino"
    );


//==================================
// DINO ACTUAL
//==================================

let dinoChatActual =
    null;


//==================================
// ABRIR CHAT
//==================================

function abrirChatDino(dino) {

    if (!dino) {

        return;

    }


    dinoChatActual =
        dino;


    //----------------------------------
    // NOMBRE
    //----------------------------------

    nombreDinoChat.innerHTML =
        dino.nombre;


    //----------------------------------
    // ESTADO
    //----------------------------------

    estadoDinoChat.innerHTML =
        "En línea";


    //----------------------------------
    // COLOR
    //----------------------------------

    caraDinoChat.style.background =
        dino.colorPrincipal;


    //----------------------------------
    // LIMPIAR PANTALLA
    //----------------------------------

    mensajesChatDino.innerHTML =
        "";


    //----------------------------------
    // CARGAR CONVERSACIÓN
    //----------------------------------

    let conversacion =
        null;


    if (
        typeof obtenerConversacionDino ===
        "function"
    ) {

        conversacion =
            obtenerConversacionDino(
                dino.nombre
            );

    }


    //----------------------------------
    // MOSTRAR HISTORIAL
    //----------------------------------

    if (
        conversacion &&
        conversacion.mensajes &&
        conversacion.mensajes.length > 0
    ) {

        for (
            const mensaje
            of conversacion.mensajes
        ) {

            agregarMensajeDino(
                mensaje.texto,
                mensaje.tipo,
                false
            );

        }

    }

    else {

        //----------------------------------
        // MENSAJE INICIAL
        //----------------------------------

        agregarMensajeDino(
            "Hola 👋 Soy " +
            dino.nombre +
            ".",
            "dino",
            true
        );

    }


    //----------------------------------
    // OCULTAR INICIO
    //----------------------------------

    const inicio =
        document.getElementById(
            "inicio"
        );


    if (inicio) {

        inicio.style.display =
            "none";

    }


    //----------------------------------
    // MOSTRAR CHAT
    //----------------------------------

    seccionChatDino.style.display =
        "block";


    //----------------------------------
    // IR ARRIBA
    //----------------------------------

    window.scrollTo(
        0,
        0
    );


    //----------------------------------
    // ENFOCAR INPUT
    //----------------------------------

    setTimeout(
        function () {

            if (inputChatDino) {

                inputChatDino.focus();

            }

        },
        100
    );

}


//==================================
// AGREGAR MENSAJE
//==================================

function agregarMensajeDino(
    texto,
    tipo,
    guardar = true
) {

    if (!texto) {

        return;

    }


    //----------------------------------
    // CREAR MENSAJE
    //----------------------------------

    const mensaje =
        document.createElement(
            "div"
        );


    mensaje.className =
        "mensajeDino " +
        tipo;


    //----------------------------------
    // TEXTO
    //----------------------------------

    const textoMensaje =
        document.createElement(
            "span"
        );


    textoMensaje.innerHTML =
        texto;


    mensaje.appendChild(
        textoMensaje
    );


    //----------------------------------
    // AÑADIR AL CHAT
    //----------------------------------

    mensajesChatDino.appendChild(
        mensaje
    );


    //----------------------------------
    // GUARDAR
    //----------------------------------

    if (
        guardar &&
        dinoChatActual &&
        typeof guardarMensajeConversacion ===
        "function"
    ) {

        guardarMensajeConversacion(
            dinoChatActual.nombre,
            texto,
            tipo
        );

    }


    //----------------------------------
    // BAJAR CHAT
    //----------------------------------

    mensajesChatDino.scrollTop =
        mensajesChatDino.scrollHeight;

}


//==================================
// ENVIAR MENSAJE
//==================================

function enviarMensajeDino() {

    const texto =
        inputChatDino.value.trim();


    //----------------------------------
    // EVITAR VACÍO
    //----------------------------------

    if (!texto) {

        return;

    }


    //----------------------------------
    // COMPROBAR DINO
    //----------------------------------

    if (!dinoChatActual) {

        return;

    }


    //----------------------------------
    // MOSTRAR MENSAJE
    //----------------------------------

    agregarMensajeDino(
        texto,
        "usuario"
    );


    //----------------------------------
    // LIMPIAR INPUT
    //----------------------------------

    inputChatDino.value =
        "";


    //----------------------------------
    // ENVIAR A GEMINI
    //----------------------------------

    obtenerRespuestaGemini(
        texto,
        dinoChatActual
    );

}


//==================================
// RESPUESTA DE GEMINI
//==================================

async function obtenerRespuestaGemini(
    mensaje,
    dino
) {

    //----------------------------------
    // COMPROBAR DINO
    //----------------------------------

    if (!dino) {

        return;

    }


    //----------------------------------
    // MENSAJE DE ESPERA
    //----------------------------------

    agregarMensajeDino(
        "🤔 " +
        dino.nombre +
        " está pensando...",
        "dino"
    );


    //----------------------------------
    // COMPROBAR IA
    //----------------------------------

    if (
        typeof enviarMensajeAGemini !==
        "function"
    ) {

        agregarMensajeDino(
            "❌ La conexión con Gemini no está disponible.",
            "dino"
        );

        return;

    }


    //----------------------------------
    // ENVIAR A GEMINI
    //----------------------------------

    const respuesta =
        await enviarMensajeAGemini(
            mensaje,
            dino
        );


    //----------------------------------
    // MOSTRAR RESPUESTA
    //----------------------------------

    agregarMensajeDino(
        respuesta,
        "dino"
    );

}


//==================================
// BOTÓN ENVIAR
//==================================

if (btnEnviarChatDino) {

    btnEnviarChatDino.onclick =
        function () {

            enviarMensajeDino();

        };

}


//==================================
// ENTER
//==================================

if (inputChatDino) {

    inputChatDino.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Enter"
            ) {

                event.preventDefault();

                enviarMensajeDino();

            }

        }
    );

}


//==================================
// VOLVER
//==================================

if (btnVolverChat) {

    btnVolverChat.onclick =
        function () {

            //----------------------------------
            // OCULTAR CHAT
            //----------------------------------

            seccionChatDino.style.display =
                "none";


            //----------------------------------
            // MOSTRAR INICIO
            //----------------------------------

            const inicio =
                document.getElementById(
                    "inicio"
                );


            if (inicio) {

                inicio.style.display =
                    "block";

            }


            //----------------------------------
            // LIMPIAR DINO
            //----------------------------------

            dinoChatActual =
                null;


            //----------------------------------
            // ARRIBA
            //----------------------------------

            window.scrollTo(
                0,
                0
            );

        };

}


//==================================
// FIN DEL CHAT
//==================================