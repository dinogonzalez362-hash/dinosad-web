document.addEventListener("DOMContentLoaded", () => {

    // NAVEGACIÓN DE PANTALLAS
    const btnHistorias = document.getElementById("btnHistorias");
    const btnVolverHistorias = document.getElementById("btnVolverHistorias");
    const seccionInicio = document.getElementById("inicio");
    const seccionHistorias = document.getElementById("seccionHistorias");
    
    const menuGrid = document.getElementById("menuHistoriasGrid");
    const visorComic = document.getElementById("visorComic");

    // Abrir la sección de historias desde el menú principal
    if (btnHistorias) {
        btnHistorias.addEventListener("click", () => {
            if (seccionInicio) seccionInicio.style.display = "none";
            if (seccionHistorias) seccionHistorias.style.display = "block";
            menuGrid.style.display = "grid";
            visorComic.style.display = "none";
        });
    }

    // Volver al menú principal
    if (btnVolverHistorias) {
        btnVolverHistorias.addEventListener("click", () => {
            if (seccionHistorias) seccionHistorias.style.display = "none";
            if (seccionInicio) seccionInicio.style.display = "block";
        });
    }

    // BASE DE DATOS DE LAS HISTORIAS EN CÓMIC
    const historiasComic = {
        1: {
            titulo: "🎉 Historia #1: ¡Llegamos a los 1.000 Suscriptores!",
            vinetas: [
                {
                    dino: "Leo",
                    emoji: "🐯",
                    texto: "¡Oigan, Ale, Nico! ¿Se acuerdan cuando llegamos a los primeros 1.000 seguidores en el canal?"
                },
                {
                    dino: "Ale",
                    emoji: "🦖",
                    texto: "¡Uff, claro que me acuerdo! ¡Yo subí el video especial celebrándolo ese mismo día!"
                },
                {
                    dino: "Nico",
                    emoji: "🦄",
                    texto: "¡Todos estábamos re emocionados editando hasta tarde! Fue un momento increíble para la comunidad DinoSad."
                }
            ]
        },
        2: {
            titulo: "🎬 Historia #2: El Primer Video Viral",
            vinetas: [
                {
                    dino: "Nico",
                    emoji: "🦄",
                    texto: "¡Nadie esperaba que ese video tuviera tantas reproducciones en un solo fin de semana!"
                },
                {
                    dino: "Leo",
                    emoji: "🐯",
                    texto: "Jajaja, ¡yo me acuerdo que me pasé toda la tarde respondiendo los comentarios de la gente!"
                },
                {
                    dino: "Ale",
                    emoji: "🦖",
                    texto: "¡Desde ahí supimos que DinoSad Web y el canal iban a crecer un montón!"
                }
            ]
        }
    };

    let historiaActual = null;
    let indiceVineta = 0;

    // Función para abrir el cómic al presionar "Leer historia"
    window.abrirComic = (idComic) => {
        historiaActual = historiasComic[idComic];
        if (!historiaActual) return;

        indiceVineta = 0;
        menuGrid.style.display = "none";
        visorComic.style.display = "block";
        document.getElementById("tituloComicActual").textContent = historiaActual.titulo;

        mostrarVineta();
    };

    function mostrarVineta() {
        const vineta = historiaActual.vinetas[indiceVineta];

        document.getElementById("boxDinoComic").textContent = vineta.emoji;
        document.getElementById("nombreDinoComic").textContent = vineta.dino;
        document.getElementById("textoDialogoComic").textContent = `"${vineta.texto}"`;
        document.getElementById("lblPaginaComic").textContent = `${indiceVineta + 1}/${historiaActual.vinetas.length}`;

        document.getElementById("btnAnteriorPaginaComic").disabled = (indiceVineta === 0);
    }

    // Botones del cómic
    document.getElementById("btnSiguientePaginaComic").addEventListener("click", () => {
        if (indiceVineta < historiaActual.vinetas.length - 1) {
            indiceVineta++;
            mostrarVineta();
        } else {
            alert("✨ ¡Llegaste al final de esta historia!");
            cerrarComic();
        }
    });

    document.getElementById("btnAnteriorPaginaComic").addEventListener("click", () => {
        if (indiceVineta > 0) {
            indiceVineta--;
            mostrarVineta();
        }
    });

    document.getElementById("btnCerrarComic").addEventListener("click", cerrarComic);

    function cerrarComic() {
        visorComic.style.display = "none";
        menuGrid.style.display = "grid";
    }

});