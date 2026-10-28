//==================================
// CONTACTO - DINOSAD WEB (v2)
// Envía el mensaje por correo con Resend
//==================================

const MOTIVOS = [
    "Quiero colaborar",
    "Quiero saludar",
    "Tengo una sugerencia"
];

const MAX_NOMBRE = 60;
const MAX_CORREO = 100;
const MAX_COMENTARIO = 1000;


// Evita que alguien meta HTML o links en tu correo
function escapar(texto) {

    return String(texto)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");

}

function correoValido(correo) {

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);

}


export default async function handler(req, res) {

    if (req.method !== "POST") {
        return res.status(405).json({ error: "Método no permitido" });
    }

    try {

        const body = req.body || {};

        //----------------------------------
        // ANTI-SPAM (campo oculto)
        // Las personas no lo ven ni lo llenan; los bots sí.
        // Respondemos "ok" para no darles pistas.
        //----------------------------------

        if (body.sitioWeb) {
            return res.status(200).json({ success: true });
        }

        //----------------------------------
        // VALIDAR
        //----------------------------------

        const nombre = String(body.nombre ?? "").trim();
        const correo = String(body.correo ?? "").trim();
        const motivo = String(body.motivo ?? "").trim();
        const comentario = String(body.comentario ?? "").trim();
        const edad = Number(body.edad);

        const datosValidos =
            nombre && nombre.length <= MAX_NOMBRE &&
            correo.length <= MAX_CORREO && correoValido(correo) &&
            MOTIVOS.includes(motivo) &&
            comentario && comentario.length <= MAX_COMENTARIO &&
            Number.isInteger(edad) && edad >= 1 && edad <= 120;

        if (!datosValidos) {
            return res.status(400).json({ error: "Revisá los datos del formulario" });
        }

        if (!process.env.RESEND_API_KEY || !process.env.CONTACT_EMAIL) {
            console.error("Faltan RESEND_API_KEY o CONTACT_EMAIL en Vercel");
            return res.status(500).json({ error: "Servicio no disponible" });
        }

        //----------------------------------
        // ENVIAR
        //----------------------------------

        const respuesta = await fetch("https://api.resend.com/emails", {

            method: "POST",

            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${process.env.RESEND_API_KEY}`
            },

            body: JSON.stringify({

                from: "DinoSad <onboarding@resend.dev>",
                to: [process.env.CONTACT_EMAIL],
                reply_to: correo,
                subject: `Nuevo mensaje de DinoSad - ${motivo}`,

                html: `
                    <h2>📩 Nuevo mensaje de DinoSad</h2>
                    <p><strong>Nombre:</strong> ${escapar(nombre)}</p>
                    <p><strong>Edad:</strong> ${edad}</p>
                    <p><strong>Correo:</strong> ${escapar(correo)}</p>
                    <p><strong>Motivo:</strong> ${escapar(motivo)}</p>
                    <p><strong>Comentario:</strong></p>
                    <p>${escapar(comentario).replace(/\n/g, "<br>")}</p>
                `

            })

        });

        if (!respuesta.ok) {

            // El detalle queda en los logs de Vercel, no se le muestra al usuario
            console.error("Resend respondió", respuesta.status, await respuesta.text());

            return res.status(502).json({ error: "No se pudo enviar el mensaje" });

        }

        return res.status(200).json({ success: true });

    } catch (error) {

        console.error("Error en contacto:", error);

        return res.status(500).json({ error: "Error al enviar el mensaje" });

    }

}

