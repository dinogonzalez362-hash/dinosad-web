// ===============================
// SECCIONES DE STICKERS
// ===============================

// INICIO
let inicio =
    document.getElementById("inicio");


// ===============================
// STICKERS
// ===============================

let seccionStickers =
    document.getElementById(
        "seccionStickers"
    );

let btnStikers =
    document.getElementById(
        "btnStikers"
    );

let btnVolver =
    document.getElementById(
        "btnVolver"
    );


// ===============================
// NUEVOS
// ===============================

let seccionNuevosStikers =
    document.getElementById(
        "seccionNuevosStikers"
    );

let btnNuevosStikers =
    document.getElementById(
        "btnNuevosStikers"
    );

let btnVolverNuevosStikers =
    document.getElementById(
        "btnVolverNuevosStikers"
    );


// ===============================
// COLECCIONES
// ===============================

let coleccionAle =
    document.getElementById(
        "coleccionAle"
    );

let coleccionLeo =
    document.getElementById(
        "coleccionLeo"
    );

let coleccionNico =
    document.getElementById(
        "coleccionNico"
    );

let coleccionTheys =
    document.getElementById(
        "coleccionTheys"
    );


// ===============================
// BOTONES COLECCIONES
// ===============================

let btnColeccionAle =
    document.getElementById(
        "btnColeccionAle"
    );

let btnColeccionLeo =
    document.getElementById(
        "btnColeccionLeo"
    );

let btnColeccionNico =
    document.getElementById(
        "btnColeccionNico"
    );

let btnColeccionTheys =
    document.getElementById(
        "btnColeccionTheys"
    );


// ===============================
// BOTONES VOLVER
// ===============================

let btnVolverAle =
    document.getElementById(
        "btnVolverAle"
    );

let btnVolverLeo =
    document.getElementById(
        "btnVolverLeo"
    );

let btnVolverNico =
    document.getElementById(
        "btnVolverNico"
    );

let btnVolverTheys =
    document.getElementById(
        "btnVolverTheys"
    );


// ===============================
// OCULTAR COLECCIONES
// ===============================

function ocultarColecciones() {

    coleccionAle.style.display =
        "none";

    coleccionLeo.style.display =
        "none";

    coleccionNico.style.display =
        "none";

    coleccionTheys.style.display =
        "none";

}


// ===============================
// ABRIR STICKERS
// ===============================

if (btnStikers) {

    btnStikers.onclick =
        function () {

            inicio.style.display =
                "none";

            seccionNuevosStikers.style.display =
                "none";

            ocultarColecciones();

            seccionStickers.style.display =
                "block";

        };

}


// ===============================
// VOLVER AL INICIO
// ===============================

if (btnVolver) {

    btnVolver.onclick =
        function () {

            seccionStickers.style.display =
                "none";

            inicio.style.display =
                "block";

        };

}


// ===============================
// NUEVOS
// ===============================

if (btnNuevosStikers) {

    btnNuevosStikers.onclick =
        function () {

            inicio.style.display =
                "none";

            seccionStickers.style.display =
                "none";

            ocultarColecciones();

            seccionNuevosStikers.style.display =
                "block";

        };

}


// ===============================
// VOLVER DE NUEVOS
// ===============================

if (btnVolverNuevosStikers) {

    btnVolverNuevosStikers.onclick =
        function () {

            seccionNuevosStikers.style.display =
                "none";

            inicio.style.display =
                "block";

        };

}


// ===============================
// ABRIR COLECCIÓN ALE
// ===============================

if (btnColeccionAle) {

    btnColeccionAle.onclick =
        function () {

            seccionStickers.style.display =
                "none";

            ocultarColecciones();

            coleccionAle.style.display =
                "block";

        };

}


// ===============================
// ABRIR COLECCIÓN LEO
// ===============================

if (btnColeccionLeo) {

    btnColeccionLeo.onclick =
        function () {

            seccionStickers.style.display =
                "none";

            ocultarColecciones();

            coleccionLeo.style.display =
                "block";

        };

}


// ===============================
// ABRIR COLECCIÓN NICO
// ===============================

if (btnColeccionNico) {

    btnColeccionNico.onclick =
        function () {

            seccionStickers.style.display =
                "none";

            ocultarColecciones();

            coleccionNico.style.display =
                "block";

        };

}


// ===============================
// ABRIR COLECCIÓN THEYS DINOS
// ===============================

if (btnColeccionTheys) {

    btnColeccionTheys.onclick =
        function () {

            seccionStickers.style.display =
                "none";

            ocultarColecciones();

            coleccionTheys.style.display =
                "block";

        };

}


// ===============================
// VOLVER ALE
// ===============================

if (btnVolverAle) {

    btnVolverAle.onclick =
        function () {

            coleccionAle.style.display =
                "none";

            seccionStickers.style.display =
                "block";

        };

}


// ===============================
// VOLVER LEO
// ===============================

if (btnVolverLeo) {

    btnVolverLeo.onclick =
        function () {

            coleccionLeo.style.display =
                "none";

            seccionStickers.style.display =
                "block";

        };

}


// ===============================
// VOLVER NICO
// ===============================

if (btnVolverNico) {

    btnVolverNico.onclick =
        function () {

            coleccionNico.style.display =
                "none";

            seccionStickers.style.display =
                "block";

        };

}


// ===============================
// VOLVER THEYS DINOS
// ===============================

if (btnVolverTheys) {

    btnVolverTheys.onclick =
        function () {

            coleccionTheys.style.display =
                "none";

            seccionStickers.style.display =
                "block";

        };

}


// ==================================================
// ALE - SUBSECCIONES
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


// ===============================
// ABRIR STICKERS INDIVIDUALES
// ===============================

if (btnStickersIndividualesAle) {

    btnStickersIndividualesAle.onclick =
        function () {

            coleccionAle.style.display =
                "none";

            stickersIndividualesAle.style.display =
                "block";

        };

}


// ===============================
// ABRIR PACKS
// ===============================

if (btnPacksAle) {

    btnPacksAle.onclick =
        function () {

            coleccionAle.style.display =
                "none";

            packsAle.style.display =
                "block";

        };

}


// ===============================
// VOLVER DE STICKERS INDIVIDUALES
// ===============================

if (btnVolverStickersIndividualesAle) {

    btnVolverStickersIndividualesAle.onclick =
        function () {

            stickersIndividualesAle.style.display =
                "none";

            coleccionAle.style.display =
                "block";

        };

}


// ===============================
// VOLVER DE PACKS
// ===============================

if (btnVolverPacksAle) {

    btnVolverPacksAle.onclick =
        function () {

            packsAle.style.display =
                "none";

            coleccionAle.style.display =
                "block";

        };

}
// ===============================
// COMPARTIR PACK DE ALE
// ===============================

let tarjetaPackAle =
    document.getElementById(
        "tarjetaPackAle"
    );

let opcionesCompartirPackAle =
    document.getElementById(
        "opcionesCompartirPackAle"
    );

let btnCerrarCompartirPackAle =
    document.getElementById(
        "btnCerrarCompartirPackAle"
    );


// ===============================
// ABRIR COMPARTIR PACK
// ===============================

if (
    btnCompartirPackAle &&
    tarjetaPackAle &&
    opcionesCompartirPackAle
) {

    btnCompartirPackAle.onclick =
        function () {

            tarjetaPackAle.style.display =
                "none";

            opcionesCompartirPackAle.style.display =
                "block";

        };

}


// ===============================
// VOLVER DEL COMPARTIR PACK
// ===============================

if (
    btnCerrarCompartirPackAle &&
    tarjetaPackAle &&
    opcionesCompartirPackAle
) {

    btnCerrarCompartirPackAle.onclick =
        function () {

            opcionesCompartirPackAle.style.display =
                "none";

            tarjetaPackAle.style.display =
                "block";

        };

}
// ===============================
// BOTONES DE COMPARTIR PACK ALE
// ===============================

let btnCompartirWhatsAppPackAle =
    document.getElementById(
        "btnCompartirWhatsAppPackAle"
    );

let btnCopiarEnlacePackAle =
    document.getElementById(
        "btnCopiarEnlacePackAle"
    );

let btnCompartirNativoPackAle =
    document.getElementById(
        "btnCompartirNativoPackAle"
    );


// ===============================
// ENLACE DEL PACK
// ===============================

let enlacePackAle =
    window.location.href;


// ===============================
// WHATSAPP
// ===============================

if (btnCompartirWhatsAppPackAle) {

    btnCompartirWhatsAppPackAle.onclick =
        function () {

            let mensaje =
                "🦖 Mirá este pack de stickers de Ale:\n\n" +
                enlacePackAle;

            let enlaceWhatsApp =
                "https://wa.me/?text=" +
                encodeURIComponent(mensaje);

            window.open(
                enlaceWhatsApp,
                "_blank"
            );

        };

}


// ===============================
// COPIAR ENLACE
// ===============================

if (btnCopiarEnlacePackAle) {

    btnCopiarEnlacePackAle.onclick =
        async function () {

            try {

                await navigator.clipboard.writeText(
                    enlacePackAle
                );

                alert(
                    "🔗 ¡Enlace copiado!"
                );

            }
            catch (error) {

                alert(
                    "❌ No se pudo copiar el enlace."
                );

            }

        };

}


// ===============================
// COMPARTIR EN...
// ===============================

if (btnCompartirNativoPackAle) {

    btnCompartirNativoPackAle.onclick =
        async function () {

            if (
                navigator.share
            ) {

                try {

                    await navigator.share({

                        title:
                            "Pack de stickers de Ale",

                        text:
                            "🦖 Mirá este pack de stickers de Ale:",

                        url:
                            enlacePackAle

                    });

                }
                catch (error) {

                    // El usuario canceló
                    // el menú de compartir.

                }

            }
            else {

                alert(
                    "📤 Tu dispositivo o navegador no admite el menú de compartir."
                );

            }

        };

}


// ==================================================
// ACCIONES STICKER INDIVIDUAL ALE
// ==================================================

let btnDescargarStickerAle =
    document.getElementById(
        "btnDescargarStickerAle"
    );

let btnCompartirStickerAle =
    document.getElementById(
        "btnCompartirStickerAle"
    );

let btnWhatsAppStickerAle =
    document.getElementById(
        "btnWhatsAppStickerAle"
    );


// ===============================
// TARJETA DEL STICKER
// ===============================

let tarjetaStickerAle =
    document.getElementById(
        "tarjetaStickerAle"
    );


// ===============================
// VISOR WHATSAPP
// ===============================

let visorWhatsAppAle =
    document.getElementById(
        "visorWhatsAppAle"
    );

let btnVolverWhatsAppAle =
    document.getElementById(
        "btnVolverWhatsAppAle"
    );


// ===============================
// VER ESTILO WHATSAPP
// ===============================

if (
    btnWhatsAppStickerAle &&
    visorWhatsAppAle &&
    tarjetaStickerAle
) {

    btnWhatsAppStickerAle.onclick =
        function () {

            tarjetaStickerAle.style.display =
                "none";

            visorWhatsAppAle.style.display =
                "block";

        };

}


// ===============================
// VOLVER DE WHATSAPP
// ===============================

if (
    btnVolverWhatsAppAle &&
    visorWhatsAppAle &&
    tarjetaStickerAle
) {

    btnVolverWhatsAppAle.onclick =
        function () {

            visorWhatsAppAle.style.display =
                "none";

            tarjetaStickerAle.style.display =
                "block";

        };

}


// ==================================================
// TARJETAS DE DESCARGA
// ==================================================

let opcionesDescargaStickerAle =
    document.getElementById(
        "opcionesDescargaStickerAle"
    );


// ===============================
// BOTONES DE DESCARGA
// ===============================

let btnDescargarStickerAppAle =
    document.getElementById(
        "btnDescargarStickerAppAle"
    );

let btnDescargarImagenAle =
    document.getElementById(
        "btnDescargarImagenAle"
    );

let btnCerrarDescargaAle =
    document.getElementById(
        "btnCerrarDescargaAle"
    );


// ===============================
// ABRIR OPCIONES DE DESCARGA
// ===============================

if (
    btnDescargarStickerAle &&
    tarjetaStickerAle &&
    opcionesDescargaStickerAle
) {

    btnDescargarStickerAle.onclick =
        function () {

            tarjetaStickerAle.style.display =
                "none";

            opcionesDescargaStickerAle.style.display =
                "block";

        };

}


// ===============================
// DESCARGAR STICKER
// ===============================

if (btnDescargarStickerAppAle) {

    btnDescargarStickerAppAle.onclick =
        function () {

            alert(
                "📱 Esta función estará disponible " +
                "con la futura aplicación de stickers."
            );

        };

}


// ===============================
// DESCARGAR COMO IMAGEN
// ===============================

if (btnDescargarImagenAle) {

    btnDescargarImagenAle.onclick =
        function () {

            let imagenSticker =
                document.querySelector(
                    "#tarjetaStickerAle img"
                );

            if (!imagenSticker) {

                alert(
                    "❌ No se encontró el sticker."
                );

                return;

            }

            let enlace =
                document.createElement("a");

            enlace.href =
                imagenSticker.src;

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


// ===============================
// VOLVER DE DESCARGA
// ===============================

if (
    btnCerrarDescargaAle &&
    tarjetaStickerAle &&
    opcionesDescargaStickerAle
) {

    btnCerrarDescargaAle.onclick =
        function () {

            opcionesDescargaStickerAle.style.display =
                "none";

            tarjetaStickerAle.style.display =
                "block";

        };

}


// ==================================================
// COMPARTIR STICKER ALE
// ==================================================

let opcionesCompartirStickerAle =
    document.getElementById(
        "opcionesCompartirStickerAle"
    );

let btnCerrarCompartirAle =
    document.getElementById(
        "btnCerrarCompartirAle"
    );


// ===============================
// ABRIR TARJETA DE COMPARTIR
// ===============================

if (
    btnCompartirStickerAle &&
    tarjetaStickerAle &&
    opcionesCompartirStickerAle
) {

    btnCompartirStickerAle.onclick =
        function () {

            tarjetaStickerAle.style.display =
                "none";

            opcionesDescargaStickerAle.style.display =
                "none";

            opcionesCompartirStickerAle.style.display =
                "block";

        };

}


// ===============================
// VOLVER DE COMPARTIR
// ===============================

if (
    btnCerrarCompartirAle &&
    tarjetaStickerAle &&
    opcionesCompartirStickerAle
) {

    btnCerrarCompartirAle.onclick =
        function () {

            opcionesCompartirStickerAle.style.display =
                "none";

            tarjetaStickerAle.style.display =
                "block";

        };

}


// ==================================================
// FUNCIONES DE COMPARTIR
// STICKER INDIVIDUAL DE ALE
// ==================================================

// ===============================
// BOTONES DE LA TARJETA
// ===============================

let btnCompartirWhatsAppAle =
    document.getElementById(
        "btnCompartirWhatsAppAle"
    );

let btnCompartirInstagramAle =
    document.getElementById(
        "btnCompartirInstagramAle"
    );

let btnCompartirTikTokAle =
    document.getElementById(
        "btnCompartirTikTokAle"
    );

let btnCopiarEnlaceAle =
    document.getElementById(
        "btnCopiarEnlaceAle"
    );


// ===============================
// ENLACE DEL STICKER
// ===============================

function obtenerEnlaceStickerAle() {

    return window.location.href;

}


// ==================================================
// COMPARTIR CON EL SISTEMA
// ANDROID / NAVEGADOR
// ==================================================

async function compartirStickerAle() {

    let enlace =
        obtenerEnlaceStickerAle();

    let datosCompartir = {

        title:
            "Sticker de Ale 🦖",

        text:
            "Mirá este sticker de Ale de DinoSad Web 🦖",

        url:
            enlace

    };


    // ===========================
    // COMPARTIR NATIVO
    // ===========================

    if (
        navigator.share
    ) {

        try {

            await navigator.share(
                datosCompartir
            );

        } catch (error) {

            console.log(
                "Compartir cancelado."
            );

        }

        return;

    }


    // ===========================
    // SIN SOPORTE
    // ===========================

    alert(
        "⚠️ Tu navegador no permite " +
        "el menú de compartir."
    );

}


// ==================================================
// WHATSAPP
// ==================================================

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
                "https://wa.me/?" +
                "text=" +
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
// COMPARTIR EN...
// ==================================================

let btnCompartirEnAle =
    document.getElementById(
        "btnCompartirEnAle"
    );

if (btnCompartirEnAle) {

    btnCompartirEnAle.onclick =
        function () {

            compartirStickerAle();

        };

}


// ==================================================
// COPIAR ENLACE
// ==================================================

if (btnCopiarEnlaceAle) {

    btnCopiarEnlaceAle.onclick =
        async function () {

            let enlace =
                obtenerEnlaceStickerAle();


            // =======================
            // PORTAPAPELES MODERNO
            // =======================

            if (
                navigator.clipboard
            ) {

                try {

                    await navigator.clipboard.writeText(
                        enlace
                    );

                    alert(
                        "✅ ¡Enlace copiado!"
                    );

                    return;

                } catch (error) {

                    console.log(
                        "No se pudo usar Clipboard API."
                    );

                }

            }


            // =======================
            // MÉTODO ALTERNATIVO
            // =======================

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
