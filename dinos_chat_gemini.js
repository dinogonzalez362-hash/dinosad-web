//==================================
// GEMINI - DINOSAD WEB
// Conexión segura mediante Vercel
//==================================

let geminiConectado = true;

function crearIndicadorEscrituraDino(dino) {
    const mensajes = {
        ale: "Estoy ordenando mis ideas... ya te respondo.",
        leo: "¡Esperame! Se me cruzaron los cables, estoy pensando 😅",
        nico: "Mmm... dejame pensarlo tranquilo, ya te contesto 🙂"
    };
    const indicador = document.createElement("div");
    const texto = document.createElement("span");
    const puntos = document.createElement("span");
    const nombre = String(dino.nombre || "").toLowerCase();

    indicador.className = "mensajeDino dino escribiendoDino";
    indicador.setAttribute("role", "status");
    indicador.setAttribute("aria-label", dino.nombre + " está escribiendo");
    texto.textContent = mensajes[nombre] || dino.nombre + " está pensando cómo responderte.";
    puntos.className = "puntosEscribiendoDino";
    puntos.setAttribute("aria-hidden", "true");
    puntos.textContent = "...";
    indicador.append(texto, puntos);
    mensajesChatDino.appendChild(indicador);
    mensajesChatDino.scrollTop = mensajesChatDino.scrollHeight;

    return indicador;
}

async function obtenerRespuestaGemini(mensaje, dino, audio) {

    if (!mensaje || !dino) return;

    if (!audio && typeof window.responderDinoLocal === "function") {
        try {
            const respuestaLocal = window.responderDinoLocal(mensaje, dino);
            if (respuestaLocal) {
                agregarMensajeDino(respuestaLocal, "dino");
                return;
            }
        } catch (error) {
            console.error("No se pudo generar una respuesta local del Dino.", error);
        }
    }

    const indicadorEscritura = crearIndicadorEscrituraDino(dino);

    if (!geminiConectado) {
        indicadorEscritura.remove();
        agregarMensajeDino(obtenerMensajeErrorDino(dino), "dino");
        return;
    }

    try {

        const response = await fetch("/api/gemini", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({

                mensaje: mensaje,

                audio: audio || null,

                dino: {

                    nombre: dino.nombre,

                    edad:
                        dino.edad || "",

                    personalidad:
                        dino.personalidad || "",

                    formaDeHablar:
                        dino.formaDeHablar || "",

                    relacionConHermanos:
                        dino.relacionConHermanos || "",

                    rol:
                        dino.rol || "",

                    instruccionesGemini:
                        dino.instruccionesGemini || ""

                }

            })

        });

        const data = await response.json();

        if (!response.ok) {

            throw new Error(
                data.error ||
                "No se pudo conectar con Gemini"
            );

        }

        const respuestaTexto = data.respuesta;

        if (respuestaTexto) {
            indicadorEscritura.remove();
            agregarMensajeDino(respuestaTexto, "dino");
        } else {
            indicadorEscritura.remove();
            agregarMensajeDino(obtenerMensajeErrorDino(dino), "dino");
        }

    } catch (err) {

        indicadorEscritura.remove();
        console.error(
            "Error de Gemini:",
            err
        );

        agregarMensajeDino(obtenerMensajeErrorDino(dino), "dino");

    }

}


//==================================
// CONTROL DE GEMINI
//==================================

function activarGemini() {

    geminiConectado = true;

}


function desactivarGemini() {

    geminiConectado = false;

}


function estaGeminiConectado() {

    return geminiConectado;

}


//==================================
// EXPORTAMOS FUNCIONES
//==================================

window.obtenerRespuestaGemini =
    obtenerRespuestaGemini;

window.activarGemini =
    activarGemini;

window.desactivarGemini =
    desactivarGemini;

window.estaGeminiConectado =
    estaGeminiConectado;
