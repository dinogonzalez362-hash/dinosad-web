// ==================================================
// NICO - SUBSECCIONES
// ==================================================

let btnStickersIndividualesNico = document.getElementById("btnStickersIndividualesNico");
let btnPacksNico = document.getElementById("btnPacksNico");
let stickersIndividualesNico = document.getElementById("stickersIndividualesNico");
let packsNico = document.getElementById("packsNico");
let btnVolverStickersIndividualesNico = document.getElementById("btnVolverStickersIndividualesNico");
let btnVolverPacksNico = document.getElementById("btnVolverPacksNico");

let estadoStickersNico = "stickers";
let estadoPacksNico = "packs";

let paginaStickersNico1 = document.getElementById("paginaStickersNico1");
let paginaStickersNico2 = document.getElementById("paginaStickersNico2");
let btnAnteriorStickersNico = document.getElementById("btnAnteriorStickersNico");
let btnSiguienteStickersNico = document.getElementById("btnSiguienteStickersNico");
let paginaActualStickersNico = 1;

let paginaPacksNico1 = document.getElementById("paginaPacksNico1");
let paginaPacksNico2 = document.getElementById("paginaPacksNico2");
let btnAnteriorPacksNico = document.getElementById("btnAnteriorPacksNico");
let btnSiguientePacksNico = document.getElementById("btnSiguientePacksNico");
let paginaActualPacksNico = 1;

let opcionesDescargaStickerNico = document.getElementById("opcionesDescargaStickerNico");
let opcionesCompartirStickerNico = document.getElementById("opcionesCompartirStickerNico");
let opcionesCompartirPackNico = document.getElementById("opcionesCompartirPackNico");

let stickerNicoSeleccionado = null;
let packNicoSeleccionado = null;

function mostrarNavegacionStickersNico() {
    if (btnAnteriorStickersNico) btnAnteriorStickersNico.style.display = "inline-block";
    if (btnSiguienteStickersNico) btnSiguienteStickersNico.style.display = "inline-block";
}

function ocultarNavegacionStickersNico() {
    if (btnAnteriorStickersNico) btnAnteriorStickersNico.style.display = "none";
    if (btnSiguienteStickersNico) btnSiguienteStickersNico.style.display = "none";
}

function mostrarNavegacionPacksNico() {
    if (btnAnteriorPacksNico) btnAnteriorPacksNico.style.display = "inline-block";
    if (btnSiguientePacksNico) btnSiguientePacksNico.style.display = "inline-block";
}

function ocultarNavegacionPacksNico() {
    if (btnAnteriorPacksNico) btnAnteriorPacksNico.style.display = "none";
    if (btnSiguientePacksNico) btnSiguientePacksNico.style.display = "none";
}

function mostrarPaginaStickersNico() {
    if (paginaStickersNico1) paginaStickersNico1.style.display = "none";
    if (paginaStickersNico2) paginaStickersNico2.style.display = "none";

    if (paginaActualStickersNico === 1 && paginaStickersNico1) {
        paginaStickersNico1.style.display = "block";
    }

    if (paginaActualStickersNico === 2 && paginaStickersNico2) {
        paginaStickersNico2.style.display = "block";
    }
}

function mostrarPaginaPacksNico() {
    if (paginaPacksNico1) paginaPacksNico1.style.display = "none";
    if (paginaPacksNico2) paginaPacksNico2.style.display = "none";

    if (paginaActualPacksNico === 1 && paginaPacksNico1) {
        paginaPacksNico1.style.display = "block";
    }

    if (paginaActualPacksNico === 2 && paginaPacksNico2) {
        paginaPacksNico2.style.display = "block";
    }
}

if (btnStickersIndividualesNico) {
    btnStickersIndividualesNico.onclick = function () {
        if (coleccionNico) coleccionNico.style.display = "none";
        if (stickersIndividualesNico) stickersIndividualesNico.style.display = "block";
        if (packsNico) packsNico.style.display = "none";
        if (opcionesDescargaStickerNico) opcionesDescargaStickerNico.style.display = "none";
        if (opcionesCompartirStickerNico) opcionesCompartirStickerNico.style.display = "none";
        estadoStickersNico = "stickers";
        mostrarPaginaStickersNico();
        mostrarNavegacionStickersNico();
    };
}

if (btnPacksNico) {
    btnPacksNico.onclick = function () {
        if (coleccionNico) coleccionNico.style.display = "none";
        if (stickersIndividualesNico) stickersIndividualesNico.style.display = "none";
        if (packsNico) packsNico.style.display = "block";
        if (opcionesCompartirPackNico) opcionesCompartirPackNico.style.display = "none";
        estadoPacksNico = "packs";
        mostrarPaginaPacksNico();
        mostrarNavegacionPacksNico();
    };
}

if (btnSiguienteStickersNico) {
    btnSiguienteStickersNico.onclick = function () {
        if (estadoStickersNico !== "stickers") return;
        if (paginaActualStickersNico < 2) {
            paginaActualStickersNico++;
            mostrarPaginaStickersNico();
        }
    };
}

if (btnAnteriorStickersNico) {
    btnAnteriorStickersNico.onclick = function () {
        if (estadoStickersNico !== "stickers") return;
        if (paginaActualStickersNico > 1) {
            paginaActualStickersNico--;
            mostrarPaginaStickersNico();
        }
    };
}

if (btnSiguientePacksNico) {
    btnSiguientePacksNico.onclick = function () {
        if (estadoPacksNico !== "packs") return;
        if (paginaActualPacksNico < 2) {
            paginaActualPacksNico++;
            mostrarPaginaPacksNico();
        }
    };
}

if (btnAnteriorPacksNico) {
    btnAnteriorPacksNico.onclick = function () {
        if (estadoPacksNico !== "packs") return;
        if (paginaActualPacksNico > 1) {
            paginaActualPacksNico--;
            mostrarPaginaPacksNico();
        }
    };
}

function abrirOpcionesDescargaNico() {
    estadoStickersNico = "descarga";
    if (paginaStickersNico1) paginaStickersNico1.style.display = "none";
    if (paginaStickersNico2) paginaStickersNico2.style.display = "none";
    ocultarNavegacionStickersNico();
    if (opcionesCompartirStickerNico) opcionesCompartirStickerNico.style.display = "none";
    if (opcionesDescargaStickerNico) opcionesDescargaStickerNico.style.display = "block";
}

function abrirOpcionesCompartirNico() {
    estadoStickersNico = "compartir";
    if (paginaStickersNico1) paginaStickersNico1.style.display = "none";
    if (paginaStickersNico2) paginaStickersNico2.style.display = "none";
    ocultarNavegacionStickersNico();
    if (opcionesDescargaStickerNico) opcionesDescargaStickerNico.style.display = "none";
    if (opcionesCompartirStickerNico) opcionesCompartirStickerNico.style.display = "block";
}

function volverAStickersNico() {
    if (opcionesDescargaStickerNico) opcionesDescargaStickerNico.style.display = "none";
    if (opcionesCompartirStickerNico) opcionesCompartirStickerNico.style.display = "none";
    estadoStickersNico = "stickers";
    mostrarPaginaStickersNico();
    mostrarNavegacionStickersNico();
}

function abrirOpcionesCompartirPackNico() {
    estadoPacksNico = "compartir";
    if (paginaPacksNico1) paginaPacksNico1.style.display = "none";
    if (paginaPacksNico2) paginaPacksNico2.style.display = "none";
    ocultarNavegacionPacksNico();
    if (opcionesCompartirPackNico) opcionesCompartirPackNico.style.display = "block";
}

function volverAPacksNico() {
    if (opcionesCompartirPackNico) opcionesCompartirPackNico.style.display = "none";
    estadoPacksNico = "packs";
    mostrarPaginaPacksNico();
    mostrarNavegacionPacksNico();
}

let botonesDescargarStickerNico = document.querySelectorAll(".btnDescargarStickerNico");

botonesDescargarStickerNico.forEach(function (boton) {
    boton.onclick = function () {
        let tarjeta = boton.closest(".stickerCard");
        if (!tarjeta) return;
        stickerNicoSeleccionado = tarjeta.querySelector("img");
        abrirOpcionesDescargaNico();
    };
});

let botonesCompartirStickerNico = document.querySelectorAll(".btnCompartirStickerNico");

botonesCompartirStickerNico.forEach(function (boton) {
    boton.onclick = function () {
        let tarjeta = boton.closest(".stickerCard");
        if (!tarjeta) return;
        stickerNicoSeleccionado = tarjeta.querySelector("img");
        abrirOpcionesCompartirNico();
    };
});

let botonesDescargarPackNico = document.querySelectorAll(".btnDescargarPackNico");

botonesDescargarPackNico.forEach(function (boton) {
    boton.onclick = function () {
        let numeroPack = boton.dataset.pack;
        alert("📱 La descarga del Pack Nico " + numeroPack + " estará disponible con la futura aplicación de stickers.");
    };
});

let botonesCompartirPackNico = document.querySelectorAll(".btnCompartirPackNico");

botonesCompartirPackNico.forEach(function (boton) {
    boton.onclick = function () {
        let tarjeta = boton.closest(".packCard");
        if (!tarjeta) return;
        packNicoSeleccionado = tarjeta.querySelector("img");
        abrirOpcionesCompartirPackNico();
    };
});

let btnCerrarDescargaNico = document.getElementById("btnCerrarDescargaNico");
if (btnCerrarDescargaNico) {
    btnCerrarDescargaNico.onclick = function () {
        volverAStickersNico();
    };
}

let btnCerrarCompartirNico = document.getElementById("btnCerrarCompartirNico");
if (btnCerrarCompartirNico) {
    btnCerrarCompartirNico.onclick = function () {
        volverAStickersNico();
    };
}

let btnCerrarCompartirPackNico = document.getElementById("btnCerrarCompartirPackNico");
if (btnCerrarCompartirPackNico) {
    btnCerrarCompartirPackNico.onclick = function () {
        volverAPacksNico();
    };
}

if (btnVolverStickersIndividualesNico) {
    btnVolverStickersIndividualesNico.onclick = function () {
        if (estadoStickersNico === "descarga" || estadoStickersNico === "compartir") {
            volverAStickersNico();
            return;
        }
        if (stickersIndividualesNico) stickersIndividualesNico.style.display = "none";
        if (coleccionNico) coleccionNico.style.display = "block";
    };
}

if (btnVolverPacksNico) {
    btnVolverPacksNico.onclick = function () {
        if (estadoPacksNico === "compartir") {
            volverAPacksNico();
            return;
        }
        if (packsNico) packsNico.style.display = "none";
        if (coleccionNico) coleccionNico.style.display = "block";
    };
}

let btnDescargarStickerAppNico = document.getElementById("btnDescargarStickerAppNico");
if (btnDescargarStickerAppNico) {
    btnDescargarStickerAppNico.onclick = function () {
        alert("📱 Esta función estará disponible con la futura aplicación de stickers.");
    };
}

let btnDescargarImagenNico = document.getElementById("btnDescargarImagenNico");
if (btnDescargarImagenNico) {
    btnDescargarImagenNico.onclick = function () {
        if (!stickerNicoSeleccionado) {
            alert("❌ No se encontró el sticker.");
            return;
        }

        let enlace = document.createElement("a");
        enlace.href = stickerNicoSeleccionado.src;
        enlace.download = "sticker-nico.png";
        document.body.appendChild(enlace);
        enlace.click();
        document.body.removeChild(enlace);
    };
}

function obtenerEnlaceStickerNico() {
    return window.location.href;
}

function obtenerEnlacePackNico() {
    return window.location.href;
}

let btnCompartirWhatsAppNico = document.getElementById("btnCompartirWhatsAppNico");
if (btnCompartirWhatsAppNico) {
    btnCompartirWhatsAppNico.onclick = function () {
        let mensaje = "🦖 Mirá este sticker de Nico de DinoSad Web:\n\n" + obtenerEnlaceStickerNico();
        window.open("https://wa.me/?text=" + encodeURIComponent(mensaje), "_blank");
    };
}

let btnCompartirWhatsAppPackNico = document.getElementById("btnCompartirWhatsAppPackNico");
if (btnCompartirWhatsAppPackNico) {
    btnCompartirWhatsAppPackNico.onclick = function () {
        let mensaje = "🦖 Mirá este pack de stickers de Nico:\n\n" + obtenerEnlacePackNico();
        window.open("https://wa.me/?text=" + encodeURIComponent(mensaje), "_blank");
    };
}

let btnCompartirEnNico = document.getElementById("btnCompartirEnNico");
if (btnCompartirEnNico) {
    btnCompartirEnNico.onclick = async function () {
        if (!navigator.share) {
            alert("📤 Tu dispositivo o navegador no admite el menú de compartir.");
            return;
        }

        try {
            await navigator.share({
                title: "Sticker de Nico 🦄",
                text: "🦖 Mirá este sticker de Nico de DinoSad Web",
                url: obtenerEnlaceStickerNico()
            });
        } catch (error) {
            // El usuario canceló el menú de compartir.
        }
    };
}

let btnCopiarEnlaceNico = document.getElementById("btnCopiarEnlaceNico");
if (btnCopiarEnlaceNico) {
    btnCopiarEnlaceNico.onclick = async function () {
        try {
            await navigator.clipboard.writeText(obtenerEnlaceStickerNico());
            alert("🔗 ¡Enlace copiado!");
        } catch (error) {
            alert("❌ No se pudo copiar el enlace.");
        }
    };
}

let btnCopiarEnlacePackNico = document.getElementById("btnCopiarEnlacePackNico");
if (btnCopiarEnlacePackNico) {
    btnCopiarEnlacePackNico.onclick = async function () {
        try {
            await navigator.clipboard.writeText(obtenerEnlacePackNico());
            alert("🔗 ¡Enlace copiado!");
        } catch (error) {
            alert("❌ No se pudo copiar el enlace.");
        }
    };
}

let btnCompartirNativoPackNico = document.getElementById("btnCompartirNativoPackNico");
if (btnCompartirNativoPackNico) {
    btnCompartirNativoPackNico.onclick = async function () {
        if (!navigator.share) {
            alert("📤 Tu dispositivo o navegador no admite el menú de compartir.");
            return;
        }

        try {
            await navigator.share({
                title: "Pack de stickers de Nico 🦄",
                text: "🦖 Mirá este pack de stickers de Nico de DinoSad Web",
                url: obtenerEnlacePackNico()
            });
        } catch (error) {
            // El usuario canceló el menú de compartir.
        }
    };
}

let btnDescargarStickerNico = document.getElementById("btnDescargarStickerNico");
if (btnDescargarStickerNico) {
    btnDescargarStickerNico.onclick = function () {
        let tarjeta = btnDescargarStickerNico.closest(".stickerCard");
        if (!tarjeta) return;
        stickerNicoSeleccionado = tarjeta.querySelector("img");
        abrirOpcionesDescargaNico();
    };
}

let btnCompartirStickerNico = document.getElementById("btnCompartirStickerNico");
if (btnCompartirStickerNico) {
    btnCompartirStickerNico.onclick = function () {
        let tarjeta = btnCompartirStickerNico.closest(".stickerCard");
        if (!tarjeta) return;
        stickerNicoSeleccionado = tarjeta.querySelector("img");
        abrirOpcionesCompartirNico();
    };
}

let btnDescargarPackNico = document.getElementById("btnDescargarPackNico");
if (btnDescargarPackNico) {
    btnDescargarPackNico.onclick = function () {
        alert("📱 La descarga del pack estará disponible con la futura aplicación de stickers.");
    };
}

let btnCompartirPackNico = document.getElementById("btnCompartirPackNico");
if (btnCompartirPackNico) {
    btnCompartirPackNico.onclick = function () {
        let tarjeta = btnCompartirPackNico.closest(".packCard");
        if (!tarjeta) return;
        packNicoSeleccionado = tarjeta.querySelector("img");
        abrirOpcionesCompartirPackNico();
    };
}

/*
    btnDescargarImagenNico.onclick =
        function () {

            let imagenSticker =
                document.querySelector(
                    "#tarjetaStickerNico img"
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
                "sticker-nico.png";

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
// COMPARTIR STICKER - NICO
// ==================================================

let btnCompartirStickerNico =
    document.getElementById(
        "btnCompartirStickerNico"
    );

let opcionesCompartirStickerNico =
    document.getElementById(
        "opcionesCompartirStickerNico"
    );


// ===============================
// ABRIR OPCIONES DE COMPARTIR
// ===============================

if (
    btnCompartirStickerNico &&
    tarjetaStickerNico &&
    opcionesCompartirStickerNico
) {

    btnCompartirStickerNico.onclick =
        function () {

            tarjetaStickerNico.style.display =
                "none";

            opcionesDescargaStickerNico.style.display =
                "none";

            opcionesCompartirStickerNico.style.display =
                "block";

        };

}
// ===============================
// CERRAR OPCIONES DE COMPARTIR
// ===============================

let btnCerrarCompartirNico =
    document.getElementById(
        "btnCerrarCompartirNico"
    );


// ===============================
// VOLVER A LA TARJETA DEL STICKER
// ===============================

if (
    btnCerrarCompartirNico &&
    tarjetaStickerNico &&
    opcionesCompartirStickerNico
) {

    btnCerrarCompartirNico.onclick =
        function () {

            opcionesCompartirStickerNico.style.display =
                "none";

            tarjetaStickerNico.style.display =
                "block";

        };

}
// ===============================
// COMPARTIR STICKER POR WHATSAPP
// ===============================

let btnCompartirWhatsAppNico =
    document.getElementById(
        "btnCompartirWhatsAppNico"
    );


// ===============================
// OBTENER ENLACE DEL STICKER
// ===============================

function obtenerEnlaceStickerNico() {

    return window.location.href;

}


// ===============================
// WHATSAPP
// ===============================

if (btnCompartirWhatsAppNico) {

    btnCompartirWhatsAppNico.onclick =
        function () {

            let enlace =
                obtenerEnlaceStickerNico();

            let mensaje =
                "🦕 Mirá este sticker de Nico " +
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
// ===============================
// COMPARTIR EN...
// ===============================

let btnCompartirEnNico =
    document.getElementById(
        "btnCompartirEnNico"
    );


// ===============================
// COMPARTIR CON EL SISTEMA
// ===============================

if (btnCompartirEnNico) {

    btnCompartirEnNico.onclick =
        async function () {

            if (navigator.share) {

                try {

                    await navigator.share({

                        title:
                            "Sticker de Nico 🦕",

                        text:
                            "🦕 Mirá este sticker de Nico de DinoSad Web",

                        url:
                            obtenerEnlaceStickerNico()

                    });

                }
                catch (error) {

                    // El usuario canceló
                    // el menú de compartir.

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
// ===============================
// COPIAR ENLACE
// ===============================

let btnCopiarEnlaceNico =
    document.getElementById(
        "btnCopiarEnlaceNico"
    );

if (btnCopiarEnlaceNico) {

    btnCopiarEnlaceNico.onclick =
        async function () {

            let enlace =
                obtenerEnlaceStickerNico();


            // =======================
            // PORTAPAPELES MODERNO
            // =======================

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

// ==================================================
// COMPARTIR PACK - NICO
// ==================================================

let tarjetaPackNico =
    document.getElementById("tarjetaPackNico");

let btnCompartirPackNico =
    document.getElementById("btnCompartirPackNico");

let opcionesCompartirPackNico =
    document.getElementById("opcionesCompartirPackNico");

let btnCerrarCompartirPackNico =
    document.getElementById("btnCerrarCompartirPackNico");

if (
    btnCompartirPackNico &&
    tarjetaPackNico &&
    opcionesCompartirPackNico
) {
    btnCompartirPackNico.onclick = function () {
        tarjetaPackNico.style.display = "none";
        opcionesCompartirPackNico.style.display = "block";
    };
}

if (
    btnCerrarCompartirPackNico &&
    tarjetaPackNico &&
    opcionesCompartirPackNico
) {
    btnCerrarCompartirPackNico.onclick = function () {
        opcionesCompartirPackNico.style.display = "none";
        tarjetaPackNico.style.display = "block";
    };
}

let enlacePackNico = window.location.href;

let btnCompartirWhatsAppPackNico =
    document.getElementById("btnCompartirWhatsAppPackNico");

if (btnCompartirWhatsAppPackNico) {
    btnCompartirWhatsAppPackNico.onclick = function () {
        let mensaje =
            "🦕 Mirá este pack de stickers de Nico:\n\n" +
            enlacePackNico;

        window.open(
            "https://wa.me/?text=" + encodeURIComponent(mensaje),
            "_blank"
        );
    };
}

let btnCopiarEnlacePackNico =
    document.getElementById("btnCopiarEnlacePackNico");

if (btnCopiarEnlacePackNico) {
    btnCopiarEnlacePackNico.onclick = async function () {
        try {
            await navigator.clipboard.writeText(enlacePackNico);
            alert("🔗 ¡Enlace copiado!");
        } catch (error) {
            alert("❌ No se pudo copiar el enlace.");
        }
    };
}
*/

/*
let btnCompartirNativoPackNico =
    document.getElementById("btnCompartirNativoPackNico");

if (btnCompartirNativoPackNico) {
    btnCompartirNativoPackNico.onclick = async function () {
        if (!navigator.share) {
            alert("📤 Tu dispositivo o navegador no admite el menú de compartir.");
            return;
        }

        try {
            await navigator.share({
                title: "Pack de stickers de Nico 🦕",
                text: "🦕 Mirá este pack de stickers de Nico de DinoSad Web",
                url: enlacePackNico
            });
        } catch (error) {
            // El usuario canceló el menú de compartir.
        }
    };
}
*/

/*
let btnDescargarPackNico =
    document.getElementById("btnDescargarPackNico");

if (btnDescargarPackNico) {
    btnDescargarPackNico.onclick = function () {
        alert(
            "📱 La descarga de packs estará disponible " +
            "con la futura aplicación de stickers."
        );
    };
}
*/