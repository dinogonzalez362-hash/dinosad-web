const btnMicrofonoDino = document.getElementById("btnMicrofonoDino");
const menuVozDino = document.getElementById("menuVozDino");
const btnEnviarAudioDino = document.getElementById("btnEnviarAudioDino");
const btnDictadoDino = document.getElementById("btnDictadoDino");
const estadoVozDino = document.getElementById("estadoVozDino");
const textoEstadoVozDino = document.getElementById("textoEstadoVozDino");
const btnFinalizarVozDino = document.getElementById("btnFinalizarVozDino");
const btnCancelarVozDino = document.getElementById("btnCancelarVozDino");

let grabadorAudioDino = null;
let streamAudioDino = null;
let reconocimientoVozDino = null;
let dictadoFinalDino = "";
let textoPrevioDictadoDino = "";
let cancelarGrabacionDino = false;
let errorDictadoVozDino = false;
let temporizadorGrabacionDino = null;
let segundosGrabacionDino = 0;
const urlsAudioDino = new Set();

const DURACION_MAXIMA_GRABACION_DINO = 90;
const TAMANO_MAXIMO_AUDIO_DINO = 3 * 1024 * 1024;

function mostrarEstadoVozDino(texto, opciones = {}) {
    estadoVozDino.hidden = false;
    textoEstadoVozDino.textContent = texto;
    btnFinalizarVozDino.hidden = !opciones.finalizar;
    btnCancelarVozDino.hidden = !opciones.cancelar;
}

function ocultarEstadoVozDino() {
    estadoVozDino.hidden = true;
    textoEstadoVozDino.textContent = "";
    btnFinalizarVozDino.hidden = true;
    btnCancelarVozDino.hidden = true;
}

function cerrarMenuVozDino() {
    menuVozDino.hidden = true;
    btnMicrofonoDino.setAttribute("aria-expanded", "false");
}

function limpiarStreamAudioDino() {
    if (temporizadorGrabacionDino) {
        clearInterval(temporizadorGrabacionDino);
        temporizadorGrabacionDino = null;
    }
    if (streamAudioDino) {
        streamAudioDino.getTracks().forEach((track) => track.stop());
        streamAudioDino = null;
    }
}

function crearMensajeAudioDino(blob) {
    const mensaje = document.createElement("div");
    const etiqueta = document.createElement("small");
    const reproductor = document.createElement("audio");
    const urlAudio = URL.createObjectURL(blob);

    urlsAudioDino.add(urlAudio);
    mensaje.className = "mensajeDino usuario mensajeDinoAudio";
    etiqueta.textContent = "Nota de voz";
    reproductor.controls = true;
    reproductor.preload = "metadata";
    reproductor.src = urlAudio;
    mensaje.append(etiqueta, reproductor);
    mensajesChatDino.appendChild(mensaje);
    mensajesChatDino.scrollTop = mensajesChatDino.scrollHeight;

    if (dinoChatActual && typeof guardarMensajeConversacion === "function") {
        guardarMensajeConversacion(dinoChatActual.nombre, "[Nota de voz enviada]", "usuario");
    }
}

function convertirAudioABase64(blob) {
    return new Promise((resolve, reject) => {
        const lector = new FileReader();
        lector.onload = () => {
            const resultado = String(lector.result || "");
            const separador = resultado.indexOf(",");
            if (separador < 0) {
                reject(new Error("No se pudo preparar el audio para enviarlo."));
                return;
            }
            resolve(resultado.slice(separador + 1));
        };
        lector.onerror = () => reject(new Error("No se pudo leer la grabación."));
        lector.readAsDataURL(blob);
    });
}

async function convertirGrabacionAudioWav(blob) {
    const AudioContextDino = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextDino) {
        throw new Error("Este navegador no permite preparar el audio para enviarlo.");
    }

    const contexto = new AudioContextDino();
    let audioDecodificado;
    try {
        audioDecodificado = await contexto.decodeAudioData(await blob.arrayBuffer());
    } finally {
        await contexto.close();
    }

    const frecuenciaSalida = 16000;
    const cantidadMuestras = Math.ceil(audioDecodificado.length * frecuenciaSalida / audioDecodificado.sampleRate);
    if (cantidadMuestras > DURACION_MAXIMA_GRABACION_DINO * frecuenciaSalida) {
        throw new Error("El audio supera el minuto y medio permitido.");
    }

    const muestras = new Int16Array(cantidadMuestras);
    const canales = Array.from(
        { length: audioDecodificado.numberOfChannels },
        (_, indice) => audioDecodificado.getChannelData(indice)
    );
    const factor = audioDecodificado.sampleRate / frecuenciaSalida;

    for (let indice = 0; indice < cantidadMuestras; indice++) {
        const posicion = indice * factor;
        const posicionInicial = Math.floor(posicion);
        const fraccion = posicion - posicionInicial;
        let muestra = 0;
        for (const canal of canales) {
            const inicial = canal[posicionInicial] || 0;
            const siguiente = canal[Math.min(posicionInicial + 1, canal.length - 1)] || 0;
            muestra += inicial + (siguiente - inicial) * fraccion;
        }
        muestra /= canales.length;
        muestras[indice] = muestra < 0
            ? Math.max(-1, muestra) * 32768
            : Math.min(1, muestra) * 32767;
    }

    const buffer = new ArrayBuffer(44 + muestras.length * 2);
    const vista = new DataView(buffer);
    const escribirTexto = (desplazamiento, texto) => {
        for (let indice = 0; indice < texto.length; indice++) {
            vista.setUint8(desplazamiento + indice, texto.charCodeAt(indice));
        }
    };
    escribirTexto(0, "RIFF");
    vista.setUint32(4, buffer.byteLength - 8, true);
    escribirTexto(8, "WAVE");
    escribirTexto(12, "fmt ");
    vista.setUint32(16, 16, true);
    vista.setUint16(20, 1, true);
    vista.setUint16(22, 1, true);
    vista.setUint32(24, frecuenciaSalida, true);
    vista.setUint32(28, frecuenciaSalida * 2, true);
    vista.setUint16(32, 2, true);
    vista.setUint16(34, 16, true);
    escribirTexto(36, "data");
    vista.setUint32(40, muestras.length * 2, true);
    for (let indice = 0; indice < muestras.length; indice++) {
        vista.setInt16(44 + indice * 2, muestras[indice], true);
    }
    return new Blob([buffer], { type: "audio/wav" });
}

async function enviarGrabacionDino(blob) {
    if (!dinoChatActual || respuestaDinoPendiente) return;

    crearMensajeAudioDino(blob);
    respuestaDinoPendiente = true;
    btnEnviarChatDino.disabled = true;
    inputChatDino.disabled = true;
    btnMicrofonoDino.disabled = true;
    mostrarEstadoVozDino("Enviando tu audio...");

    try {
        const audioWav = await convertirGrabacionAudioWav(blob);
        if (audioWav.size > TAMANO_MAXIMO_AUDIO_DINO) {
            throw new Error("El audio supera el límite de 3 MB.");
        }
        const audio = {
            mimeType: audioWav.type,
            data: await convertirAudioABase64(audioWav)
        };
        await window.obtenerRespuestaGemini(
            "Escucha mi nota de voz, transcribe lo que digo y respóndeme como de costumbre.",
            dinoChatActual,
            audio
        );
        ocultarEstadoVozDino();
    } catch (error) {
        console.error("No se pudo enviar la nota de voz.", error);
        mostrarEstadoVozDino(error.message || "No se pudo enviar el audio. Comprueba tu conexión e inténtalo de nuevo.");
    } finally {
        respuestaDinoPendiente = false;
        btnEnviarChatDino.disabled = false;
        inputChatDino.disabled = false;
        btnMicrofonoDino.disabled = false;
        inputChatDino.focus();
    }
}

async function iniciarGrabacionDino() {
    if (!navigator.mediaDevices || typeof navigator.mediaDevices.getUserMedia !== "function") {
        mostrarEstadoVozDino("Este navegador o esta página no permite acceder al micrófono. Ábrela en HTTPS o localhost.");
        return;
    }
    if (typeof MediaRecorder !== "function") {
        mostrarEstadoVozDino("Este navegador no permite grabar audio. Prueba con otro navegador actualizado.");
        return;
    }

    try {
        streamAudioDino = await navigator.mediaDevices.getUserMedia({ audio: true });
        const formatos = ["audio/webm;codecs=opus", "audio/ogg;codecs=opus", "audio/mp4"];
        const mimeType = formatos.find((formato) =>
            typeof MediaRecorder.isTypeSupported !== "function"
            || MediaRecorder.isTypeSupported(formato)
        );
        grabadorAudioDino = mimeType
            ? new MediaRecorder(streamAudioDino, { mimeType, audioBitsPerSecond: 64000 })
            : new MediaRecorder(streamAudioDino, { audioBitsPerSecond: 64000 });

        const partesAudio = [];
        cancelarGrabacionDino = false;
        grabadorAudioDino.addEventListener("dataavailable", (event) => {
            if (event.data.size > 0) partesAudio.push(event.data);
        });
        grabadorAudioDino.addEventListener("error", (event) => {
            console.error("Error durante la grabación de audio.", event.error);
            cancelarGrabacionDino = true;
            limpiarStreamAudioDino();
            grabadorAudioDino = null;
            btnMicrofonoDino.disabled = false;
            mostrarEstadoVozDino("Hubo un problema al grabar. Vuelve a intentarlo.");
        });
        grabadorAudioDino.addEventListener("stop", () => {
            limpiarStreamAudioDino();
            grabadorAudioDino = null;
            btnMicrofonoDino.disabled = false;
            const grabacionCancelada = cancelarGrabacionDino;
            cancelarGrabacionDino = false;
            if (grabacionCancelada) {
                ocultarEstadoVozDino();
                return;
            }
            const tipoGrabacion = mimeType || (partesAudio[0] && partesAudio[0].type) || "audio/webm";
            const audio = new Blob(partesAudio, { type: tipoGrabacion });
            if (!audio.size) {
                mostrarEstadoVozDino("No se grabó audio. Comprueba el micrófono e inténtalo otra vez.");
                return;
            }
            void enviarGrabacionDino(audio);
        });
        grabadorAudioDino.start();
        cerrarMenuVozDino();
        btnMicrofonoDino.disabled = true;
        segundosGrabacionDino = 0;
        mostrarEstadoVozDino("Grabando (0:00 / 1:30)...", {
            finalizar: true,
            cancelar: true
        });
        temporizadorGrabacionDino = setInterval(() => {
            segundosGrabacionDino++;
            const minutos = Math.floor(segundosGrabacionDino / 60);
            const segundos = String(segundosGrabacionDino % 60).padStart(2, "0");
            mostrarEstadoVozDino(`Grabando (${minutos}:${segundos} / 1:30)...`, {
                finalizar: true,
                cancelar: true
            });
            if (segundosGrabacionDino >= DURACION_MAXIMA_GRABACION_DINO && grabadorAudioDino) {
                grabadorAudioDino.stop();
            }
        }, 1000);
    } catch (error) {
        limpiarStreamAudioDino();
        btnMicrofonoDino.disabled = false;
        console.error("No se pudo iniciar el micrófono.", error);
        const mensaje = error.name === "NotAllowedError" || error.name === "PermissionDeniedError"
            ? "No hay permiso para usar el micrófono. Habilítalo en los permisos del navegador."
            : "No se pudo iniciar el micrófono. Comprueba que esté conectado y vuelve a intentarlo.";
        mostrarEstadoVozDino(mensaje);
    }
}

function iniciarDictadoDino() {
    const SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognitionAPI) {
        cerrarMenuVozDino();
        mostrarEstadoVozDino("Este navegador no admite dictado por voz. Prueba Chrome o Edge actualizado.");
        return;
    }
    if (reconocimientoVozDino) {
        reconocimientoVozDino.stop();
        return;
    }

    const reconocimiento = new SpeechRecognitionAPI();
    reconocimientoVozDino = reconocimiento;
    textoPrevioDictadoDino = inputChatDino.value.trim();
    dictadoFinalDino = textoPrevioDictadoDino;
    reconocimiento.lang = "es-AR";
    reconocimiento.continuous = true;
    reconocimiento.interimResults = true;
    reconocimiento.onresult = (event) => {
        let textoParcial = "";
        for (let indice = event.resultIndex; indice < event.results.length; indice++) {
            const resultado = event.results[indice];
            if (resultado.isFinal) {
                dictadoFinalDino += (dictadoFinalDino ? " " : "") + resultado[0].transcript.trim();
            } else {
                textoParcial += resultado[0].transcript;
            }
        }
        inputChatDino.value = [dictadoFinalDino, textoParcial].filter(Boolean).join(" ").trim();
    };
    reconocimiento.onerror = (event) => {
        if (event.error === "aborted") {
            errorDictadoVozDino = true;
            reconocimientoVozDino = null;
            btnMicrofonoDino.disabled = false;
            ocultarEstadoVozDino();
            return;
        }
        console.error("Falló el dictado por voz.", event.error);
        errorDictadoVozDino = true;
        reconocimientoVozDino = null;
        btnMicrofonoDino.disabled = false;
        const texto = event.error === "not-allowed"
            ? "No hay permiso para usar el micrófono. Habilítalo en los permisos del navegador."
            : "No se pudo transcribir la voz. Inténtalo otra vez o escribe el mensaje.";
        mostrarEstadoVozDino(texto);
    };
    reconocimiento.onend = () => {
        reconocimientoVozDino = null;
        btnDictadoDino.disabled = false;
        btnMicrofonoDino.disabled = false;
        if (errorDictadoVozDino) {
            errorDictadoVozDino = false;
            return;
        }
        if (estadoVozDino.hidden) return;
        ocultarEstadoVozDino();
        inputChatDino.focus();
    };

    try {
        errorDictadoVozDino = false;
        reconocimiento.start();
        cerrarMenuVozDino();
        btnMicrofonoDino.disabled = true;
        btnDictadoDino.disabled = true;
        mostrarEstadoVozDino("Escuchando... Habla; toca «Terminar» para revisar la transcripción.", {
            finalizar: true,
            cancelar: true
        });
    } catch (error) {
        reconocimientoVozDino = null;
        btnMicrofonoDino.disabled = false;
        console.error("No se pudo iniciar el dictado por voz.", error);
        mostrarEstadoVozDino("No se pudo iniciar el micrófono. Comprueba sus permisos e inténtalo otra vez.");
    }
}

btnMicrofonoDino.addEventListener("click", () => {
    const abrir = menuVozDino.hidden;
    menuVozDino.hidden = !abrir;
    btnMicrofonoDino.setAttribute("aria-expanded", String(abrir));
    if (abrir) ocultarEstadoVozDino();
});

btnEnviarAudioDino.addEventListener("click", () => {
    void iniciarGrabacionDino();
});

btnDictadoDino.addEventListener("click", iniciarDictadoDino);

btnFinalizarVozDino.addEventListener("click", () => {
    if (grabadorAudioDino && grabadorAudioDino.state !== "inactive") {
        grabadorAudioDino.stop();
    } else if (reconocimientoVozDino) {
        reconocimientoVozDino.stop();
    }
});

btnCancelarVozDino.addEventListener("click", () => {
    if (grabadorAudioDino && grabadorAudioDino.state !== "inactive") {
        cancelarGrabacionDino = true;
        grabadorAudioDino.stop();
    } else if (reconocimientoVozDino) {
        dictadoFinalDino = "";
        inputChatDino.value = textoPrevioDictadoDino;
        reconocimientoVozDino.abort();
        reconocimientoVozDino = null;
        ocultarEstadoVozDino();
    }
});

document.addEventListener("click", (event) => {
    if (!menuVozDino.hidden && !menuVozDino.contains(event.target) && event.target !== btnMicrofonoDino) {
        cerrarMenuVozDino();
    }
});

btnVolverChat.addEventListener("click", () => {
    cerrarMenuVozDino();
    if (grabadorAudioDino && grabadorAudioDino.state !== "inactive") {
        cancelarGrabacionDino = true;
        grabadorAudioDino.stop();
    }
    if (reconocimientoVozDino) {
        reconocimientoVozDino.abort();
        reconocimientoVozDino = null;
    }
    limpiarStreamAudioDino();
    for (const urlAudio of urlsAudioDino) {
        URL.revokeObjectURL(urlAudio);
    }
    urlsAudioDino.clear();
    ocultarEstadoVozDino();
});
