// ==================================================
// ALE - SUBSECCIONES
// ==================================================


// ==================================================
// BOTONES Y SECCIONES
// ==================================================

let btnStickersIndividualesAle =
    document.getElementById(
        "btnStickersIndividualesAle"
    );

let btnPacksAle =
    document.getElementById(
        "btnPacksAle"
    );

let stickersIndividualesAle =
    document.getElementById(
        "stickersIndividualesAle"
    );

let packsAle =
    document.getElementById(
        "packsAle"
    );

let btnVolverStickersIndividualesAle =
    document.getElementById(
        "btnVolverStickersIndividualesAle"
    );

let btnVolverPacksAle =
    document.getElementById(
        "btnVolverPacksAle"
    );


// ==================================================
// ESTADO DE STICKERS INDIVIDUALES
// ==================================================

// Puede ser:
// "stickers"
// "descarga"
// "compartir"

let estadoStickersAle =
    "stickers";


// ==================================================
// ESTADO DE PACKS
// ==================================================

// Puede ser:
// "packs"
// "compartir"

let estadoPacksAle =
    "packs";


// ==================================================
// PÁGINAS DE STICKERS DE ALE
// ==================================================

let paginaStickersAle1 =
    document.getElementById(
        "paginaStickersAle1"
    );

let paginaStickersAle2 =
    document.getElementById(
        "paginaStickersAle2"
    );

let btnAnteriorStickersAle =
    document.getElementById(
        "btnAnteriorStickersAle"
    );

let btnSiguienteStickersAle =
    document.getElementById(
        "btnSiguienteStickersAle"
    );

let paginaActualStickersAle =
    1;


// ==================================================
// PÁGINAS DE PACKS DE ALE
// ==================================================

let paginaPacksAle1 =
    document.getElementById(
        "paginaPacksAle1"
    );

let paginaPacksAle2 =
    document.getElementById(
        "paginaPacksAle2"
    );

let btnAnteriorPacksAle =
    document.getElementById(
        "btnAnteriorPacksAle"
    );

let btnSiguientePacksAle =
    document.getElementById(
        "btnSiguientePacksAle"
    );

let paginaActualPacksAle =
    1;


// ==================================================
// OPCIONES DE STICKERS
// ==================================================

let opcionesDescargaStickerAle =
    document.getElementById(
        "opcionesDescargaStickerAle"
    );

let opcionesCompartirStickerAle =
    document.getElementById(
        "opcionesCompartirStickerAle"
    );


// ==================================================
// OPCIONES DE PACKS
// ==================================================

let opcionesCompartirPackAle =
    document.getElementById(
        "opcionesCompartirPackAle"
    );


// ==================================================
// STICKER SELECCIONADO
// ==================================================

let stickerAleSeleccionado =
    null;


// ==================================================
// PACK SELECCIONADO
// ==================================================

let packAleSeleccionado =
    null;


// ==================================================
// MOSTRAR NAVEGACIÓN DE STICKERS
// ==================================================

function mostrarNavegacionStickersAle() {

    if (btnAnteriorStickersAle) {

        btnAnteriorStickersAle.style.display =
            "inline-block";

    }

    if (btnSiguienteStickersAle) {

        btnSiguienteStickersAle.style.display =
            "inline-block";

    }

}


// ==================================================
// OCULTAR NAVEGACIÓN DE STICKERS
// ==================================================

function ocultarNavegacionStickersAle() {

    if (btnAnteriorStickersAle) {

        btnAnteriorStickersAle.style.display =
            "none";

    }

    if (btnSiguienteStickersAle) {

        btnSiguienteStickersAle.style.display =
            "none";

    }

}


// ==================================================
// MOSTRAR NAVEGACIÓN DE PACKS
// ==================================================

function mostrarNavegacionPacksAle() {

    if (btnAnteriorPacksAle) {

        btnAnteriorPacksAle.style.display =
            "inline-block";

    }

    if (btnSiguientePacksAle) {

        btnSiguientePacksAle.style.display =
            "inline-block";

    }

}


// ==================================================
// OCULTAR NAVEGACIÓN DE PACKS
// ==================================================

function ocultarNavegacionPacksAle() {

    if (btnAnteriorPacksAle) {

        btnAnteriorPacksAle.style.display =
            "none";

    }

    if (btnSiguientePacksAle) {

        btnSiguientePacksAle.style.display =
            "none";

    }

}


// ==================================================
// MOSTRAR PÁGINA DE STICKERS
// ==================================================

function mostrarPaginaStickersAle() {

    if (paginaStickersAle1) {

        paginaStickersAle1.style.display =
            "none";

    }

    if (paginaStickersAle2) {

        paginaStickersAle2.style.display =
            "none";

    }

    if (
        paginaActualStickersAle === 1 &&
        paginaStickersAle1
    ) {

        paginaStickersAle1.style.display =
            "block";

    }

    if (
        paginaActualStickersAle === 2 &&
        paginaStickersAle2
    ) {

        paginaStickersAle2.style.display =
            "block";

    }

}


// ==================================================
// MOSTRAR PÁGINA DE PACKS
// ==================================================

function mostrarPaginaPacksAle() {

    if (paginaPacksAle1) {

        paginaPacksAle1.style.display =
            "none";

    }

    if (paginaPacksAle2) {

        paginaPacksAle2.style.display =
            "none";

    }

    if (
        paginaActualPacksAle === 1 &&
        paginaPacksAle1
    ) {

        paginaPacksAle1.style.display =
            "block";

    }

    if (
        paginaActualPacksAle === 2 &&
        paginaPacksAle2
    ) {

        paginaPacksAle2.style.display =
            "block";

    }

}


// ==================================================
// ABRIR STICKERS INDIVIDUALES
// ==================================================

if (btnStickersIndividualesAle) {

    btnStickersIndividualesAle.onclick =
        function () {

            if (coleccionAle) {

                coleccionAle.style.display =
                    "none";

            }

            if (stickersIndividualesAle) {

                stickersIndividualesAle.style.display =
                    "block";

            }

            if (packsAle) {

                packsAle.style.display =
                    "none";

            }

            if (opcionesDescargaStickerAle) {

                opcionesDescargaStickerAle.style.display =
                    "none";

            }

            if (opcionesCompartirStickerAle) {

                opcionesCompartirStickerAle.style.display =
                    "none";

            }

            estadoStickersAle =
                "stickers";

            mostrarPaginaStickersAle();

            mostrarNavegacionStickersAle();

        };

}


// ==================================================
// ABRIR PACKS
// ==================================================

if (btnPacksAle) {

    btnPacksAle.onclick =
        function () {

            if (coleccionAle) {

                coleccionAle.style.display =
                    "none";

            }

            if (stickersIndividualesAle) {

                stickersIndividualesAle.style.display =
                    "none";

            }

            if (packsAle) {

                packsAle.style.display =
                    "block";

            }

            if (opcionesCompartirPackAle) {

                opcionesCompartirPackAle.style.display =
                    "none";

            }

            estadoPacksAle =
                "packs";

            mostrarPaginaPacksAle();

            mostrarNavegacionPacksAle();

        };

}


// ==================================================
// SIGUIENTE PÁGINA STICKERS
// ==================================================

if (btnSiguienteStickersAle) {

    btnSiguienteStickersAle.onclick =
        function () {

            if (
                estadoStickersAle !==
                "stickers"
            ) {

                return;

            }

            if (
                paginaActualStickersAle < 2
            ) {

                paginaActualStickersAle++;

                mostrarPaginaStickersAle();

            }

        };

}


// ==================================================
// PÁGINA ANTERIOR STICKERS
// ==================================================

if (btnAnteriorStickersAle) {

    btnAnteriorStickersAle.onclick =
        function () {

            if (
                estadoStickersAle !==
                "stickers"
            ) {

                return;

            }

            if (
                paginaActualStickersAle > 1
            ) {

                paginaActualStickersAle--;

                mostrarPaginaStickersAle();

            }

        };

}


// ==================================================
// SIGUIENTE PÁGINA PACKS
// ==================================================

if (btnSiguientePacksAle) {

    btnSiguientePacksAle.onclick =
        function () {

            if (
                estadoPacksAle !==
                "packs"
            ) {

                return;

            }

            if (
                paginaActualPacksAle < 2
            ) {

                paginaActualPacksAle++;

                mostrarPaginaPacksAle();

            }

        };

}


// ==================================================
// PÁGINA ANTERIOR PACKS
// ==================================================

if (btnAnteriorPacksAle) {

    btnAnteriorPacksAle.onclick =
        function () {

            if (
                estadoPacksAle !==
                "packs"
            ) {

                return;

            }

            if (
                paginaActualPacksAle > 1
            ) {

                paginaActualPacksAle--;

                mostrarPaginaPacksAle();

            }

        };

}


// ==================================================
// ABRIR OPCIONES DE DESCARGA
// ==================================================

function abrirOpcionesDescargaAle() {

    estadoStickersAle =
        "descarga";

    if (paginaStickersAle1) {

        paginaStickersAle1.style.display =
            "none";

    }

    if (paginaStickersAle2) {

        paginaStickersAle2.style.display =
            "none";

    }

    ocultarNavegacionStickersAle();

    if (opcionesCompartirStickerAle) {

        opcionesCompartirStickerAle.style.display =
            "none";

    }

    if (opcionesDescargaStickerAle) {

        opcionesDescargaStickerAle.style.display =
            "block";

    }

}


// ==================================================
// ABRIR OPCIONES DE COMPARTIR STICKER
// ==================================================

function abrirOpcionesCompartirAle() {

    estadoStickersAle =
        "compartir";

    if (paginaStickersAle1) {

        paginaStickersAle1.style.display =
            "none";

    }

    if (paginaStickersAle2) {

        paginaStickersAle2.style.display =
            "none";

    }

    ocultarNavegacionStickersAle();

    if (opcionesDescargaStickerAle) {

        opcionesDescargaStickerAle.style.display =
            "none";

    }

    if (opcionesCompartirStickerAle) {

        opcionesCompartirStickerAle.style.display =
            "block";

    }

}


// ==================================================
// VOLVER A LOS STICKERS
// ==================================================

function volverAStickersAle() {

    if (opcionesDescargaStickerAle) {

        opcionesDescargaStickerAle.style.display =
            "none";

    }

    if (opcionesCompartirStickerAle) {

        opcionesCompartirStickerAle.style.display =
            "none";

    }

    estadoStickersAle =
        "stickers";

    mostrarPaginaStickersAle();

    mostrarNavegacionStickersAle();

}


// ==================================================
// ABRIR COMPARTIR PACK
// ==================================================

function abrirOpcionesCompartirPackAle() {

    estadoPacksAle =
        "compartir";

    if (paginaPacksAle1) {

        paginaPacksAle1.style.display =
            "none";

    }

    if (paginaPacksAle2) {

        paginaPacksAle2.style.display =
            "none";

    }

    ocultarNavegacionPacksAle();

    if (opcionesCompartirPackAle) {

        opcionesCompartirPackAle.style.display =
            "block";

    }

}


// ==================================================
// VOLVER A LOS PACKS
// ==================================================

function volverAPacksAle() {

    if (opcionesCompartirPackAle) {

        opcionesCompartirPackAle.style.display =
            "none";

    }

    estadoPacksAle =
        "packs";

    mostrarPaginaPacksAle();

    mostrarNavegacionPacksAle();

}


// ==================================================
// BOTONES DESCARGAR STICKER
// ==================================================

let botonesDescargarStickerAle =
    document.querySelectorAll(
        ".btnDescargarStickerAle"
    );

botonesDescargarStickerAle.forEach(
    function (boton) {

        boton.onclick =
            function () {

                let tarjeta =
                    boton.closest(
                        ".stickerCard"
                    );

                if (!tarjeta) {

                    return;

                }

                stickerAleSeleccionado =
                    tarjeta.querySelector(
                        "img"
                    );

                abrirOpcionesDescargaAle();

            };

    }
);


// ==================================================
// BOTONES COMPARTIR STICKER
// ==================================================

let botonesCompartirStickerAle =
    document.querySelectorAll(
        ".btnCompartirStickerAle"
    );

botonesCompartirStickerAle.forEach(
    function (boton) {

        boton.onclick =
            function () {

                let tarjeta =
                    boton.closest(
                        ".stickerCard"
                    );

                if (!tarjeta) {

                    return;

                }

                stickerAleSeleccionado =
                    tarjeta.querySelector(
                        "img"
                    );

                abrirOpcionesCompartirAle();

            };

    }
);


// ==================================================
// BOTONES DESCARGAR PACK
// ==================================================

let botonesDescargarPackAle =
    document.querySelectorAll(
        ".btnDescargarPackAle"
    );

botonesDescargarPackAle.forEach(
    function (boton) {

        boton.onclick =
            function () {

                let numeroPack =
                    boton.dataset.pack;

                alert(
                    "📱 La descarga del Pack Ale " +
                    numeroPack +
                    " estará disponible con la futura " +
                    "aplicación de stickers."
                );

            };

    }
);


// ==================================================
// BOTONES COMPARTIR PACK
// ==================================================

let botonesCompartirPackAle =
    document.querySelectorAll(
        ".btnCompartirPackAle"
    );

botonesCompartirPackAle.forEach(
    function (boton) {

        boton.onclick =
            function () {

                let tarjeta =
                    boton.closest(
                        ".packCard"
                    );

                if (!tarjeta) {

                    return;

                }

                packAleSeleccionado =
                    tarjeta.querySelector(
                        "img"
                    );

                abrirOpcionesCompartirPackAle();

            };

    }
);


// ==================================================
// CERRAR DESCARGA
// ==================================================

let btnCerrarDescargaAle =
    document.getElementById(
        "btnCerrarDescargaAle"
    );

if (btnCerrarDescargaAle) {

    btnCerrarDescargaAle.onclick =
        function () {

            volverAStickersAle();

        };

}


// ==================================================
// CERRAR COMPARTIR STICKER
// ==================================================

let btnCerrarCompartirAle =
    document.getElementById(
        "btnCerrarCompartirAle"
    );

if (btnCerrarCompartirAle) {

    btnCerrarCompartirAle.onclick =
        function () {

            volverAStickersAle();

        };

}


// ==================================================
// CERRAR COMPARTIR PACK
// ==================================================

let btnCerrarCompartirPackAle =
    document.getElementById(
        "btnCerrarCompartirPackAle"
    );

if (btnCerrarCompartirPackAle) {

    btnCerrarCompartirPackAle.onclick =
        function () {

            volverAPacksAle();

        };

}


// ==================================================
// VOLVER DE STICKERS INDIVIDUALES
// ==================================================

if (btnVolverStickersIndividualesAle) {

    btnVolverStickersIndividualesAle.onclick =
        function () {

            if (
                estadoStickersAle ===
                "descarga"
            ) {

                volverAStickersAle();

                return;

            }

            if (
                estadoStickersAle ===
                "compartir"
            ) {

                volverAStickersAle();

                return;

            }

            if (stickersIndividualesAle) {

                stickersIndividualesAle.style.display =
                    "none";

            }

            if (coleccionAle) {

                coleccionAle.style.display =
                    "block";

            }

        };

}


// ==================================================
// VOLVER DE PACKS
// ==================================================

if (btnVolverPacksAle) {

    btnVolverPacksAle.onclick =
        function () {

            if (
                estadoPacksAle ===
                "compartir"
            ) {

                volverAPacksAle();

                return;

            }

            if (packsAle) {

                packsAle.style.display =
                    "none";

            }

            if (coleccionAle) {

                coleccionAle.style.display =
                    "block";

            }

        };

}


// ==================================================
// DESCARGAR STICKER EN FUTURA APP
// ==================================================

let btnDescargarStickerAppAle =
    document.getElementById(
        "btnDescargarStickerAppAle"
    );

if (btnDescargarStickerAppAle) {

    btnDescargarStickerAppAle.onclick =
        function () {

            alert(
                "📱 Esta función estará disponible " +
                "con la futura aplicación de stickers."
            );

        };

}


// ==================================================
// DESCARGAR COMO IMAGEN
// ==================================================

let btnDescargarImagenAle =
    document.getElementById(
        "btnDescargarImagenAle"
    );

if (btnDescargarImagenAle) {

    btnDescargarImagenAle.onclick =
        function () {

            if (!stickerAleSeleccionado) {

                alert(
                    "❌ No se encontró el sticker."
                );

                return;

            }

            let enlace =
                document.createElement(
                    "a"
                );

            enlace.href =
                stickerAleSeleccionado.src;

            enlace.download =
                "sticker-ale.png";

            document.body.appendChild(
                enlace
            );

            enlace.click();

            document.body.removeChild(
                enlace
            );

        };

}


// ==================================================
// OBTENER ENLACE DEL STICKER
// ==================================================

function obtenerEnlaceStickerAle() {

    return window.location.href;

}


// ==================================================
// OBTENER ENLACE DEL PACK
// ==================================================

function obtenerEnlacePackAle() {

    return window.location.href;

}


// ==================================================
// WHATSAPP STICKER
// ==================================================

let btnCompartirWhatsAppAle =
    document.getElementById(
        "btnCompartirWhatsAppAle"
    );

if (btnCompartirWhatsAppAle) {

    btnCompartirWhatsAppAle.onclick =
        function () {

            let enlace =
                obtenerEnlaceStickerAle();

            let mensaje =
                "🦖 Mirá este sticker de Ale " +
                "de DinoSad Web:\n\n" +
                enlace;

            let url =
                "https://wa.me/?text=" +
                encodeURIComponent(
                    mensaje
                );

            window.open(
                url,
                "_blank"
            );

        };

}


// ==================================================
// WHATSAPP PACK
// ==================================================

let btnCompartirWhatsAppPackAle =
    document.getElementById(
        "btnCompartirWhatsAppPackAle"
    );

if (btnCompartirWhatsAppPackAle) {

    btnCompartirWhatsAppPackAle.onclick =
        function () {

            let mensaje =
                "🦖 Mirá este pack de stickers de Ale:\n\n" +
                obtenerEnlacePackAle();

            let enlaceWhatsApp =
                "https://wa.me/?text=" +
                encodeURIComponent(
                    mensaje
                );

            window.open(
                enlaceWhatsApp,
                "_blank"
            );

        };

}


// ==================================================
// COMPARTIR STICKER EN...
// ==================================================

let btnCompartirEnAle =
    document.getElementById(
        "btnCompartirEnAle"
    );

if (btnCompartirEnAle) {

    btnCompartirEnAle.onclick =
        async function () {

            if (!stickerAleSeleccionado) {

                return;

            }

            if (navigator.share) {

                try {

                    await navigator.share({

                        title:
                            stickerAleSeleccionado.alt,

                        text:
                            "🦖 Mirá este sticker de Ale de DinoSad Web.",

                        url:
                            obtenerEnlaceStickerAle()

                    });

                }
                catch (error) {

                    console.log(
                        "Compartir cancelado."
                    );

                }

            }
            else {

                alert(
                    "⚠️ Tu navegador no permite " +
                    "el menú de compartir."
                );

            }

        };

}


// ==================================================
// COMPARTIR PACK EN...
// ==================================================

let btnCompartirNativoPackAle =
    document.getElementById(
        "btnCompartirNativoPackAle"
    );

if (btnCompartirNativoPackAle) {

    btnCompartirNativoPackAle.onclick =
        async function () {

            if (navigator.share) {

                try {

                    await navigator.share({

                        title:
                            "Pack de stickers de Ale",

                        text:
                            "🦖 Mirá este pack de stickers de Ale.",

                        url:
                            obtenerEnlacePackAle()

                    });

                }
                catch (error) {

                    console.log(
                        "Compartir cancelado."
                    );

                }

            }
            else {

                alert(
                    "📤 Tu dispositivo o navegador no admite " +
                    "el menú de compartir."
                );

            }

        };

}


// ==================================================
// COPIAR ENLACE STICKER
// ==================================================

let btnCopiarEnlaceAle =
    document.getElementById(
        "btnCopiarEnlaceAle"
    );

if (btnCopiarEnlaceAle) {

    btnCopiarEnlaceAle.onclick =
        async function () {

            let enlace =
                obtenerEnlaceStickerAle();

            if (navigator.clipboard) {

                try {

                    await navigator.clipboard.writeText(
                        enlace
                    );

                    alert(
                        "✅ ¡Enlace copiado!"
                    );

                    return;

                }
                catch (error) {

                    console.log(
                        "No se pudo usar Clipboard API."
                    );

                }

            }

            let campo =
                document.createElement(
                    "textarea"
                );

            campo.value =
                enlace;

            document.body.appendChild(
                campo
            );

            campo.select();

            document.execCommand(
                "copy"
            );

            document.body.removeChild(
                campo
            );

            alert(
                "✅ ¡Enlace copiado!"
            );

        };

}


// ==================================================
// COPIAR ENLACE PACK
// ==================================================

let btnCopiarEnlacePackAle =
    document.getElementById(
        "btnCopiarEnlacePackAle"
    );

if (btnCopiarEnlacePackAle) {

    btnCopiarEnlacePackAle.onclick =
        async function () {

            let enlace =
                obtenerEnlacePackAle();

            if (navigator.clipboard) {

                try {

                    await navigator.clipboard.writeText(
                        enlace
                    );

                    alert(
                        "🔗 ¡Enlace copiado!"
                    );

                    return;

                }
                catch (error) {

                    console.log(
                        "No se pudo usar Clipboard API."
                    );

                }

            }

            let campo =
                document.createElement(
                    "textarea"
                );

            campo.value =
                enlace;

            document.body.appendChild(
                campo
            );

            campo.select();

            document.execCommand(
                "copy"
            );

            document.body.removeChild(
                campo
            );

            alert(
                "🔗 ¡Enlace copiado!"
            );

        };

}