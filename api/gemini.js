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

        const prompt = `Eres ${dino.nombre}, un dinosaurio muy simpático en la app DinoSad. Responde en máximo 2 oraciones cortas: ${mensaje}`;

        const response = await fetch(
            "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=" + apiKey,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    contents: [
                        {
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

        const data = await response.json();

        if (!response.ok) {
            console.error("Error de Gemini:", data);

            return res.status(response.status).json({
                error: "Gemini rechazó la solicitud"
            });
        }

        const texto =
            data?.candidates?.[0]?.content?.parts?.[0]?.text;

        if (!texto) {
            return res.status(500).json({
                error: "Gemini no devolvió una respuesta"
            });
        }

        return res.status(200).json({
            respuesta: texto
        });

    } catch (error) {
        console.error("Error del servidor:", error);

        return res.status(500).json({
            error: "Error interno del servidor"
        });
    }
}
