// ==================================================
// LEO - SUBSECCIONES
// ==================================================

let btnStickersIndividualesLeo = document.getElementById("btnStickersIndividualesLeo");
let btnPacksLeo = document.getElementById("btnPacksLeo");
let stickersIndividualesLeo = document.getElementById("stickersIndividualesLeo");
let packsLeo = document.getElementById("packsLeo");
let btnVolverStickersIndividualesLeo = document.getElementById("btnVolverStickersIndividualesLeo");
let btnVolverPacksLeo = document.getElementById("btnVolverPacksLeo");

let estadoStickersLeo = "stickers";
let estadoPacksLeo = "packs";

let paginaStickersLeo1 = document.getElementById("paginaStickersLeo1");
let paginaStickersLeo2 = document.getElementById("paginaStickersLeo2");
let btnAnteriorStickersLeo = document.getElementById("btnAnteriorStickersLeo");
let btnSiguienteStickersLeo = document.getElementById("btnSiguienteStickersLeo");
let paginaActualStickersLeo = 1;

let paginaPacksLeo1 = document.getElementById("paginaPacksLeo1");
let paginaPacksLeo2 = document.getElementById("paginaPacksLeo2");
let btnAnteriorPacksLeo = document.getElementById("btnAnteriorPacksLeo");
let btnSiguientePacksLeo = document.getElementById("btnSiguientePacksLeo");
let paginaActualPacksLeo = 1;

let opcionesDescargaStickerLeo = document.getElementById("opcionesDescargaStickerLeo");
let opcionesCompartirStickerLeo = document.getElementById("opcionesCompartirStickerLeo");
let opcionesCompartirPackLeo = document.getElementById("opcionesCompartirPackLeo");

let stickerLeoSeleccionado = null;
let packLeoSeleccionado = null;

function mostrarNavegacionStickersLeo() {
    if (btnAnteriorStickersLeo) btnAnteriorStickersLeo.style.display = "inline-block";
    if (btnSiguienteStickersLeo) btnSiguienteStickersLeo.style.display = "inline-block";
}

function ocultarNavegacionStickersLeo() {
    if (btnAnteriorStickersLeo) btnAnteriorStickersLeo.style.display = "none";
    if (btnSiguienteStickersLeo) btnSiguienteStickersLeo.style.display = "none";
}

function mostrarNavegacionPacksLeo() {
    if (btnAnteriorPacksLeo) btnAnteriorPacksLeo.style.display = "inline-block";
    if (btnSiguientePacksLeo) btnSiguientePacksLeo.style.display = "inline-block";
}

function ocultarNavegacionPacksLeo() {
    if (btnAnteriorPacksLeo) btnAnteriorPacksLeo.style.display = "none";
    if (btnSiguientePacksLeo) btnSiguientePacksLeo.style.display = "none";
}

function mostrarPaginaStickersLeo() {
    if (paginaStickersLeo1) paginaStickersLeo1.style.display = "none";
    if (paginaStickersLeo2) paginaStickersLeo2.style.display = "none";

    if (paginaActualStickersLeo === 1 && paginaStickersLeo1) {
        paginaStickersLeo1.style.display = "block";
    }

    if (paginaActualStickersLeo === 2 && paginaStickersLeo2) {
        paginaStickersLeo2.style.display = "block";
    }
}

function mostrarPaginaPacksLeo() {
    if (paginaPacksLeo1) paginaPacksLeo1.style.display = "none";
    if (paginaPacksLeo2) paginaPacksLeo2.style.display = "none";

    if (paginaActualPacksLeo === 1 && paginaPacksLeo1) {
        paginaPacksLeo1.style.display = "block";
    }

    if (paginaActualPacksLeo === 2 && paginaPacksLeo2) {
        paginaPacksLeo2.style.display = "block";
    }
}

if (btnStickersIndividualesLeo) {
    btnStickersIndividualesLeo.onclick = function () {
        if (coleccionLeo) coleccionLeo.style.display = "none";
        if (stickersIndividualesLeo) stickersIndividualesLeo.style.display = "block";
        if (packsLeo) packsLeo.style.display = "none";
        if (opcionesDescargaStickerLeo) opcionesDescargaStickerLeo.style.display = "none";
        if (opcionesCompartirStickerLeo) opcionesCompartirStickerLeo.style.display = "none";
        estadoStickersLeo = "stickers";
        mostrarPaginaStickersLeo();
        mostrarNavegacionStickersLeo();
    };
}

if (btnPacksLeo) {
    btnPacksLeo.onclick = function () {
        if (coleccionLeo) coleccionLeo.style.display = "none";
        if (stickersIndividualesLeo) stickersIndividualesLeo.style.display = "none";
        if (packsLeo) packsLeo.style.display = "block";
        if (opcionesCompartirPackLeo) opcionesCompartirPackLeo.style.display = "none";
        estadoPacksLeo = "packs";
        mostrarPaginaPacksLeo();
        mostrarNavegacionPacksLeo();
    };
}

if (btnSiguienteStickersLeo) {
    btnSiguienteStickersLeo.onclick = function () {
        if (estadoStickersLeo !== "stickers") return;
        if (paginaActualStickersLeo < 2) {
            paginaActualStickersLeo++;
            mostrarPaginaStickersLeo();
        }
    };
}

if (btnAnteriorStickersLeo) {
    btnAnteriorStickersLeo.onclick = function () {
        if (estadoStickersLeo !== "stickers") return;
        if (paginaActualStickersLeo > 1) {
            paginaActualStickersLeo--;
            mostrarPaginaStickersLeo();
        }
    };
}

if (btnSiguientePacksLeo) {
    btnSiguientePacksLeo.onclick = function () {
        if (estadoPacksLeo !== "packs") return;
        if (paginaActualPacksLeo < 2) {
            paginaActualPacksLeo++;
            mostrarPaginaPacksLeo();
        }
    };
}

if (btnAnteriorPacksLeo) {
    btnAnteriorPacksLeo.onclick = function () {
        if (estadoPacksLeo !== "packs") return;
        if (paginaActualPacksLeo > 1) {
            paginaActualPacksLeo--;
            mostrarPaginaPacksLeo();
        }
    };
}

function abrirOpcionesDescargaLeo() {
    estadoStickersLeo = "descarga";
    if (paginaStickersLeo1) paginaStickersLeo1.style.display = "none";
    if (paginaStickersLeo2) paginaStickersLeo2.style.display = "none";
    ocultarNavegacionStickersLeo();
    if (opcionesCompartirStickerLeo) opcionesCompartirStickerLeo.style.display = "none";
    if (opcionesDescargaStickerLeo) opcionesDescargaStickerLeo.style.display = "block";
}

function abrirOpcionesCompartirLeo() {
    estadoStickersLeo = "compartir";
    if (paginaStickersLeo1) paginaStickersLeo1.style.display = "none";
    if (paginaStickersLeo2) paginaStickersLeo2.style.display = "none";
    ocultarNavegacionStickersLeo();
    if (opcionesDescargaStickerLeo) opcionesDescargaStickerLeo.style.display = "none";
    if (opcionesCompartirStickerLeo) opcionesCompartirStickerLeo.style.display = "block";
}

function volverAStickersLeo() {
    if (opcionesDescargaStickerLeo) opcionesDescargaStickerLeo.style.display = "none";
    if (opcionesCompartirStickerLeo) opcionesCompartirStickerLeo.style.display = "none";
    estadoStickersLeo = "stickers";
    mostrarPaginaStickersLeo();
    mostrarNavegacionStickersLeo();
}

function abrirOpcionesCompartirPackLeo() {
    estadoPacksLeo = "compartir";
    if (paginaPacksLeo1) paginaPacksLeo1.style.display = "none";
    if (paginaPacksLeo2) paginaPacksLeo2.style.display = "none";
    ocultarNavegacionPacksLeo();
    if (opcionesCompartirPackLeo) opcionesCompartirPackLeo.style.display = "block";
}

function volverAPacksLeo() {
    if (opcionesCompartirPackLeo) opcionesCompartirPackLeo.style.display = "none";
    estadoPacksLeo = "packs";
    mostrarPaginaPacksLeo();
    mostrarNavegacionPacksLeo();
}

let botonesDescargarStickerLeo = document.querySelectorAll(".btnDescargarStickerLeo");

botonesDescargarStickerLeo.forEach(function (boton) {
    boton.onclick = function () {
        let tarjeta = boton.closest(".stickerCard");
        if (!tarjeta) return;
        stickerLeoSeleccionado = tarjeta.querySelector("img");
        abrirOpcionesDescargaLeo();
    };
});

let botonesCompartirStickerLeo = document.querySelectorAll(".btnCompartirStickerLeo");

botonesCompartirStickerLeo.forEach(function (boton) {
    boton.onclick = function () {
        let tarjeta = boton.closest(".stickerCard");
        if (!tarjeta) return;
        stickerLeoSeleccionado = tarjeta.querySelector("img");
        abrirOpcionesCompartirLeo();
    };
});

let botonesDescargarPackLeo = document.querySelectorAll(".btnDescargarPackLeo");

botonesDescargarPackLeo.forEach(function (boton) {
    boton.onclick = function () {
        let numeroPack = boton.dataset.pack;
        alert("📱 La descarga del Pack Leo " + numeroPack + " estará disponible con la futura aplicación de stickers.");
    };
});

let botonesCompartirPackLeo = document.querySelectorAll(".btnCompartirPackLeo");

botonesCompartirPackLeo.forEach(function (boton) {
    boton.onclick = function () {
        let tarjeta = boton.closest(".packCard");
        if (!tarjeta) return;
        packLeoSeleccionado = tarjeta.querySelector("img");
        abrirOpcionesCompartirPackLeo();
    };
});

let btnCerrarDescargaLeo = document.getElementById("btnCerrarDescargaLeo");
if (btnCerrarDescargaLeo) {
    btnCerrarDescargaLeo.onclick = function () {
        volverAStickersLeo();
    };
}

let btnCerrarCompartirLeo = document.getElementById("btnCerrarCompartirLeo");
if (btnCerrarCompartirLeo) {
    btnCerrarCompartirLeo.onclick = function () {
        volverAStickersLeo();
    };
}

let btnCerrarCompartirPackLeo = document.getElementById("btnCerrarCompartirPackLeo");
if (btnCerrarCompartirPackLeo) {
    btnCerrarCompartirPackLeo.onclick = function () {
        volverAPacksLeo();
    };
}

if (btnVolverStickersIndividualesLeo) {
    btnVolverStickersIndividualesLeo.onclick = function () {
        if (estadoStickersLeo === "descarga" || estadoStickersLeo === "compartir") {
            volverAStickersLeo();
            return;
        }
        if (stickersIndividualesLeo) stickersIndividualesLeo.style.display = "none";
        if (coleccionLeo) coleccionLeo.style.display = "block";
    };
}

if (btnVolverPacksLeo) {
    btnVolverPacksLeo.onclick = function () {
        if (estadoPacksLeo === "compartir") {
            volverAPacksLeo();
            return;
        }
        if (packsLeo) packsLeo.style.display = "none";
        if (coleccionLeo) coleccionLeo.style.display = "block";
    };
}

let btnDescargarStickerAppLeo = document.getElementById("btnDescargarStickerAppLeo");
if (btnDescargarStickerAppLeo) {
    btnDescargarStickerAppLeo.onclick = function () {
        alert("📱 Esta función estará disponible con la futura aplicación de stickers.");
    };
}

let btnDescargarImagenLeo = document.getElementById("btnDescargarImagenLeo");
if (btnDescargarImagenLeo) {
    btnDescargarImagenLeo.onclick = function () {
        if (!stickerLeoSeleccionado) {
            alert("❌ No se encontró el sticker.");
            return;
        }

        let enlace = document.createElement("a");
        enlace.href = stickerLeoSeleccionado.src;
        enlace.download = "sticker-leo.png";
        document.body.appendChild(enlace);
        enlace.click();
        document.body.removeChild(enlace);
    };
}

function obtenerEnlaceStickerLeo() {
    return window.location.href;
}

function obtenerEnlacePackLeo() {
    return window.location.href;
}

let btnCompartirWhatsAppLeo = document.getElementById("btnCompartirWhatsAppLeo");
if (btnCompartirWhatsAppLeo) {
    btnCompartirWhatsAppLeo.onclick = function () {
        let mensaje = "🦖 Mirá este sticker de Leo de DinoSad Web:\n\n" + obtenerEnlaceStickerLeo();
        window.open("https://wa.me/?text=" + encodeURIComponent(mensaje), "_blank");
    };
}

let btnCompartirWhatsAppPackLeo = document.getElementById("btnCompartirWhatsAppPackLeo");
if (btnCompartirWhatsAppPackLeo) {
    btnCompartirWhatsAppPackLeo.onclick = function () {
        let mensaje = "🦖 Mirá este pack de stickers de Leo:\n\n" + obtenerEnlacePackLeo();
        window.open("https://wa.me/?text=" + encodeURIComponent(mensaje), "_blank");
    };
}

let btnCompartirEnLeo = document.getElementById("btnCompartirEnLeo");
if (btnCompartirEnLeo) {
    btnCompartirEnLeo.onclick = async function () {
        if (!navigator.share) {
            alert("📤 Tu dispositivo o navegador no admite el menú de compartir.");
            return;
        }

        try {
            await navigator.share({
                title: "Sticker de Leo 🐯",
                text: "🦖 Mirá este sticker de Leo de DinoSad Web",
                url: obtenerEnlaceStickerLeo()
            });
        } catch (error) {
            // El usuario canceló el menú de compartir.
        }
    };
}

let btnCopiarEnlaceLeo = document.getElementById("btnCopiarEnlaceLeo");
if (btnCopiarEnlaceLeo) {
    btnCopiarEnlaceLeo.onclick = async function () {
        try {
            await navigator.clipboard.writeText(obtenerEnlaceStickerLeo());
            alert("🔗 ¡Enlace copiado!");
        } catch (error) {
            alert("❌ No se pudo copiar el enlace.");
        }
    };
}

let btnCopiarEnlacePackLeo = document.getElementById("btnCopiarEnlacePackLeo");
if (btnCopiarEnlacePackLeo) {
    btnCopiarEnlacePackLeo.onclick = async function () {
        try {
            await navigator.clipboard.writeText(obtenerEnlacePackLeo());
            alert("🔗 ¡Enlace copiado!");
        } catch (error) {
            alert("❌ No se pudo copiar el enlace.");
        }
    };
}

let btnCompartirNativoPackLeo = document.getElementById("btnCompartirNativoPackLeo");
if (btnCompartirNativoPackLeo) {
    btnCompartirNativoPackLeo.onclick = async function () {
        if (!navigator.share) {
            alert("📤 Tu dispositivo o navegador no admite el menú de compartir.");
            return;
        }

        try {
            await navigator.share({
                title: "Pack de stickers de Leo 🐯",
                text: "🦖 Mirá este pack de stickers de Leo de DinoSad Web",
                url: obtenerEnlacePackLeo()
            });
        } catch (error) {
            // El usuario canceló el menú de compartir.
        }
    };
}

let btnDescargarStickerLeo = document.getElementById("btnDescargarStickerLeo");
if (btnDescargarStickerLeo) {
    btnDescargarStickerLeo.onclick = function () {
        let tarjeta = btnDescargarStickerLeo.closest(".stickerCard");
        if (!tarjeta) return;
        stickerLeoSeleccionado = tarjeta.querySelector("img");
        abrirOpcionesDescargaLeo();
    };
}

let btnCompartirStickerLeo = document.getElementById("btnCompartirStickerLeo");
if (btnCompartirStickerLeo) {
    btnCompartirStickerLeo.onclick = function () {
        let tarjeta = btnCompartirStickerLeo.closest(".stickerCard");
        if (!tarjeta) return;
        stickerLeoSeleccionado = tarjeta.querySelector("img");
        abrirOpcionesCompartirLeo();
    };
}

let btnDescargarPackLeo = document.getElementById("btnDescargarPackLeo");
if (btnDescargarPackLeo) {
    btnDescargarPackLeo.onclick = function () {
        alert("📱 La descarga del pack estará disponible con la futura aplicación de stickers.");
    };
}

let btnCompartirPackLeo = document.getElementById("btnCompartirPackLeo");
if (btnCompartirPackLeo) {
    btnCompartirPackLeo.onclick = function () {
        let tarjeta = btnCompartirPackLeo.closest(".packCard");
        if (!tarjeta) return;
        packLeoSeleccionado = tarjeta.querySelector("img");
        abrirOpcionesCompartirPackLeo();
    };
}

/*
let botonCompartirLeo =
    document.getElementById(
        "btnCompartirStickerLeo"
    );

let tarjetaStickerCompartirLeo =
    document.getElementById(
        "tarjetaStickerLeo"
    );

let opcionesCompartirLeo =
    document.getElementById(
        "opcionesCompartirStickerLeo"
    );

let botonCerrarCompartirLeo =
    document.getElementById(
        "btnCerrarCompartirLeo"
    );


// ===============================
// ABRIR COMPARTIR
// ===============================

if (
    botonCompartirLeo &&
    tarjetaStickerCompartirLeo &&
    opcionesCompartirLeo
) {

    botonCompartirLeo.onclick =
        function () {

            tarjetaStickerCompartirLeo.style.display =
                "none";

            opcionesCompartirLeo.style.display =
                "block";

        };

}


// ===============================
// CERRAR COMPARTIR
// ===============================

if (
    botonCerrarCompartirLeo &&
    tarjetaStickerCompartirLeo &&
    opcionesCompartirLeo
) {

    botonCerrarCompartirLeo.onclick =
        function () {

            opcionesCompartirLeo.style.display =
                "none";

            tarjetaStickerCompartirLeo.style.display =
                "block";

        };

}
// ==================================================
// COMPARTIR STICKER DE LEO POR WHATSAPP
// ==================================================

let botonWhatsAppCompartirLeo =
    document.getElementById(
        "btnCompartirWhatsAppLeo"
    );


// ===============================
// COMPARTIR POR WHATSAPP
// ===============================

if (botonWhatsAppCompartirLeo) {

    botonWhatsAppCompartirLeo.onclick =
        function () {

            let enlaceStickerLeo =
                window.location.href;

            let mensaje =
                "🐯 Mirá este sticker de Leo " +
                "de DinoSad Web:\n\n" +
                enlaceStickerLeo;

            let enlaceWhatsAppLeo =
                "https://wa.me/?text=" +
                encodeURIComponent(
                    mensaje
                );

            window.open(
                enlaceWhatsAppLeo,
                "_blank"
            );

        };

}
// ==================================================
// COMPARTIR STICKER DE LEO
// COMPARTIR EN...
// ==================================================

let botonCompartirEnLeo =
    document.getElementById(
        "btnCompartirEnLeo"
    );


// ===============================
// COMPARTIR CON EL SISTEMA
// ===============================

if (botonCompartirEnLeo) {

    botonCompartirEnLeo.onclick =
        async function () {

            let enlaceStickerLeo =
                window.location.href;

            if (navigator.share) {

                try {

                    await navigator.share({

                        title:
                            "Sticker de Leo 🐯",

                        text:
                            "🐯 Mirá este sticker de Leo de DinoSad Web",

                        url:
                            enlaceStickerLeo

                    });

                } catch (error) {

                    // El usuario cerró el menú
                    // de compartir.

                }

            } else {

                alert(
                    "📤 Tu dispositivo o navegador no admite el menú de compartir."
                );

            }

        };

}
// ==================================================
// COPIAR ENLACE DEL STICKER DE LEO
// ==================================================

let botonCopiarEnlaceLeo =
    document.getElementById(
        "btnCopiarEnlaceLeo"
    );


// ===============================
// COPIAR ENLACE
// ===============================

if (botonCopiarEnlaceLeo) {

    botonCopiarEnlaceLeo.onclick =
        async function () {

            let enlaceStickerLeo =
                window.location.href;


            // ===========================
            // PORTAPAPELES MODERNO
            // ===========================

            if (navigator.clipboard) {

                try {

                    await navigator.clipboard.writeText(
                        enlaceStickerLeo
                    );

                    alert(
                        "🔗 ¡Enlace copiado!"
                    );

                    return;

                } catch (error) {

                    console.log(
                        "No se pudo usar Clipboard API."
                    );

                }

            }


            // ===========================
            // MÉTODO ALTERNATIVO
            // ===========================

            let campoCopiarLeo =
                document.createElement(
                    "textarea"
                );

            campoCopiarLeo.value =
                enlaceStickerLeo;

            document.body.appendChild(
                campoCopiarLeo
            );

            campoCopiarLeo.select();

            document.execCommand(
                "copy"
            );

            document.body.removeChild(
                campoCopiarLeo
            );

            alert(
                "🔗 ¡Enlace copiado!"
            );

        };

}
// ==================================================
// DESCARGAR PACK DE LEO
// ==================================================

let botonDescargarPackLeo =
    document.getElementById(
        "btnDescargarPackLeo"
    );


// ===============================
// AVISO FUTURA APLICACIÓN
// ===============================

if (botonDescargarPackLeo) {

    botonDescargarPackLeo.onclick =
        function () {

            alert(
                "📱 La descarga de packs estará disponible " +
                "con la futura aplicación de stickers."
            );

        };

}
// ==================================================
// COMPARTIR PACK - LEO
// ==================================================

let botonCompartirPackLeo =
    document.getElementById(
        "btnCompartirPackLeo"
    );

let tarjetaPackCompartirLeo =
    document.getElementById(
        "tarjetaPackLeo"
    );

let opcionesCompartirPackLeo =
    document.getElementById(
        "opcionesCompartirPackLeo"
    );

let botonCerrarCompartirPackLeo =
    document.getElementById(
        "btnCerrarCompartirPackLeo"
    );


// ===============================
// ABRIR COMPARTIR PACK
// ===============================

if (
    botonCompartirPackLeo &&
    tarjetaPackCompartirLeo &&
    opcionesCompartirPackLeo
) {

    botonCompartirPackLeo.onclick =
        function () {

            tarjetaPackCompartirLeo.style.display =
                "none";

            opcionesCompartirPackLeo.style.display =
                "block";

        };

}


// ===============================
// CERRAR COMPARTIR PACK
// ===============================

if (
    botonCerrarCompartirPackLeo &&
    tarjetaPackCompartirLeo &&
    opcionesCompartirPackLeo
) {

    botonCerrarCompartirPackLeo.onclick =
        function () {

            opcionesCompartirPackLeo.style.display =
                "none";

            tarjetaPackCompartirLeo.style.display =
                "block";

        };

}
    */
// ==================================================
// COMPARTIR PACK DE LEO POR WHATSAPP
// ==================================================

let botonWhatsAppPackLeo =
    document.getElementById(
        "btnCompartirWhatsAppPackLeo"
    );


// ===============================
// COMPARTIR POR WHATSAPP
// ===============================

if (botonWhatsAppPackLeo) {

    botonWhatsAppPackLeo.onclick =
        function () {

            let enlacePackLeo =
                window.location.href;

            let mensajePackLeo =
                "🐯 Mirá este pack de stickers de Leo " +
                "de DinoSad Web:\n\n" +
                enlacePackLeo;

            let enlaceWhatsAppPackLeo =
                "https://wa.me/?text=" +
                encodeURIComponent(
                    mensajePackLeo
                );

            window.open(
                enlaceWhatsAppPackLeo,
                "_blank"
            );

        };

}
// ==================================================
// COPIAR ENLACE DEL PACK DE LEO
// ==================================================

let botonCopiarEnlacePackLeo =
    document.getElementById(
        "btnCopiarEnlacePackLeo"
    );


// ===============================
// COPIAR ENLACE
// ===============================

if (botonCopiarEnlacePackLeo) {

    botonCopiarEnlacePackLeo.onclick =
        async function () {

            let enlacePackLeo =
                window.location.href;


            // ===========================
            // PORTAPAPELES MODERNO
            // ===========================

            if (navigator.clipboard) {

                try {

                    await navigator.clipboard.writeText(
                        enlacePackLeo
                    );

                    alert(
                        "🔗 ¡Enlace copiado!"
                    );

                    return;

                } catch (error) {

                    console.log(
                        "No se pudo usar Clipboard API."
                    );

                }

            }


            // ===========================
            // MÉTODO ALTERNATIVO
            // ===========================

            let campoCopiarPackLeo =
                document.createElement(
                    "textarea"
                );

            campoCopiarPackLeo.value =
                enlacePackLeo;

            document.body.appendChild(
                campoCopiarPackLeo
            );

            campoCopiarPackLeo.select();

            document.execCommand(
                "copy"
            );

            document.body.removeChild(
                campoCopiarPackLeo
            );

            alert(
                "🔗 ¡Enlace copiado!"
            );

        };

}
// ==================================================
// COMPARTIR PACK DE LEO
// COMPARTIR EN...
// ==================================================

let botonCompartirNativoPackLeo =
    document.getElementById(
        "btnCompartirNativoPackLeo"
    );


// ===============================
// COMPARTIR CON EL SISTEMA
// ===============================

if (botonCompartirNativoPackLeo) {

    botonCompartirNativoPackLeo.onclick =
        async function () {

            let enlacePackLeo =
                window.location.href;

            if (navigator.share) {

                try {

                    await navigator.share({

                        title:
                            "Pack de stickers de Leo 🐯",

                        text:
                            "🐯 Mirá este pack de stickers de Leo de DinoSad Web",

                        url:
                            enlacePackLeo

                    });

                } catch (error) {

                    // El usuario cerró el menú
                    // de compartir.

                }

            } else {

                alert(
                    "📤 Tu dispositivo o navegador no admite el menú de compartir."
                );

            }

        };

}