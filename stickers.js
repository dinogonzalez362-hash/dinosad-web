// ==================================================
// SECCIONES DE STICKERS
// ==================================================


// ===============================
// INICIO
// ===============================

let inicio =
    document.getElementById(
        "inicio"
    );


// ===============================
// SECCIÓN PRINCIPAL DE STICKERS
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
// NUEVOS STICKERS
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
// BOTONES DE COLECCIONES
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


// ==================================================
// OCULTAR TODAS LAS COLECCIONES
// ==================================================

function ocultarColecciones() {

    if (coleccionAle) {

        coleccionAle.style.display =
            "none";

    }

    if (coleccionLeo) {

        coleccionLeo.style.display =
            "none";

    }

    if (coleccionNico) {

        coleccionNico.style.display =
            "none";

    }

    if (coleccionTheys) {

        coleccionTheys.style.display =
            "none";

    }

}


// ==================================================
// ABRIR SECCIÓN STICKERS
// ==================================================

if (btnStikers) {

    btnStikers.onclick =
        function () {

            if (inicio) {

                inicio.style.display =
                    "none";

            }

            if (seccionNuevosStikers) {

                seccionNuevosStikers.style.display =
                    "none";

            }

            ocultarColecciones();

            if (seccionStickers) {

                seccionStickers.style.display =
                    "block";

            }

        };

}


// ==================================================
// VOLVER AL INICIO
// ==================================================

if (btnVolver) {

    btnVolver.onclick =
        function () {

            if (seccionStickers) {

                seccionStickers.style.display =
                    "none";

            }

            if (inicio) {

                inicio.style.display =
                    "block";

            }

        };

}


// ==================================================
// ABRIR NUEVOS STICKERS
// ==================================================

if (btnNuevosStikers) {

    btnNuevosStikers.onclick =
        function () {

            if (inicio) {

                inicio.style.display =
                    "none";

            }

            if (seccionStickers) {

                seccionStickers.style.display =
                    "none";

            }

            ocultarColecciones();

            if (seccionNuevosStikers) {

                seccionNuevosStikers.style.display =
                    "block";

            }

        };

}


// ==================================================
// VOLVER DE NUEVOS
// ==================================================

if (btnVolverNuevosStikers) {

    btnVolverNuevosStikers.onclick =
        function () {

            if (seccionNuevosStikers) {

                seccionNuevosStikers.style.display =
                    "none";

            }

            if (inicio) {

                inicio.style.display =
                    "block";

            }

        };

}


// ==================================================
// ABRIR COLECCIÓN ALE
// ==================================================

if (btnColeccionAle) {

    btnColeccionAle.onclick =
        function () {

            if (seccionStickers) {

                seccionStickers.style.display =
                    "none";

            }

            ocultarColecciones();

            if (coleccionAle) {

                coleccionAle.style.display =
                    "block";

            }

        };

}


// ==================================================
// ABRIR COLECCIÓN LEO
// ==================================================

if (btnColeccionLeo) {

    btnColeccionLeo.onclick =
        function () {

            if (seccionStickers) {

                seccionStickers.style.display =
                    "none";

            }

            ocultarColecciones();

            if (coleccionLeo) {

                coleccionLeo.style.display =
                    "block";

            }

        };

}


// ==================================================
// ABRIR COLECCIÓN NICO
// ==================================================

if (btnColeccionNico) {

    btnColeccionNico.onclick =
        function () {

            if (seccionStickers) {

                seccionStickers.style.display =
                    "none";

            }

            ocultarColecciones();

            if (coleccionNico) {

                coleccionNico.style.display =
                    "block";

            }

        };

}


// ==================================================
// ABRIR COLECCIÓN THEYS DINOS
// ==================================================

if (btnColeccionTheys) {

    btnColeccionTheys.onclick =
        function () {

            if (seccionStickers) {

                seccionStickers.style.display =
                    "none";

            }

            ocultarColecciones();

            if (coleccionTheys) {

                coleccionTheys.style.display =
                    "block";

            }

        };

}


// ==================================================
// VOLVER DE ALE
// ==================================================

if (btnVolverAle) {

    btnVolverAle.onclick =
        function () {

            if (coleccionAle) {

                coleccionAle.style.display =
                    "none";

            }

            if (seccionStickers) {

                seccionStickers.style.display =
                    "block";

            }

        };

}


// ==================================================
// VOLVER DE LEO
// ==================================================

if (btnVolverLeo) {

    btnVolverLeo.onclick =
        function () {

            if (coleccionLeo) {

                coleccionLeo.style.display =
                    "none";

            }

            if (seccionStickers) {

                seccionStickers.style.display =
                    "block";

            }

        };

}


// ==================================================
// VOLVER DE NICO
// ==================================================

if (btnVolverNico) {

    btnVolverNico.onclick =
        function () {

            if (coleccionNico) {

                coleccionNico.style.display =
                    "none";

            }

            if (seccionStickers) {

                seccionStickers.style.display =
                    "block";

            }

        };

}


// ==================================================
// VOLVER DE THEYS DINOS
// ==================================================

if (btnVolverTheys) {

    btnVolverTheys.onclick =
        function () {

            if (coleccionTheys) {

                coleccionTheys.style.display =
                    "none";

            }

            if (seccionStickers) {

                seccionStickers.style.display =
                    "block";

            }

        };

}

// ==================================================
// VISOR GENERAL UNIVERSAL
// ==================================================


// ===============================
// ELEMENTOS DEL VISOR
// ===============================

let visor =
    document.getElementById(
        "visor"
    );

let imagenGrande =
    document.getElementById(
        "imagenGrande"
    );


// ===============================
// CONTENIDO ABIERTO
// ===============================

// Guarda la imagen que abrió
// actualmente el visor.

let contenidoAbierto =
    null;
// ==================================================
// BUSCAR TODO EL CONTENIDO
// QUE PUEDE ABRIR EL VISOR
// ==================================================

// Incluye:
//
// - Stickers individuales
// - Imágenes de packs
// - Futuras colecciones

let todosLosContenidos =
    document.querySelectorAll(
        ".sticker, .packImagen"
    );


// ==================================================
// ABRIR VISOR
// ==================================================

todosLosContenidos.forEach(
    function (contenido) {

        contenido.onclick =
            function () {

                if (
                    !visor ||
                    !imagenGrande
                ) {

                    return;

                }


                // =====================================
                // IMAGEN REAL DEL CONTENIDO
                // =====================================

                let imagenReal =
                    null;


                // Si es directamente una imagen.

                if (
                    contenido.tagName ===
                    "IMG"
                ) {

                    imagenReal =
                        contenido;

                }


                // Si es un contenedor de pack,
                // buscamos la imagen dentro.

                else if (
                    contenido.classList.contains(
                        "packImagen"
                    )
                ) {

                    imagenReal =
                        contenido.querySelector(
                            "img"
                        );

                }


                // Si no encontramos imagen,
                // no abrimos el visor.

                if (!imagenReal) {

                    return;

                }


                // =====================================
                // GUARDAMOS LA IMAGEN REAL
                // =====================================

                contenidoAbierto =
                    imagenReal;


                // =====================================
                // MOSTRAMOS LA IMAGEN
                // =====================================

                imagenGrande.src =
                    imagenReal.src;

                imagenGrande.alt =
                    imagenReal.alt;


                // =====================================
                // ABRIMOS EL VISOR
                // =====================================

                visor.style.display =
                    "flex";

            };

    }
);

// ==================================================
// CERRAR VISOR
// ==================================================

if (visor) {

    visor.onclick =
        function () {

            visor.style.display =
                "none";

        };

}


// ==================================================
// EVITAR QUE EL CONTENIDO
// CIERRE EL VISOR
// ==================================================

let contenidoVisor =
    document.getElementById(
        "contenidoVisor"
    );

if (contenidoVisor) {

    contenidoVisor.onclick =
        function (evento) {

            evento.stopPropagation();

        };

}


// ==================================================
// DETECTAR TIPO DE CONTENIDO
// ==================================================

function detectarContenidoVisor() {

    if (!contenidoAbierto) {

        return null;

    }


    // ===============================
    // STICKER ALE
    // ===============================

    if (
        contenidoAbierto.closest(
            ".paginaStickersAle"
        )
    ) {

        return {

            tipo:
                "sticker",

            personaje:
                "Ale"

        };

    }


    // ===============================
    // PACK ALE
    // ===============================

    if (
        contenidoAbierto.closest(
            ".paginaPacksAle"
        )
    ) {

        return {

            tipo:
                "pack",

            personaje:
                "Ale"

        };

    }


    // ===============================
    // STICKER LEO
    // ===============================

    if (
        contenidoAbierto.closest(
            ".paginaStickersLeo"
        )
    ) {

        return {

            tipo:
                "sticker",

            personaje:
                "Leo"

        };

    }


    // ===============================
    // PACK LEO
    // ===============================

    if (
        contenidoAbierto.closest(
            ".paginaPacksLeo"
        )
    ) {

        return {

            tipo:
                "pack",

            personaje:
                "Leo"

        };

    }


    // ===============================
    // STICKER NICO
    // ===============================

    if (
        contenidoAbierto.closest(
            ".paginaStickersNico"
        )
    ) {

        return {

            tipo:
                "sticker",

            personaje:
                "Nico"

        };

    }


    // ===============================
    // PACK NICO
    // ===============================

    if (
        contenidoAbierto.closest(
            ".paginaPacksNico"
        )
    ) {

        return {

            tipo:
                "pack",

            personaje:
                "Nico"

        };

    }


    // ===============================
    // STICKER THEYS DINOS
    // ===============================

    if (
        contenidoAbierto.closest(
            ".paginaStickersTheys"
        )
    ) {

        return {

            tipo:
                "sticker",

            personaje:
                "Theys"

        };

    }


    // ===============================
    // PACK THEYS DINOS
    // ===============================

    if (
        contenidoAbierto.closest(
            ".paginaPacksTheys"
        )
    ) {

        return {

            tipo:
                "pack",

            personaje:
                "Theys"

        };

    }


    return null;

}


// ==================================================
// DESCARGAR DESDE EL VISOR
// ==================================================

function abrirDescargaDesdeVisor() {

    let contenido =
        detectarContenidoVisor();


    if (!contenido) {

        alert(
            "❌ No se pudo identificar el contenido."
        );

        return;

    }


    // ==================================================
    // STICKER ALE
    // ==================================================

    if (
        contenido.tipo ===
            "sticker" &&

        contenido.personaje ===
            "Ale"
    ) {

        // Guardamos el sticker.

        stickerAleSeleccionado =
            contenidoAbierto;


        // Cerramos visor.

        visor.style.display =
            "none";


        // Abrimos descarga.

        abrirOpcionesDescargaAle();

        return;

    }


    // ==================================================
    // PACK ALE
    // ==================================================

    if (
        contenido.tipo ===
            "pack" &&

        contenido.personaje ===
            "Ale"
    ) {

        visor.style.display =
            "none";


        alert(
            "📱 La descarga de packs estará disponible " +
            "con la futura aplicación de stickers."
        );

        return;

    }


    // ==================================================
    // FUTUROS STICKERS
    // ==================================================

    alert(
        "📱 Esta función estará disponible " +
        "próximamente."
    );

}


// ==================================================
// COMPARTIR DESDE EL VISOR
// ==================================================

function abrirCompartirDesdeVisor() {

    let contenido =
        detectarContenidoVisor();


    if (!contenido) {

        alert(
            "❌ No se pudo identificar el contenido."
        );

        return;

    }


    // ==================================================
    // STICKER ALE
    // ==================================================

    if (
        contenido.tipo ===
            "sticker" &&

        contenido.personaje ===
            "Ale"
    ) {

        // Guardamos sticker.

        stickerAleSeleccionado =
            contenidoAbierto;


        // Cerramos visor.

        visor.style.display =
            "none";


        // Abrimos compartir.

        abrirOpcionesCompartirAle();

        return;

    }


    // ==================================================
    // PACK ALE
    // ==================================================

    if (
        contenido.tipo ===
            "pack" &&

        contenido.personaje ===
            "Ale"
    ) {

        // Guardamos pack.

        packAleSeleccionado =
            contenidoAbierto;


        // Cerramos visor.

        visor.style.display =
            "none";


        // Abrimos compartir pack.

        abrirOpcionesCompartirPackAle();

        return;

    }


    // ==================================================
    // FUTUROS PERSONAJES
    // ==================================================

    alert(
        "📤 Esta función estará disponible " +
        "próximamente."
    );

}


// ==================================================
// BOTÓN DESCARGAR DEL VISOR
// ==================================================

if (btnVisorDescargar) {

    btnVisorDescargar.onclick =
        function () {

            abrirDescargaDesdeVisor();

        };

}


// ==================================================
// BOTÓN COMPARTIR DEL VISOR
// ==================================================

if (btnVisorCompartir) {

    btnVisorCompartir.onclick =
        function () {

            abrirCompartirDesdeVisor();

        };

}