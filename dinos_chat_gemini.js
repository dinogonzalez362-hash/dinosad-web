//==================================
// GEMINI - DINOSAD WEB (cliente v2)
// Conexión segura mediante Vercel
// Solo se envía: mensaje, dinoId e historial corto.
// La personalidad vive en api/_dinos.js
//==================================

let geminiConectado = true;

const MAX_HISTORIAL = 8;

// Historial en memoria, uno por dino: { rol: "user" | "model", texto }
const historialGemini = {};


//==================================
// MOSTRAR MENSAJE DEL DINO
//==================================

function mostrarMensajeDino(texto) {

    if (typeof agregarMensajeDino === "function") {
        agregarMensajeDino(texto, "dino");
    }

}


//==================================
// PEDIR RESPUESTA
//==================================

async function obtenerRespuestaGemini(mensaje, dino) {

    if (!mensaje || !dino) return;

    if (!geminiConectado) {
        mostrarMensajeDino("⚠️ Gemini está desconectado.");
        return;
    }

    const historial = historialGemini[dino.id] || [];

    try {

        const response = await fetch("/api/gemini", {

            method: "POST",

            headers: { "Content-Type": "application/json" },

            body: JSON.stringify({
                mensaje: mensaje,
                dinoId: dino.id,
                historial: historial
            })

        });

        // Si /api/gemini no existe (por ejemplo en el editor),
        // la respuesta no es JSON: lo manejamos sin mostrar errores raros.
        let data = null;

        try {
            data = await response.json();
        } catch (e) {
            data = null;
        }

        if (!response.ok || !data) {
            throw new Error(
                (data && data.error) || "Sin conexión con el servidor"
            );
        }

        const respuestaTexto = data.respuesta;

        if (respuestaTexto) {

            // Guardamos la charla para que el dino recuerde lo anterior
            historial.push({ rol: "user", texto: mensaje });
            historial.push({ rol: "model", texto: respuestaTexto });

            historialGemini[dino.id] = historial.slice(-MAX_HISTORIAL);

            mostrarMensajeDino(respuestaTexto);

        } else {

            mostrarMensajeDino(
                `¡Rawr! ${dino.nombre} se distrajo. ¡Probá de nuevo!`
            );

        }

    } catch (err) {

        // El detalle técnico queda en la consola, no en el chat
        console.error("Error de Gemini:", err);

        mostrarMensajeDino(
            `😴 ${dino.nombre} no puede hablar ahora. ¡Probá de nuevo en un rato!`
        );

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

window.obtenerRespuestaGemini = obtenerRespuestaGemini;
window.activarGemini = activarGemini;
window.desactivarGemini = desactivarGemini;
window.estaGeminiConectado = estaGeminiConectado;
