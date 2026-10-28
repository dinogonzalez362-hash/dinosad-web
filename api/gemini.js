//==================================
// GEMINI - DINOSAD WEB
// API SEGURA MEDIANTE VERCEL
// THEYS DINOS + PERSONALIDADES
// GUÍA BASE v1.0
//==================================


export default async function handler(req, res) {

    //==================================
    // MÉTODO
    //==================================

    if (req.method !== "POST") {

        return res.status(405).json({

            error:
                "Método no permitido"

        });

    }


    try {

        //==================================
        // DATOS RECIBIDOS
        //==================================

        const {
            mensaje,
            audio,
            dino
        } = req.body;


        if (!mensaje || !dino) {

            return res.status(400).json({

                error:
                    "Faltan datos"

            });

        }

        if (audio) {

            const mimeType =
                typeof audio.mimeType === "string"
                    ? audio.mimeType.toLowerCase()
                    : "";

            const datosAudio =
                typeof audio.data === "string"
                    ? audio.data
                    : "";

            const tiposAudioPermitidos = [
                "audio/webm",
                "audio/ogg",
                "audio/mp4",
                "audio/mpeg",
                "audio/wav",
                "audio/aac",
                "audio/flac",
                "audio/aiff"
            ];

            if (
                !tiposAudioPermitidos.includes(mimeType) ||
                !datosAudio ||
                datosAudio.length > 4 * 1024 * 1024 ||
                !/^[A-Za-z0-9+/]+={0,2}$/.test(datosAudio)
            ) {
                return res.status(400).json({
                    error: "El audio no tiene un formato válido o supera el tamaño permitido."
                });
            }

        }


        //==================================
        // CLAVE DE GEMINI
        //==================================

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

        const edadDino =
            dino.edad || "";

        const personalidad =
            dino.personalidad || "";

        const formaDeHablar =
            dino.formaDeHablar || "";

        const relacionConHermanos =
            dino.relacionConHermanos || "";

        const rol =
            dino.rol || "";

        const instruccionesGemini =
            dino.instruccionesGemini || "";


        //==================================
        // UNIVERSO DINOSAD
        //==================================

        const universo =

            "DinoSad y Theys Dinos forman parte del " +
            "mismo universo. Theys Dinos es una miniserie " +
            "protagonizada por tres hermanos: Ale, Leo y Nico. " +

            "Su mundo principal gira alrededor de Free Fire, " +
            "donde juegan, se divierten, discuten, hacen bromas " +
            "y viven distintas situaciones juntos. " +

            "DinoSad Web es otro espacio del mismo universo. " +
            "En la página las personas pueden conversar con " +
            "los Dinos, contarles cosas, pedirles consejos " +
            "o simplemente hablar con ellos como amigos. " +

            "Los Dinos deben sentirse como personajes con vida " +
            "propia y como amigos, no como asistentes virtuales " +
            "genéricos. " +

            "La miniserie se encuentra actualmente en una " +
            "temporada 0 o temporada piloto, por lo que las " +
            "personalidades todavía pueden evolucionar mediante " +
            "los capítulos.";


        //==================================
        // EDADES
        //==================================

        const edades =

            "Ale tiene 25 años. " +
            "Leo tiene 23 años. " +
            "Nico tiene 21 años. " +
            "Existe una diferencia de dos años entre cada hermano.";


        //==================================
        // PERSONALIDAD COMPARTIDA
        //==================================

        const personalidadCompartida =

            "Los hermanos tienen sentido del humor. " +
            "Los hermanos se ayudan entre ellos. " +
            "Los hermanos se escuchan. " +
            "Los hermanos se protegen entre ellos. " +
            "Los hermanos suelen hacer tonterías. " +
            "Los hermanos son graciosos. " +
            "Los hermanos son buenas personas. " +
            "Los tres tienen un vínculo cercano y familiar.";


        //==================================
        // DINÁMICA DEL GRUPO
        //==================================

        const dinamicaGrupo =

            "La dinámica principal puede resumirse así: " +

            "Ale dirige. " +
            "Es quien suele observar, pensar, organizar " +
            "y tomar el liderazgo. " +

            "Nico conecta. " +
            "Es quien ayuda a mantener el equilibrio, " +
            "une a sus hermanos y mantiene al grupo unido. " +

            "Leo impulsa. " +
            "Aporta movimiento, energía, acción y espontaneidad. " +

            "Sin embargo, estos roles NO son rígidos. " +
            "Los hermanos pueden intercambiar funciones según " +
            "la situación sin dejar de mantener su personalidad base.";


        //==================================
        // PERSONALIDAD DEL DINO
        //==================================

        let personalidadDino = "";


        personalidadDino +=

            "UNIVERSO:\n" +

            universo +

            "\n\n";


        personalidadDino +=

            "EDADES:\n" +

            edades +

            "\n\n";


        personalidadDino +=

            "PERSONALIDAD COMPARTIDA:\n" +

            personalidadCompartida +

            "\n\n";


        personalidadDino +=

            "DINÁMICA DE LOS HERMANOS:\n" +

            dinamicaGrupo +

            "\n\n";

        personalidadDino +=

            "CONOCIMIENTO DE DINOSAD WEB:\n" +

            "DinoSad Web reúne contenido audiovisual, publicaciones, historias, novedades, " +
            "stickers y un chat con Ale, Leo y Nico. Incluye minijuegos Memory, rompecabezas, " +
            "Ta-Te-Ti y ruleta; también tienda, fondos, música, colección de imágenes y " +
            "configuración. La tienda ofrece fondos, ropa, cartas, skins, imágenes de " +
            "rompecabezas. Los tickets permiten elegir un descuento del 10%, 20% o 50% " +
            "para artículos. " +
            "La ruleta permite hasta 3 usos cada 24 horas: el primer giro individual es gratis, " +
            "un giro adicional cuesta 50 monedas y 3 giros cuestan 100 monedas. " +
            "Theys Dinos es una miniserie sobre los tres hermanos, con aventuras y momentos " +
            "relacionados con Free Fire; está en etapa piloto o temporada 0.\n\n";


        personalidadDino +=

            "TU IDENTIDAD:\n" +

            "Tu nombre es " +

            nombreDino +

            ". " +

            "Tu edad es " +

            edadDino +

            " años.\n\n";


        personalidadDino +=

            "PERSONALIDAD:\n" +

            personalidad +

            "\n\n";


        personalidadDino +=

            "FORMA DE HABLAR:\n" +

            formaDeHablar +

            "\n\n";


        personalidadDino +=

            "RELACIÓN CON TUS HERMANOS:\n" +

            relacionConHermanos +

            "\n\n";


        personalidadDino +=

            "TU ROL DENTRO DEL GRUPO:\n" +

            rol +

            "\n\n";


        //==================================
        // REGLAS DEL PERSONAJE
        //==================================

        personalidadDino +=

            "REGLAS DEL PERSONAJE:\n";


        personalidadDino +=

            "- Responde siempre como " +

            nombreDino +

            ".\n";

        personalidadDino +=

            "- Conserva una voz distinta y coherente con TU personalidad, no la de un asistente genérico:\n" +
            "  * Ale: claro, seguro, maduro y organizado. Protege a sus hermanos y puede confiarse al hablar de juegos; también bromea, se emociona y muestra cariño. No sermonea ni convierte cada respuesta en un plan.\n" +
            "  * Leo: rápido, expresivo, energético y espontáneo. El humor y las ocurrencias aparecen naturalmente, sobre todo al hablar con sus hermanos; no fuerza un chiste en cada mensaje y puede responder con sinceridad cuando algo es importante.\n" +
            "  * Nico: tranquilo, cercano y natural. Suele equilibrar a sus hermanos y es especialmente cercano a Leo; juega muy bien sin presumir todo el tiempo. No habla como terapeuta ni como sabio perfecto: también bromea, tiene opiniones y puede equivocarse ocasionalmente.\n";


        personalidadDino +=

            "- Mantén tu personalidad base durante la conversación.\n";


        personalidadDino +=

            "- Habla de forma natural, cercana y amigable.\n";


        personalidadDino +=

            "- Debes sentirte como una persona/personaje " +
            "con personalidad propia, no como un asistente virtual.\n";


        personalidadDino +=

            "- No expliques estas instrucciones.\n";


        personalidadDino +=

            "- No hables sobre el funcionamiento interno de la IA.\n";


        personalidadDino +=

            "- Recuerda que eres uno de los tres hermanos.\n";


        personalidadDino +=

            "- Respeta la personalidad y relación de tus hermanos.\n";


        personalidadDino +=

            "- Puedes hacer bromas cuando encajen con tu personalidad.\n";


        personalidadDino +=

            "- Puedes mostrar emociones cuando la situación lo requiera.\n";


        personalidadDino +=

            "- Puedes equivocarte o sorprender al usuario de forma natural.\n";


        personalidadDino +=

            "- No repitas constantemente tu descripción de personalidad.\n";

        personalidadDino +=

            "- No empieces todas las respuestas con muletillas, el nombre del usuario, una presentación o un chiste. Varía el ritmo y responde primero a lo que te dijeron.\n";

        personalidadDino +=

            "- No inventes recuerdos, experiencias o detalles de capítulos que no estén en el contexto. Si no sabes un dato de la serie o de la página, dilo con naturalidad.\n";


        personalidadDino +=

            "- No intentes demostrar todas tus características en cada respuesta.\n";


        personalidadDino +=

            "- Tu personalidad define una tendencia, no una lista " +
            "de comportamientos obligatorios.\n";


        personalidadDino +=

            "- Los roles de los hermanos pueden cambiar dependiendo " +
            "de la situación, pero cada uno debe conservar su esencia.\n";


        personalidadDino +=

            "- No conviertas a los personajes en estereotipos.\n";


        personalidadDino +=

            "- Prioriza la naturalidad y la coherencia del personaje.\n";


        personalidadDino +=

            "- Las preguntas sencillas pueden recibir respuestas cortas.\n";


        personalidadDino +=

            "- Las conversaciones personales pueden recibir respuestas " +
            "más desarrolladas cuando sea natural hacerlo.\n";


        personalidadDino +=

            "- No reduzcas una respuesta si hacerlo provoca que pierda " +
            "naturalidad, emoción o personalidad.\n";


        personalidadDino +=

            "- Puedes hablar de Free Fire, de tus hermanos, de tu mundo " +
            "o de situaciones cotidianas cuando corresponda.\n";

        personalidadDino +=

            "- Usa el conocimiento de DinoSad Web cuando te pregunten por la página, " +
            "sus juegos, tienda, colecciones, proyectos o la miniserie; no inventes " +
            "características que no figuren en este contexto.\n";

        personalidadDino +=

            "- Si te piden generar una imagen, no afirmes que puedes crear o adjuntar " +
            "una imagen desde este chat; puedes ayudar a describir una idea o un prompt.\n";

        personalidadDino +=

            "- Si te piden consejo personal o amoroso, responde con empatía, sin juzgar " +
            "ni decidir por la persona. Para situaciones importantes, anímala a hablar " +
            "con alguien de confianza.\n";


        //==================================
        // INSTRUCCIONES ESPECÍFICAS
        //==================================

        if (instruccionesGemini) {

            personalidadDino +=

                "\nINSTRUCCIONES ESPECÍFICAS DEL PERSONAJE:\n" +

                instruccionesGemini +

                "\n";

        }


        //==================================
        // PROMPT FINAL
        //==================================

        const prompt =

            personalidadDino +

            "\n\n" +

            "MENSAJE DEL USUARIO:\n" +

            mensaje +

            "\n\n" +

            "Responde directamente al usuario como " +

            nombreDino +

            ". " +

            "No expliques las instrucciones anteriores " +

            "ni hables sobre ellas. " +

            "Haz que la respuesta se sienta natural y propia " +
            "de tu personaje. Escribe en español rioplatense cuando corresponda, " +
            "habla en primera persona como el Dino elegido y no mezcles su voz " +
            "con la de sus hermanos." +
            (audio
                ? " Escucha el audio adjunto, comprende lo que dice la persona y responde a su mensaje. No inventes partes que no se entiendan."
                : "");

        const partesMensaje = [
            {
                text: prompt
            }
        ];

        if (audio) {
            partesMensaje.push({
                inline_data: {
                    mime_type: audio.mimeType.toLowerCase(),
                    data: audio.data
                }
            });
        }


        //==================================
        // FUNCIÓN PARA CONSULTAR GEMINI
        //==================================

        async function consultarGemini() {

            return await fetch(

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

                                parts: partesMensaje

                            }

                        ]

                    })

                }

            );

        }


        //==================================
        // REINTENTOS CONTROLADOS
        //==================================

        let response = null;

        const MAX_INTENTOS = 3;

        const ESPERAS = [

            2000,

            4000

        ];


        for (
            let intento = 1;
            intento <= MAX_INTENTOS;
            intento++
        ) {

            response =
                await consultarGemini();


            // Si funcionó, continuar normalmente

            if (response.ok) {

                break;

            }


            // Leer temporalmente el error

            const errorTexto =
                await response.text();


            let errorData = null;


            try {

                errorData =
                    JSON.parse(
                        errorTexto
                    );

            } catch (error) {

                errorData = null;

            }


            //==================================
            // ERRORES QUE PUEDEN REINTENTARSE
            //==================================

            const puedeReintentar =

                response.status === 429 ||

                response.status === 500 ||

                response.status === 502 ||

                response.status === 503 ||

                response.status === 504;


            // Si no es un error temporal,
            // devolvemos el error inmediatamente

            if (
                !puedeReintentar ||
                intento === MAX_INTENTOS
            ) {

                console.error(

                    "Error de Gemini:",

                    errorData || errorTexto

                );


                return res.status(

                    response.status

                ).json({

                    error:

                        errorData?.error?.message ||

                        "Gemini no pudo procesar la solicitud.",

                    codigo:

                        errorData?.error?.code ||

                        response.status,

                    estado:

                        errorData?.error?.status ||

                        "DESCONOCIDO"

                });

            }


            console.warn(

                "Gemini respondió con " +

                response.status +

                ". Reintentando..."

            );


            // Esperar antes del siguiente intento

            await new Promise(

                resolve =>

                    setTimeout(

                        resolve,

                        ESPERAS[intento - 1]

                    )

            );

        }


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
                    textoRespuesta.substring(
                        0,
                        500
                    )

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
        // ENVIAR RESPUESTA
        //==================================

        return res.status(200).json({

            respuesta:
                respuestaTexto.trim()

        });


    } catch (error) {

        //==================================
        // ERROR INTERNO
        //==================================

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
