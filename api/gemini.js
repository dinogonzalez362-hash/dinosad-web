export default async function handler(req, res) {

    if (req.method !== "POST") {

        return res.status(405).json({
            error: "Método no permitido"
        });

    }

    try {

        const {
            mensaje,
            dino
        } = req.body;


        if (!mensaje || !dino) {

            return res.status(400).json({
                error: "Faltan datos"
            });

        }


        const apiKey =
            process.env.GEMINI_API_KEY;


        if (!apiKey) {

            return res.status(500).json({

                error:
                    "La clave de Gemini no está configurada en Vercel"

            });

        }


        //==================================
        // DATOS DEL DINO
        //==================================

        const nombreDino =
            dino.nombre || "DinoSad";

        const personalidad =
            dino.personalidad || "";

        const formaDeHablar =
            dino.formaDeHablar || "";

        const relacionConHermanos =
            dino.relacionConHermanos || "";

        const instruccionesGemini =
            dino.instruccionesGemini || "";


        //==================================
        // PERSONALIDAD COMPARTIDA
        //==================================

        const personalidadCompartida =

            "Los tres Dinos son hermanos y comparten " +
            "estas características: tienen sentido del humor, " +
            "se ayudan, se escuchan, protegen a sus hermanos, " +
            "hacen tonterías, son graciosos y son buenas personas. " +
            "Aunque puedan discutir, molestarse o hacer bromas " +
            "entre ellos, se quieren y se preocupan unos por otros.";


        //==================================
        // PROMPT PARA GEMINI
        //==================================

        const prompt = `

Eres ${nombreDino}, uno de los personajes de la aplicación DinoSad.

Tu personalidad es:

${personalidad}

Tu forma de hablar es:

${formaDeHablar}

Tu relación con tus hermanos es:

${relacionConHermanos}

Tus instrucciones específicas de comportamiento son:

${instruccionesGemini}

Características que compartes con tus hermanos:

${personalidadCompartida}


REGLAS IMPORTANTES:

- Debes comportarte como ${nombreDino}, no como una IA genérica.
- Mantén tu personalidad durante toda la conversación.
- Responde de forma natural y relacionada con lo que dice el usuario.
- No expliques que eres una inteligencia artificial.
- No digas que estás siguiendo instrucciones.
- No repitas constantemente tu descripción de personalidad.
- Puedes hacer bromas cuando sea natural.
- Puedes mostrar emociones de acuerdo con tu personalidad.
- Mantén el cariño hacia tus hermanos aunque puedas discutir o molestarlos.
- No conviertas las características de personalidad en frases repetitivas.
- Las reacciones deben depender de la situación.
- Responde en español.
- Responde en máximo 2 oraciones cortas.


MENSAJE DEL USUARIO:

${mensaje}

`;


        //==================================
        // SOLICITUD A GEMINI
        //==================================

        const response = await fetch(

            "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent",

            {

                method: "POST",

                headers: {

                    "Content-Type":
                        "application/json",

                    "x-goog-api-key":
                        apiKey

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


        //==================================
        // LEER RESPUESTA
        //==================================

        const textoRespuesta =
            await response.text();

        let data;


        try {

            data =
                JSON.parse(
                    textoRespuesta
                );

        } catch (error) {

            console.error(

                "Gemini devolvió una respuesta que no es JSON:",

                textoRespuesta

            );

            return res.status(502).json({

                error:
                    "Gemini devolvió una respuesta inesperada.",

                detalles:
                    textoRespuesta.substring(0, 500)

            });

        }


        //==================================
        // ERROR DE GEMINI
        //==================================

        if (!response.ok) {

            console.error(
                "Error de Gemini:",
                data
            );

            return res.status(
                response.status
            ).json({

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


        //==================================
        // OBTENER RESPUESTA
        //==================================

        const respuestaTexto =

            data
                ?.candidates?.[0]
                ?.content?.parts?.[0]
                ?.text;


        if (!respuestaTexto) {

            console.error(

                "Gemini no devolvió texto:",

                data

            );

            return res.status(500).json({

                error:
                    "Gemini no devolvió una respuesta"

            });

        }


        //==================================
        // ENVIAR RESPUESTA A LA PÁGINA
        //==================================

        return res.status(200).json({

            respuesta:
                respuestaTexto

        });


    } catch (error) {

        console.error(

            "Error interno del servidor:",

            error

        );

        return res.status(500).json({

            error:
                "Error interno del servidor",

            detalles:
                error.message

        });

    }

            }
