export default async function handler(req, res) {
    try {
        const url = process.env.KV_URL;
        const token = process.env.KV_REST_API_TOKEN;

        if (!url || !token) {
            return res.status(500).json({
                ok: false,
                error: "Faltan las variables de Upstash"
            });
        }

        const respuesta = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify([
                "SET",
                "dinosad:prueba",
                "Hola desde DinoSad Web 🦖"
            ])
        });

        const datos = await respuesta.json();

        if (!respuesta.ok) {
            return res.status(500).json({
                ok: false,
                error: datos
            });
        }

        return res.status(200).json({
            ok: true,
            mensaje: "DinoSad Web se conectó correctamente con Upstash 🦖",
            resultado: datos
        });

    } catch (error) {
        return res.status(500).json({
            ok: false,
            error: error.message
        });
    }
          }
