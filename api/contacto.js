export default async function handler(req, res) {

    if (req.method !== "POST") {
        return res.status(405).json({
            error: "Método no permitido"
        });
    }

    try {

        const {
            nombre,
            edad,
            correo,
            motivo,
            comentario
        } = req.body;

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

                    <p><strong>Nombre:</strong> ${nombre}</p>
                    <p><strong>Edad:</strong> ${edad}</p>
                    <p><strong>Correo:</strong> ${correo}</p>
                    <p><strong>Motivo:</strong> ${motivo}</p>

                    <p><strong>Comentario:</strong></p>
                    <p>${comentario}</p>
                `
            })
        });

        const datos = await respuesta.json();

        if (!respuesta.ok) {
            return res.status(500).json({
                error: datos
            });
        }

        return res.status(200).json({
            success: true
        });

    } catch (error) {

        return res.status(500).json({
            error: "Error al enviar el mensaje"
        });

    }
                      }
