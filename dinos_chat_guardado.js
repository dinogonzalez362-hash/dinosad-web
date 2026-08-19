//==================================
// GUARDADO DE CONVERSACIONES
// DINOSAD WEB
//==================================


//==================================
// CONFIGURACIÓN
//==================================

// Tiempo máximo de una conversación
// 72 horas

const TIEMPO_CONVERSACION =
    72 * 60 * 60 * 1000;


// Nombre utilizado en localStorage

const CLAVE_CONVERSACIONES =
    "dinoSad_conversaciones";


//==================================
// OBTENER CONVERSACIONES
//==================================

function obtenerConversacionesGuardadas() {

    try {

        const datos =
            localStorage.getItem(
                CLAVE_CONVERSACIONES
            );


        if (!datos) {

            return {};

        }


        return JSON.parse(datos);

    }

    catch (error) {

        console.error(
            "❌ Error leyendo conversaciones:",
            error
        );

        return {};

    }

}


//==================================
// GUARDAR TODAS LAS CONVERSACIONES
//==================================

function guardarTodasLasConversaciones(
    conversaciones
) {

    try {

        localStorage.setItem(
            CLAVE_CONVERSACIONES,
            JSON.stringify(
                conversaciones
            )
        );

    }

    catch (error) {

        console.error(
            "❌ Error guardando conversaciones:",
            error
        );

    }

}


//==================================
// COMPROBAR SI EXISTE UN DINO
//==================================

function existeConversacionDino(
    nombreDino
) {

    const conversaciones =
        obtenerConversacionesGuardadas();


    return !!conversaciones[
        nombreDino
    ];

}


//==================================
// OBTENER CONVERSACIÓN
//==================================

function obtenerConversacionDino(
    nombreDino
) {

    const conversaciones =
        obtenerConversacionesGuardadas();


    const conversacion =
        conversaciones[
            nombreDino
        ];


    if (!conversacion) {

        return null;

    }


    //----------------------------------
    // COMPROBAR EXPIRACIÓN
    //----------------------------------

    const ahora =
        Date.now();


    const ultimaActividad =
        conversacion.ultimaActividad ||
        0;


    const tiempoPasado =
        ahora -
        ultimaActividad;


    if (
        tiempoPasado >
        TIEMPO_CONVERSACION
    ) {

        eliminarConversacionDino(
            nombreDino
        );


        return null;

    }


    return conversacion;

}


//==================================
// CREAR CONVERSACIÓN
//==================================

function crearConversacionDino(
    nombreDino
) {

    const conversaciones =
        obtenerConversacionesGuardadas();


    if (
        !conversaciones[
            nombreDino
        ]
    ) {

        conversaciones[
            nombreDino
        ] = {

            mensajes: [],

            ultimaActividad:
                Date.now()

        };


        guardarTodasLasConversaciones(
            conversaciones
        );

    }


    return conversaciones[
        nombreDino
    ];

}


//==================================
// GUARDAR MENSAJE
//==================================

function guardarMensajeConversacion(
    nombreDino,
    texto,
    tipo
) {

    if (!nombreDino) {

        return;

    }


    if (!texto) {

        return;

    }


    const conversaciones =
        obtenerConversacionesGuardadas();


    //----------------------------------
    // CREAR SI NO EXISTE
    //----------------------------------

    if (
        !conversaciones[
            nombreDino
        ]
    ) {

        conversaciones[
            nombreDino
        ] = {

            mensajes: [],

            ultimaActividad:
                Date.now()

        };

    }


    //----------------------------------
    // AGREGAR MENSAJE
    //----------------------------------

    conversaciones[
        nombreDino
    ].mensajes.push({

        texto: texto,

        tipo: tipo,

        fecha:
            Date.now()

    });


    //----------------------------------
    // ACTUALIZAR ACTIVIDAD
    //----------------------------------

    conversaciones[
        nombreDino
    ].ultimaActividad =
        Date.now();


    //----------------------------------
    // GUARDAR
    //----------------------------------

    guardarTodasLasConversaciones(
        conversaciones
    );

}


//==================================
// ACTUALIZAR ACTIVIDAD
//==================================

function actualizarActividadDino(
    nombreDino
) {

    const conversaciones =
        obtenerConversacionesGuardadas();


    if (
        !conversaciones[
            nombreDino
        ]
    ) {

        return;

    }


    conversaciones[
        nombreDino
    ].ultimaActividad =
        Date.now();


    guardarTodasLasConversaciones(
        conversaciones
    );

}


//==================================
// ELIMINAR CONVERSACIÓN
//==================================

function eliminarConversacionDino(
    nombreDino
) {

    const conversaciones =
        obtenerConversacionesGuardadas();


    if (
        conversaciones[
            nombreDino
        ]
    ) {

        delete conversaciones[
            nombreDino
        ];


        guardarTodasLasConversaciones(
            conversaciones
        );

    }

}


//==================================
// ELIMINAR TODAS LAS VENCIDAS
//==================================

function limpiarConversacionesVencidas() {

    const conversaciones =
        obtenerConversacionesGuardadas();


    const ahora =
        Date.now();


    let cambios =
        false;


    for (
        const nombreDino
        in conversaciones
    ) {

        const conversacion =
            conversaciones[
                nombreDino
            ];


        //----------------------------------
        // CONVERSACIÓN INCORRECTA
        //----------------------------------

        if (
            !conversacion ||
            !conversacion.ultimaActividad
        ) {

            delete conversaciones[
                nombreDino
            ];


            cambios =
                true;


            continue;

        }


        //----------------------------------
        // TIEMPO TRANSCURRIDO
        //----------------------------------

        const tiempoPasado =
            ahora -
            conversacion.ultimaActividad;


        //----------------------------------
        // MÁS DE 72 HORAS
        //----------------------------------

        if (
            tiempoPasado >
            TIEMPO_CONVERSACION
        ) {

            delete conversaciones[
                nombreDino
            ];


            cambios =
                true;

        }

    }


    //----------------------------------
    // GUARDAR CAMBIOS
    //----------------------------------

    if (cambios) {

        guardarTodasLasConversaciones(
            conversaciones
        );

    }

}


//==================================
// BORRAR TODAS LAS CONVERSACIONES
//==================================

function borrarTodasLasConversaciones() {

    try {

        localStorage.removeItem(
            CLAVE_CONVERSACIONES
        );


        console.log(
            "🗑️ Todas las conversaciones fueron eliminadas."
        );

    }

    catch (error) {

        console.error(
            "❌ No se pudieron borrar:",
            error
        );

    }

}


//==================================
// LIMPIEZA AUTOMÁTICA
//==================================

// Se ejecuta cuando se carga este archivo

limpiarConversacionesVencidas();


// También revisamos periódicamente

setInterval(
    function () {

        limpiarConversacionesVencidas();

    },
    60 * 60 * 1000
);


//==================================
// FIN
//==================================