document.addEventListener("DOMContentLoaded", () => {

    // DATOS DE AVATAR Y CAPÍTULOS
   let avatarConfig = {
nombre: "Aventurero",
genero: "chico",
piel: "clara",
cabello :"negro",
estiloCabello: "corto",
ropa: "roja"
};


    let capituloActual = 1;
    let progresoMisiones = 0; // 0: Ninguna, 1: Lectura lista, 2: Juego listo

    // BASE DE DATOS DE CAPÍTULOS
    const datosCapitulos = {
        1: {
            titulo: "Capítulo 1: El Comienzo en YouTube",
            lore: "En este primer capítulo, abrimos el canal de DinoSad. ¡Todo comenzó con la idea de crear contenido único de dinosaurios y juegos!",
            dinosNPC: ["Ale"], // Un solo guardián
            nombreNPC: "Ale 🦖 te pregunta:",
            pregunta: "¿De qué trata la primera fase del proyecto DinoSad?",
            opciones: [
                { texto: "Crear contenido y juegos divertidos", correcta: true },
                { texto: "Hacer carreras de autos en la Luna", correcta: false },
                { texto: "Dormir todo el día", correcta: false }
            ]
        },
        2: {
            titulo: "Capítulo 2: El Desafío de los Dinos",
            lore: "Leo y Nico se sumaron a la aventura. ¡Ahora somos tres preparando el mejor contenido para la comunidad!",
            dinosNPC: ["Leo", "Nico"], // Dos guardianes
            nombreNPC: "Leo 🐯 y Nico 🦄 te preguntan:",
            pregunta: "¿Cuántos dinosaurios integran el equipo principal ahora?",
            opciones: [
                { texto: "3 Dinos (Ale, Leo y Nico)", correcta: true },
                { texto: "Solamente 1 Dino", correcta: false },
                { texto: "Un ejército de 500 dinos", correcta: false }
            ]
        }
    };

    // SELECCIÓN DE CONFIGURACIÓN DE AVATAR
    const preview = document.getElementById("vistaPreviaAvatar");
    const avatarHistoria = document.getElementById("avatarJugadorHistoria");
function actualizarVistaPrevia() {

    const clasesAvatar =
        `avatar-box avatar-con-imagen
        ${avatarConfig.genero}
        piel-${avatarConfig.piel}
        cabello-${avatarConfig.cabello}
        estilo-${avatarConfig.estiloCabello}
        ropa-${avatarConfig.ropa}`;

    if (preview) preview.className = clasesAvatar;
    if (avatarHistoria) {
        avatarHistoria.className = `${clasesAvatar} avatar-historia`;
        avatarHistoria.setAttribute("aria-label", `Avatar de ${avatarConfig.nombre}`);
    }

}

document.querySelectorAll(".btn-piel").forEach(btn => {
    btn.addEventListener("click", () => {
        avatarConfig.piel = btn.dataset.piel;

        document.querySelectorAll(".btn-piel").forEach(opcion => {
            opcion.classList.toggle(
                "seleccionado",
                opcion === btn
            );
        });

        actualizarVistaPrevia();
    });
});

    
    document.querySelectorAll(".btn-genero").forEach(btn => {
        btn.addEventListener("click", () => {
            avatarConfig.genero = btn.dataset.genero;
            document.querySelectorAll(".btn-genero").forEach(opcion => {
                opcion.classList.toggle("seleccionado", opcion === btn);
            });
            actualizarVistaPrevia();
        });
    });
document.querySelectorAll(".btn-cabello").forEach(btn => {
    btn.addEventListener("click", () => {
        avatarConfig.cabello = btn.dataset.cabello;

        document.querySelectorAll(".btn-cabello").forEach(opcion => {
            opcion.classList.toggle("seleccionado", opcion === btn);
        });

        actualizarVistaPrevia();
    });
});

document.querySelectorAll(".btn-estilo-cabello").forEach(btn => {
    btn.addEventListener("click", () => {
        avatarConfig.estiloCabello = btn.dataset.estiloCabello;

        document.querySelectorAll(".btn-estilo-cabello").forEach(opcion => {
            opcion.classList.toggle("seleccionado", opcion === btn);
        });

        actualizarVistaPrevia();
    });
});

    document.querySelectorAll(".btn-ropa").forEach(btn => {
        btn.addEventListener("click", () => {
            avatarConfig.ropa = btn.dataset.ropa;
            document.querySelectorAll(".btn-ropa").forEach(opcion => {
                opcion.classList.toggle("seleccionado", opcion === btn);
            });
            actualizarVistaPrevia();
        });
    });

    document.querySelector('.btn-ropa[data-ropa="roja"]').classList.add("seleccionado");
    actualizarVistaPrevia();

    // COMENCAR CAPÍTULO
    document.getElementById("btnComenzarHistoria").addEventListener("click", () => {
        const inpNombre = document.getElementById("nombreAvatar").value;
        if(inpNombre.trim() !== "") avatarConfig.nombre = inpNombre;

        actualizarVistaPrevia();
        document.getElementById("lblNombreJugador").textContent = avatarConfig.nombre;
        document.getElementById("pasoCrearPersonaje").style.display = "none";
        document.getElementById("pasoCaminoCapitulo").style.display = "block";
        cargarCapitulo(capituloActual);
    });

    function cargarCapitulo(numCap) {
        const cap = datosCapitulos[numCap];
        if(!cap) return;

        document.getElementById("tituloCapitulo").textContent = cap.titulo;
        document.getElementById("lblProgreso").textContent = "0%";
        progresoMisiones = 0;

        // Resetear nodos
        document.getElementById("nodo2").classList.add("bloqueado");
        document.getElementById("btnMisionJuego").disabled = true;
        document.getElementById("nodo3").classList.add("bloqueado");
        document.getElementById("btnMisionNPC").disabled = true;
    }

    // MISIONES
    window.abrirMisionLectura = () => {
        const cap = datosCapitulos[capituloActual];
        document.getElementById("textoLoreCapitulo").textContent = cap.lore;
        document.getElementById("modalLectura").style.display = "flex";
    };

    window.completarMisionLectura = () => {
        document.getElementById("modalLectura").style.display = "none";
        progresoMisiones = 1;
        document.getElementById("lblProgreso").textContent = "33%";
        document.getElementById("nodo2").classList.remove("bloqueado");
        document.getElementById("btnMisionJuego").disabled = false;
    };

    window.abrirMisionJuego = () => {
        alert("¡Misión de Juego superada con éxito!");
        progresoMisiones = 2;
        document.getElementById("lblProgreso").textContent = "66%";
        document.getElementById("nodo3").classList.remove("bloqueado");
        document.getElementById("btnMisionNPC").disabled = false;
    };

    window.abrirMisionNPC = () => {
        const cap = datosCapitulos[capituloActual];
        
        // Configurar los emojis de los NPC visibles
        const npc1 = document.getElementById("avatarNPC1");
        const npc2 = document.getElementById("avatarNPC2");
        const npc3 = document.getElementById("avatarNPC3");

        npc1.style.display = cap.dinosNPC.includes("Ale") ? "inline" : "none";
        npc2.style.display = cap.dinosNPC.includes("Leo") ? "inline" : "none";
        npc3.style.display = cap.dinosNPC.includes("Nico") ? "inline" : "none";

        document.getElementById("nombreGuardián").textContent = cap.nombreNPC;
        document.getElementById("preguntaNPCText").textContent = cap.pregunta;

        const contOpciones = document.getElementById("opcionesPregunta");
        contOpciones.innerHTML = "";

        cap.opciones.forEach(op => {
            const btn = document.createElement("button");
            btn.className = "azul";
            btn.textContent = op.texto;
            btn.onclick = () => responderPregunta(op.correcta);
            contOpciones.appendChild(btn);
        });

        document.getElementById("modalNPC").style.display = "flex";
    };

    function responderPregunta(esCorrecta) {
        document.getElementById("modalNPC").style.display = "none";

        if (esCorrecta) {
            const monedasGanadas = window.otorgarRecompensaDinoSad("historia-capitulo-" + capituloActual);
            const mensajeRecompensa = monedasGanadas > 0
                ? " Ganaste " + monedasGanadas + " Dino monedas. 🪙"
                : monedasGanadas === null
                    ? " No se pudo guardar la recompensa. Intentá nuevamente."
                    : "";
            alert("¡Respuesta Correcta! 🎉 Has superado el capítulo." + mensajeRecompensa);
            capituloActual++;
            if (datosCapitulos[capituloActual]) {
                cargarCapitulo(capituloActual);
            } else {
                alert("🏆 ¡Felicitaciones! Has completado todos los capítulos disponibles.");
            }
        } else {
            alert("❌ Respuesta incorrecta. Volverás al inicio del capítulo.");
            cargarCapitulo(capituloActual); // Reinicia el progreso del capítulo
        }
    }
// Al entrar al modo historia, ocultar la tarjeta "Detrás de DinoSad"
["btnVerMapa", "btnComenzarProgreso"].forEach(id => {
    const boton = document.getElementById(id);
    if (!boton) return;
    boton.addEventListener("click", () => {
        document.getElementById("seccionDetras").style.display = "none";
    });
});
    // BOTÓN VOLVER
    document.getElementById("btnVolverHistoria").addEventListener("click", () => {
        document.getElementById("seccionModoHistoria").style.display = "none";
        document.getElementById("seccionDetras").style.display = "block";
    });
});