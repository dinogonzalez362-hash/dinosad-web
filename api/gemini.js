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
            "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key=" + apiKey,
            }
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

        // Mostrar el error REAL que devuelve Gemini
        if (!response.ok) {
            console.error("Error de Gemini:", data);

            return res.status(response.status).json({
                error: data?.error?.message || "Gemini rechazó la solicitud",
                codigo: data?.error?.code || response.status,
                estado: data?.error?.status || "DESCONOCIDO"
            });
        }

        const texto =
            data?.candidates?.[0]?.content?.parts?.[0]?.text;

        if (!texto) {
            console.error("Gemini no devolvió texto:", data);

            return res.status(500).json({
                error: "Gemini no devolvió una respuesta",
                detalles: data
            });
        }

        return res.status(200).json({
            respuesta: texto
        });

    } catch (error) {
        console.error("Error del servidor:", error);

        return res.status(500).json({
            error: "Error interno del servidor",
            detalles: error.message
        });
    }
            }
