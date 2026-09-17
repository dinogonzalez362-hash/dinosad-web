const formularioContacto = document.getElementById("formularioContacto");
const mensajeContacto = document.getElementById("mensajeContacto");
const btnEnviarContacto = document.getElementById("btnEnviarContacto");

formularioContacto.addEventListener("submit", async (e) => {
    e.preventDefault();

    btnEnviarContacto.disabled = true;
    btnEnviarContacto.textContent = "Enviando...";
    mensajeContacto.textContent = "";

    const datos = {
        nombre: document.getElementById("nombreContacto").value,
        edad: document.getElementById("edadContacto").value,
        correo: document.getElementById("correoContacto").value,
        motivo: document.getElementById("motivoContacto").value,
        comentario: document.getElementById("comentarioContacto").value
    };

    try {
        const respuesta = await fetch("/api/contacto", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(datos)
        });

        const textoRespuesta = await respuesta.text();

        console.log("Respuesta del servidor:", textoRespuesta);

        const resultado = textoRespuesta;

        if (!respuesta.ok) {
            throw new Error(resultado);
        }

        mensajeContacto.textContent =
            "✅ ¡Mensaje enviado correctamente!";

        formularioContacto.reset();

    } catch (error) {

        console.error(error);

        mensajeContacto.textContent =
            "❌ Error: " + error.message;

    } finally {

        btnEnviarContacto.disabled = false;
        btnEnviarContacto.textContent = "Enviar";
    }
});
