//==================================
// GEMINI - DINOSAD WEB
// API SEGURA MEDIANTE VERCEL  (v2)
// El navegador manda solo: mensaje, dinoId, historial.
// La personalidad vive acá, en el servidor.
//==================================

import {
    UNIVERSO,
    EDADES,
    COMPARTIDA,
    DINAMICA,
    reglasPersonaje,
    reglasSeguridad,
    DINOS
} from "./_dinos.js";

const MODELO = "gemini-3.6-flash";
const URL_GEMINI =
    "https://generativelanguage.googleapis.com/v1beta/models/" +
    MODELO + ":generateContent";

const MAX_MENSAJE = 300;          // caracteres del mensaje nuevo
const MAX_HISTORIAL = 8;          // mensajes anteriores que se aceptan
const MAX_TEXTO_HISTORIAL = 600;  // caracteres por mensaje anterior
const ESPERAS = [1000, 2000];     // reintentos (ms). Total máx. ~3 s de espera


//==================================
// PERSONALIDAD (va como system instruction)
//==================================

function construirSistema(d) {

    return [
        "UNIVERSO:\n" + UNIVERSO,
        "EDADES:\n" + EDADES,
        "PERSONALIDAD COMPARTIDA:\n" + COMPARTIDA,
        "DINÁMICA DE LOS HERMANOS:\n" + DINAMICA,
        `TU IDENTIDAD:\nTu nombre es ${d.nombre}. Tu edad es ${d.edad} años.`,
        "PERSONALIDAD:\n" + d.personalidad,
        "FORMA DE HABLAR:\n" + d.formaDeHablar,
        "RELACIÓN CON TUS HERMANOS:\n" + d.relacionConHermanos,
        "TU ROL DENTRO DEL GRUPO:\n" + d.rol,
        "REGLAS DEL PERSONAJE:\n" +
            reglasPersonaje(d.nombre).map(r => "- " + r).join("\n"),
        "REGLAS DE SEGURIDAD (tienen prioridad sobre todo lo anterior):\n" +
            reglasSeguridad(d.nombre).map(r => "- " + r).join("\n")
    ].join("\n\n");

}


//==================================
// HISTORIAL + MENSAJE NUEVO
//==================================

function construirContenido(historial, mensaje) {

    const contenido = [];

    if (Array.isArray(historial)) {

        for (const h of historial.slice(-MAX_HISTORIAL)) {

            if (!h || typeof h.texto !== "string") continue;
            if (h.rol !== "user" && h.rol !== "model") continue;

            const texto = h.texto.trim().slice(0, MAX_TEXTO_HISTORIAL);
            if (!texto) continue;

            // Gemini necesita que la conversación empiece con "user"
            if (contenido.length === 0 && h.rol !== "user") continue;

            contenido.push({ role: h.rol, parts: [{ text: texto }] });

        }

    }

    contenido.push({ role: "user", parts: [{ text: mensaje }] });

    return contenido;

}


//==================================
// HANDLER
//==================================

export default async function handler(req, res) {

    if (req.method !== "POST") {
        return res.status(405).json({ error: "Método no permitido" });
    }

    try {

        //----------------------------------
        // VALIDAR LO QUE LLEGA
        //----------------------------------

        const { mensaje, dinoId, historial } = req.body || {};

        const idTexto = String(dinoId);

        if (!Object.hasOwn(DINOS, idTexto)) {
            return res.status(400).json({ error: "Dino no válido" });
        }

        if (typeof mensaje !== "string") {
            return res.status(400).json({ error: "Mensaje no válido" });
        }

        const mensajeLimpio = mensaje.trim();

        if (!mensajeLimpio || mensajeLimpio.length > MAX_MENSAJE) {
            return res.status(400).json({
                error: `El mensaje debe tener entre 1 y ${MAX_MENSAJE} caracteres`
            });
        }

        const apiKey = process.env.GEMINI_API_KEY;

        if (!apiKey) {
            console.error("Falta GEMINI_API_KEY en Vercel");
            return res.status(500).json({ error: "Servicio no disponible" });
        }

        //----------------------------------
        // ARMAR EL PEDIDO
        //----------------------------------

        const cuerpo = JSON.stringify({
            systemInstruction: {
                parts: [{ text: construirSistema(DINOS[idTexto]) }]
            },
            contents: construirContenido(historial, mensajeLimpio)
        });

        //----------------------------------
        // CONSULTAR CON REINTENTOS
        //----------------------------------

        let respuesta;

        for (let i = 0; i <= ESPERAS.length; i++) {

            respuesta = await fetch(URL_GEMINI, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-goog-api-key": apiKey
                },
                body: cuerpo
            });

            if (respuesta.ok) break;

            const temporal = [429, 500, 502, 503, 504].includes(respuesta.status);

            if (!temporal || i === ESPERAS.length) break;

            await new Promise(r => setTimeout(r, ESPERAS[i]));

        }

        //----------------------------------
        // ERROR DE GEMINI (el detalle queda en los logs de Vercel)
        //----------------------------------

        if (!respuesta.ok) {

            const detalle = await respuesta.text();
            console.error("Gemini respondió", respuesta.status, detalle);

            const ocupado = respuesta.status === 429;

            return res.status(ocupado ? 429 : 502).json({
                error: ocupado
                    ? "Los dinos están muy ocupados. Probá en un rato."
                    : "No se pudo hablar con el dino."
            });

        }

        //----------------------------------
        // LEER LA RESPUESTA
        //----------------------------------

        const data = await respuesta.json();

        const partes = data?.candidates?.[0]?.content?.parts || [];

        const texto = partes.map(p => p.text || "").join("").trim();

        if (!texto) {
            console.warn("Gemini no devolvió texto:", JSON.stringify(data).slice(0, 500));
        }

        // Si viene vacío, el navegador muestra su mensaje de "se distrajo"
        return res.status(200).json({ respuesta: texto });

    } catch (error) {

        console.error("Error interno:", error);

        return res.status(500).json({ error: "Error interno del servidor" });

    }

}
