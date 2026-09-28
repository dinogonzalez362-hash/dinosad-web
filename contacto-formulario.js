//==================================
// CONTACTO - FORMULARIO (cliente v2)
//==================================

const formularioContacto = document.getElementById("formularioContacto");
const mensajeContacto = document.getElementById("mensajeContacto");
const btnEnviarContacto = document.getElementById("btnEnviarContacto");

if (formularioContacto) {

    formularioContacto.addEventListener("submit", async (e) => {

        e.preventDefault();

        btnEnviarContacto.disabled = true;
        btnEnviarContacto.textContent = "Enviando...";
        mensajeContacto.textContent = "";

        const datos = {
            nombre: document.getElementById("nombreContacto").value.trim(),
            edad: document.getElementById("edadContacto").value.trim(),
            correo: document.getElementById("correoContacto").value.trim(),
            motivo: document.getElementById("motivoContacto").value,
            comentario: document.getElementById("comentarioContacto").value.trim(),
            // Campo oculto anti-spam: debe ir vacío
            sitioWeb: document.getElementById("sitioWebContacto")?.value || ""
        };

        try {

            const respuesta = await fetch("/api/contacto", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(datos)
            });

            if (!respuesta.ok) {
                throw new Error("HTTP " + respuesta.status);
            }

            mensajeContacto.textContent = "✅ ¡Mensaje enviado correctamente!";
            formularioContacto.reset();

        } catch (error) {

            // El detalle técnico queda en la consola
            console.error("Error al enviar contacto:", error);

            mensajeContacto.textContent =
                "❌ No se pudo enviar. Probá de nuevo en un rato.";

        } finally {

            btnEnviarContacto.disabled = false;
            btnEnviarContacto.textContent = "Enviar";

        }

    });

}
