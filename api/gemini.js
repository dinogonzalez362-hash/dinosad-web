export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({
            error: "Método no permitido"
        });
    }

    try {
        const { mensaje, dino } = req.body;

        if (!mensaje || !dino) {
            return res.status(400).json({
                error: "Faltan datos"
            });
        }

        const apiKey = process.env.GEMINI_API_KEY;

        if (!apiKey) {
            return res.status(500).json({
                error: "La clave de Gemini no está configurada en Vercel"
            });
        }

        const nombreDino = dino.nombre || "DinoSad";

        const prompt = `Eres ${nombreDino}, un dinosaurio muy simpático en la app DinoSad. Responde en máximo 2 oraciones cortas.

Usuario: ${mensaje}`;

        const response = await fetch(
            "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                    "x-goog-api-key": apiKey
                },

                body: JSON.stringify({
                    contents: [
                        {
                            role: "user",
                            parts: [
                                {
                                    text: prompt
                                }
                            ]
                        }
                    ]
                })
            }
        );

        // Primero obtenemos la respuesta como TEXTO.
        // Así evitamos que falle response.json()
        // si Google devuelve algo que no sea JSON.
        const textoRespuesta = await response.text();

        let data;

        try {
            data = JSON.parse(textoRespuesta);
        } catch (error) {
            console.error(
                "Gemini devolvió una respuesta que no es JSON:",
                textoRespuesta
            );

            return res.status(502).json({
                error: "Gemini devolvió una respuesta inesperada.",
                detalles: textoRespuesta.substring(0, 500)
            });
        }

        // Gemini rechazó la solicitud
        if (!response.ok) {
            console.error("Error de Gemini:", data);

            return res.status(response.status).json({
                error:
                    data?.error?.message ||
                    "Gemini rechazó la solicitud",

                codigo:
                    data?.error?.code ||
                    response.status,

                estado:
                    data?.error?.status ||
                    "DESCONOCIDO"
            });
        }

        const respuestaTexto =
            data?.candidates?.[0]?.content?.parts?.[0]?.text;

        if (!respuestaTexto) {
            console.error(
                "Gemini no devolvió texto:",
                data
            );

            return res.status(500).json({
                error: "Gemini no devolvió una respuesta"
            });
        }

        return res.status(200).json({
            respuesta: respuestaTexto
        });

    } catch (error) {
        console.error(
            "Error interno del servidor:",
            error
        );

        return res.status(500).json({
            error: "Error interno del servidor",
            detalles: error.message
        });
    }
}
