// ===============================
// SECCIONES INTERNAS
// ===============================

// Inicio
let inicio = document.getElementById("inicio");

// Stickers
let seccionStickers = document.getElementById("seccionStickers");
let btnStikers = document.getElementById("btnStikers");
let btnVolver = document.getElementById("btnVolver");

// Detrás de DinoSad
let seccionDetras = document.getElementById("seccionDetras");
let btnProceso = document.getElementById("btnProceso");
let btnVolverDetras = document.getElementById("btnVolverDetras");

// ===============================
// ABRIR STICKERS
// ===============================

if (btnStikers) {

    btnStikers.onclick = function () {

        inicio.style.display = "none";
        seccionDetras.style.display = "none";
        seccionStickers.style.display = "block";

    };

}

// ===============================
// VOLVER DESDE STICKERS
// ===============================

if (btnVolver) {

    btnVolver.onclick = function () {

        seccionStickers.style.display = "none";
        inicio.style.display = "block";

    };

}

// ===============================
// ABRIR DETRÁS DE DINOSAD
// ===============================

if (btnProceso) {

    btnProceso.onclick = function () {

        inicio.style.display = "none";
        seccionStickers.style.display = "none";
        seccionDetras.style.display = "block";

    };

}

// ===============================
// VOLVER DESDE DETRÁS DE DINOSAD
// ===============================

if (btnVolverDetras) {

    btnVolverDetras.onclick = function () {

        seccionDetras.style.display = "none";
        inicio.style.display = "block";

    };

}

// ===============================
// VISOR DE STICKERS
// ===============================

function verSticker(imagen) {

    let visor = document.getElementById("visor");
    let grande = document.getElementById("imagenGrande");

    if (!visor || !grande) return;

    grande.src = imagen;

    visor.style.display = "flex";

}

function cerrarSticker() {

    let visor = document.getElementById("visor");

    if (visor) {

        visor.style.display = "none";

    }

}