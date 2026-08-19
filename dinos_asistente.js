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

        btnAsistencia.innerHTML =
            "🦖 Asistencia OFF";

        asistente.style.display =
            "none";

    };

}