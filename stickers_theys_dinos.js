// ==================================================
// THEYS DINOS - SUBSECCIONES
// ==================================================

let btnStickersIndividualesTheys = document.getElementById("btnStickersIndividualesTheys");
let btnPacksTheys = document.getElementById("btnPacksTheys");
let stickersIndividualesTheys = document.getElementById("stickersIndividualesTheys");
let packsTheys = document.getElementById("packsTheys");
let btnVolverStickersIndividualesTheys = document.getElementById("btnVolverStickersIndividualesTheys");
let btnVolverPacksTheys = document.getElementById("btnVolverPacksTheys");

let estadoStickersTheys = "stickers";
let estadoPacksTheys = "packs";

let paginaStickersTheys1 = document.getElementById("paginaStickersTheys1");
let paginaStickersTheys2 = document.getElementById("paginaStickersTheys2");
let btnAnteriorStickersTheys = document.getElementById("btnAnteriorStickersTheys");
let btnSiguienteStickersTheys = document.getElementById("btnSiguienteStickersTheys");
let paginaActualStickersTheys = 1;

let paginaPacksTheys1 = document.getElementById("paginaPacksTheys1");
let paginaPacksTheys2 = document.getElementById("paginaPacksTheys2");
let btnAnteriorPacksTheys = document.getElementById("btnAnteriorPacksTheys");
let btnSiguientePacksTheys = document.getElementById("btnSiguientePacksTheys");
let paginaActualPacksTheys = 1;

let opcionesDescargaStickerTheys = document.getElementById("opcionesDescargaStickerTheys");
let opcionesCompartirStickerTheys = document.getElementById("opcionesCompartirStickerTheys");
let opcionesCompartirPackTheys = document.getElementById("opcionesCompartirPackTheys");

let stickerTheysSeleccionado = null;
let packTheysSeleccionado = null;

function mostrarNavegacionStickersTheys() {
    if (btnAnteriorStickersTheys) btnAnteriorStickersTheys.style.display = "inline-block";
    if (btnSiguienteStickersTheys) btnSiguienteStickersTheys.style.display = "inline-block";
}

function ocultarNavegacionStickersTheys() {
    if (btnAnteriorStickersTheys) btnAnteriorStickersTheys.style.display = "none";
    if (btnSiguienteStickersTheys) btnSiguienteStickersTheys.style.display = "none";
}

function mostrarNavegacionPacksTheys() {
    if (btnAnteriorPacksTheys) btnAnteriorPacksTheys.style.display = "inline-block";
    if (btnSiguientePacksTheys) btnSiguientePacksTheys.style.display = "inline-block";
}

function ocultarNavegacionPacksTheys() {
    if (btnAnteriorPacksTheys) btnAnteriorPacksTheys.style.display = "none";
    if (btnSiguientePacksTheys) btnSiguientePacksTheys.style.display = "none";
}

function mostrarPaginaStickersTheys() {
    if (paginaStickersTheys1) paginaStickersTheys1.style.display = "none";
    if (paginaStickersTheys2) paginaStickersTheys2.style.display = "none";

    if (paginaActualStickersTheys === 1 && paginaStickersTheys1) {
        paginaStickersTheys1.style.display = "block";
    }

    if (paginaActualStickersTheys === 2 && paginaStickersTheys2) {
        paginaStickersTheys2.style.display = "block";
    }
}

function mostrarPaginaPacksTheys() {
    if (paginaPacksTheys1) paginaPacksTheys1.style.display = "none";
    if (paginaPacksTheys2) paginaPacksTheys2.style.display = "none";

    if (paginaActualPacksTheys === 1 && paginaPacksTheys1) {
        paginaPacksTheys1.style.display = "block";
    }

    if (paginaActualPacksTheys === 2 && paginaPacksTheys2) {
        paginaPacksTheys2.style.display = "block";
    }
}

if (btnStickersIndividualesTheys) {
    btnStickersIndividualesTheys.onclick = function () {
        if (coleccionTheys) coleccionTheys.style.display = "none";
        if (stickersIndividualesTheys) stickersIndividualesTheys.style.display = "block";
        if (packsTheys) packsTheys.style.display = "none";
        if (opcionesDescargaStickerTheys) opcionesDescargaStickerTheys.style.display = "none";
        if (opcionesCompartirStickerTheys) opcionesCompartirStickerTheys.style.display = "none";
        estadoStickersTheys = "stickers";
        mostrarPaginaStickersTheys();
        mostrarNavegacionStickersTheys();
    };
}

if (btnPacksTheys) {
    btnPacksTheys.onclick = function () {
        if (coleccionTheys) coleccionTheys.style.display = "none";
        if (stickersIndividualesTheys) stickersIndividualesTheys.style.display = "none";
        if (packsTheys) packsTheys.style.display = "block";
        if (opcionesCompartirPackTheys) opcionesCompartirPackTheys.style.display = "none";
        estadoPacksTheys = "packs";
        mostrarPaginaPacksTheys();
        mostrarNavegacionPacksTheys();
    };
}

if (btnSiguienteStickersTheys) {
    btnSiguienteStickersTheys.onclick = function () {
        if (estadoStickersTheys !== "stickers") return;
        if (paginaActualStickersTheys < 2) {
            paginaActualStickersTheys++;
            mostrarPaginaStickersTheys();
        }
    };
}

if (btnAnteriorStickersTheys) {
    btnAnteriorStickersTheys.onclick = function () {
        if (estadoStickersTheys !== "stickers") return;
        if (paginaActualStickersTheys > 1) {
            paginaActualStickersTheys--;
            mostrarPaginaStickersTheys();
        }
    };
}

if (btnSiguientePacksTheys) {
    btnSiguientePacksTheys.onclick = function () {
        if (estadoPacksTheys !== "packs") return;
        if (paginaActualPacksTheys < 2) {
            paginaActualPacksTheys++;
            mostrarPaginaPacksTheys();
        }
    };
}

if (btnAnteriorPacksTheys) {
    btnAnteriorPacksTheys.onclick = function () {
        if (estadoPacksTheys !== "packs") return;
        if (paginaActualPacksTheys > 1) {
            paginaActualPacksTheys--;
            mostrarPaginaPacksTheys();
        }
    };
}

function abrirOpcionesDescargaTheys() {
    estadoStickersTheys = "descarga";
    if (paginaStickersTheys1) paginaStickersTheys1.style.display = "none";
    if (paginaStickersTheys2) paginaStickersTheys2.style.display = "none";
    ocultarNavegacionStickersTheys();
    if (opcionesCompartirStickerTheys) opcionesCompartirStickerTheys.style.display = "none";
    if (opcionesDescargaStickerTheys) opcionesDescargaStickerTheys.style.display = "block";
}

function abrirOpcionesCompartirTheys() {
    estadoStickersTheys = "compartir";
    if (paginaStickersTheys1) paginaStickersTheys1.style.display = "none";
    if (paginaStickersTheys2) paginaStickersTheys2.style.display = "none";
    ocultarNavegacionStickersTheys();
    if (opcionesDescargaStickerTheys) opcionesDescargaStickerTheys.style.display = "none";
    if (opcionesCompartirStickerTheys) opcionesCompartirStickerTheys.style.display = "block";
}

function volverAStickersTheys() {
    if (opcionesDescargaStickerTheys) opcionesDescargaStickerTheys.style.display = "none";
    if (opcionesCompartirStickerTheys) opcionesCompartirStickerTheys.style.display = "none";
    estadoStickersTheys = "stickers";
    mostrarPaginaStickersTheys();
    mostrarNavegacionStickersTheys();
}

function abrirOpcionesCompartirPackTheys() {
    estadoPacksTheys = "compartir";
    if (paginaPacksTheys1) paginaPacksTheys1.style.display = "none";
    if (paginaPacksTheys2) paginaPacksTheys2.style.display = "none";
    ocultarNavegacionPacksTheys();
    if (opcionesCompartirPackTheys) opcionesCompartirPackTheys.style.display = "block";
}

function volverAPacksTheys() {
    if (opcionesCompartirPackTheys) opcionesCompartirPackTheys.style.display = "none";
    estadoPacksTheys = "packs";
    mostrarPaginaPacksTheys();
    mostrarNavegacionPacksTheys();
}

let botonesDescargarStickerTheys = document.querySelectorAll(".btnDescargarStickerTheys");

botonesDescargarStickerTheys.forEach(function (boton) {
    boton.onclick = function () {
        let tarjeta = boton.closest(".stickerCard");
        if (!tarjeta) return;
        stickerTheysSeleccionado = tarjeta.querySelector("img");
        abrirOpcionesDescargaTheys();
    };
});

let botonesCompartirStickerTheys = document.querySelectorAll(".btnCompartirStickerTheys");

botonesCompartirStickerTheys.forEach(function (boton) {
    boton.onclick = function () {
        let tarjeta = boton.closest(".stickerCard");
        if (!tarjeta) return;
        stickerTheysSeleccionado = tarjeta.querySelector("img");
        abrirOpcionesCompartirTheys();
    };
});

let botonesDescargarPackTheys = document.querySelectorAll(".btnDescargarPackTheys");

botonesDescargarPackTheys.forEach(function (boton) {
    boton.onclick = function () {
        let numeroPack = boton.dataset.pack;
        alert("📱 La descarga del Pack Theys Dinos " + numeroPack + " estará disponible con la futura aplicación de stickers.");
    };
});

let botonesCompartirPackTheys = document.querySelectorAll(".btnCompartirPackTheys");

botonesCompartirPackTheys.forEach(function (boton) {
    boton.onclick = function () {
        let tarjeta = boton.closest(".packCard");
        if (!tarjeta) return;
        packTheysSeleccionado = tarjeta.querySelector("img");
        abrirOpcionesCompartirPackTheys();
    };
});

let btnCerrarDescargaTheys = document.getElementById("btnCerrarDescargaTheys");
if (btnCerrarDescargaTheys) {
    btnCerrarDescargaTheys.onclick = function () {
        volverAStickersTheys();
    };
}

let btnCerrarCompartirTheys = document.getElementById("btnCerrarCompartirTheys");
if (btnCerrarCompartirTheys) {
    btnCerrarCompartirTheys.onclick = function () {
        volverAStickersTheys();
    };
}

let btnCerrarCompartirPackTheys = document.getElementById("btnCerrarCompartirPackTheys");
if (btnCerrarCompartirPackTheys) {
    btnCerrarCompartirPackTheys.onclick = function () {
        volverAPacksTheys();
    };
}

if (btnVolverStickersIndividualesTheys) {
    btnVolverStickersIndividualesTheys.onclick = function () {
        if (estadoStickersTheys === "descarga" || estadoStickersTheys === "compartir") {
            volverAStickersTheys();
            return;
        }
        if (stickersIndividualesTheys) stickersIndividualesTheys.style.display = "none";
        if (coleccionTheys) coleccionTheys.style.display = "block";
    };
}

if (btnVolverPacksTheys) {
    btnVolverPacksTheys.onclick = function () {
        if (estadoPacksTheys === "compartir") {
            volverAPacksTheys();
            return;
        }
        if (packsTheys) packsTheys.style.display = "none";
        if (coleccionTheys) coleccionTheys.style.display = "block";
    };
}

let btnDescargarStickerAppTheys = document.getElementById("btnDescargarStickerAppTheys");
if (btnDescargarStickerAppTheys) {
    btnDescargarStickerAppTheys.onclick = function () {
        alert("📱 Esta función estará disponible con la futura aplicación de stickers.");
    };
}

let btnDescargarImagenTheys = document.getElementById("btnDescargarImagenTheys");
if (btnDescargarImagenTheys) {
    btnDescargarImagenTheys.onclick = function () {
        if (!stickerTheysSeleccionado) {
            alert("❌ No se encontró el sticker.");
            return;
        }

        let enlace = document.createElement("a");
        enlace.href = stickerTheysSeleccionado.src;
        enlace.download = "sticker-theys-dinos.png";
        document.body.appendChild(enlace);
        enlace.click();
        document.body.removeChild(enlace);
    };
}

function obtenerEnlaceStickerTheys() {
    return window.location.href;
}

function obtenerEnlacePackTheys() {
    return window.location.href;
}

let btnCompartirWhatsAppTheys = document.getElementById("btnCompartirWhatsAppTheys");
if (btnCompartirWhatsAppTheys) {
    btnCompartirWhatsAppTheys.onclick = function () {
        let mensaje = "🦖 Mirá este sticker de Theys Dinos de DinoSad Web:\n\n" + obtenerEnlaceStickerTheys();
        window.open("https://wa.me/?text=" + encodeURIComponent(mensaje), "_blank");
    };
}

let btnCompartirWhatsAppPackTheys = document.getElementById("btnCompartirWhatsAppPackTheys");
if (btnCompartirWhatsAppPackTheys) {
    btnCompartirWhatsAppPackTheys.onclick = function () {
        let mensaje = "🦖 Mirá este pack de stickers de Theys Dinos:\n\n" + obtenerEnlacePackTheys();
        window.open("https://wa.me/?text=" + encodeURIComponent(mensaje), "_blank");
    };
}

let btnCompartirEnTheys = document.getElementById("btnCompartirEnTheys");
if (btnCompartirEnTheys) {
    btnCompartirEnTheys.onclick = async function () {
        if (!navigator.share) {
            alert("📤 Tu dispositivo o navegador no admite el menú de compartir.");
            return;
        }

        try {
            await navigator.share({
                title: "Sticker de Theys Dinos 🦖",
                text: "🦖 Mirá este sticker de Theys Dinos de DinoSad Web",
                url: obtenerEnlaceStickerTheys()
            });
        } catch (error) {
            // El usuario canceló el menú de compartir.
        }
    };
}

let btnCopiarEnlaceTheys = document.getElementById("btnCopiarEnlaceTheys");
if (btnCopiarEnlaceTheys) {
    btnCopiarEnlaceTheys.onclick = async function () {
        try {
            await navigator.clipboard.writeText(obtenerEnlaceStickerTheys());
            alert("🔗 ¡Enlace copiado!");
        } catch (error) {
            alert("❌ No se pudo copiar el enlace.");
        }
    };
}

let btnCopiarEnlacePackTheys = document.getElementById("btnCopiarEnlacePackTheys");
if (btnCopiarEnlacePackTheys) {
    btnCopiarEnlacePackTheys.onclick = async function () {
        try {
            await navigator.clipboard.writeText(obtenerEnlacePackTheys());
            alert("🔗 ¡Enlace copiado!");
        } catch (error) {
            alert("❌ No se pudo copiar el enlace.");
        }
    };
}

let btnCompartirNativoPackTheys = document.getElementById("btnCompartirNativoPackTheys");
if (btnCompartirNativoPackTheys) {
    btnCompartirNativoPackTheys.onclick = async function () {
        if (!navigator.share) {
            alert("📤 Tu dispositivo o navegador no admite el menú de compartir.");
            return;
        }

        try {
            await navigator.share({
                title: "Pack de stickers de Theys Dinos 🦖",
                text: "🦖 Mirá este pack de stickers de Theys Dinos de DinoSad Web",
                url: obtenerEnlacePackTheys()
            });
        } catch (error) {
            // El usuario canceló el menú de compartir.
        }
    };
}

let btnDescargarStickerTheys = document.getElementById("btnDescargarStickerTheys");
if (btnDescargarStickerTheys) {
    btnDescargarStickerTheys.onclick = function () {
        let tarjeta = btnDescargarStickerTheys.closest(".stickerCard");
        if (!tarjeta) return;
        stickerTheysSeleccionado = tarjeta.querySelector("img");
        abrirOpcionesDescargaTheys();
    };
}

let btnCompartirStickerTheys = document.getElementById("btnCompartirStickerTheys");
if (btnCompartirStickerTheys) {
    btnCompartirStickerTheys.onclick = function () {
        let tarjeta = btnCompartirStickerTheys.closest(".stickerCard");
        if (!tarjeta) return;
        stickerTheysSeleccionado = tarjeta.querySelector("img");
        abrirOpcionesCompartirTheys();
    };
}

let btnDescargarPackTheys = document.getElementById("btnDescargarPackTheys");
if (btnDescargarPackTheys) {
    btnDescargarPackTheys.onclick = function () {
        alert("📱 La descarga del pack estará disponible con la futura aplicación de stickers.");
    };
}

let btnCompartirPackTheys = document.getElementById("btnCompartirPackTheys");
if (btnCompartirPackTheys) {
    btnCompartirPackTheys.onclick = function () {
        let tarjeta = btnCompartirPackTheys.closest(".packCard");
        if (!tarjeta) return;
        packTheysSeleccionado = tarjeta.querySelector("img");
        abrirOpcionesCompartirPackTheys();
    };
}
