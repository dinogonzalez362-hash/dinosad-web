//==================================
// GEMINI - DINOSAD WEB
// Conexión segura mediante Vercel
//==================================

let geminiConectado = true;

async function obtenerRespuestaGemini(mensaje, dino) {

    if (!mensaje || !dino) return;

    if (!geminiConectado) {

        if (typeof agregarMensajeDino === "function") {

            agregarMensajeDino(
                "⚠️ Gemini está desconectado.",
                "dino"
            );

        }

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

                dino: {

                    nombre: dino.nombre,

                    personalidad:
                        dino.personalidad || "",

                    formaDeHablar:
                        dino.formaDeHablar || "",

                    relacionConHermanos:
                        dino.relacionConHermanos || "",

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

            if (typeof agregarMensajeDino === "function") {

                agregarMensajeDino(
                    respuestaTexto,
                    "dino"
                );

            }

        } else {

            if (typeof agregarMensajeDino === "function") {

                agregarMensajeDino(

                    `¡Rawr! ${dino.nombre} se distrajo. ¡Probá de nuevo!`,

                    "dino"

                );

            }

        }

    } catch (err) {

        console.error(
            "Error de Gemini:",
            err
        );

        if (typeof agregarMensajeDino === "function") {

            agregarMensajeDino(

                `❌ ¡Ups! ${dino.nombre} tuvo un problema: ${err.message}`,

                "dino"

            );

        }

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
