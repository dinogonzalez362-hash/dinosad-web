document.addEventListener("DOMContentLoaded", () => {
    // Lista de imágenes o imágenes de tus stickers existentes
    const cartasDino = [
        { id: "stiker1", img: "stiker1.png" },
        { id: "stiker2", img: "stiker2.png" },
        { id: "stiker3", img: "stiker3.png" },
        { id: "stiker4", img: "stiker4.png" },
        { id: "stiker5", img: "stiker5.png" },
        { id: "stiker6", img: "stiker6.png" }
    ];

    let cartas = [];
    let cantidadParejas = 4;
    let primeraCarta = null;
    let segundaCarta = null;
    let bloqueoTablero = false;
    let intentos = 0;
    let parejasEncontradas = 0;

    const tablero = document.getElementById("tableroMemoria");
    const txtIntentos = document.getElementById("contadorIntentos");
    const txtParejas = document.getElementById("contadorParejas");
    const btnReiniciar = document.getElementById("btnReiniciarMemoria");
    const txtCronometro = document.getElementById("cronometroMemoria");
    let tiempo = 0;
    let intervaloCronometro = null;

    function actualizarCronometro() {
        tiempo++;
        const minutos = String(Math.floor(tiempo / 60)).padStart(2, "0");
        const segundos = String(tiempo % 60).padStart(2, "0");

        if (txtCronometro) {
            txtCronometro.textContent = `⏱️ Tiempo: ${minutos}:${segundos}`;
        }
    }

    function iniciarCronometroMemoria() {
        tiempo = 0;
        clearInterval(intervaloCronometro);

        if (txtCronometro) {
            txtCronometro.textContent = "⏱️ Tiempo: 00:00";
        }

        intervaloCronometro = setInterval(actualizarCronometro, 1000);
    }

    function detenerCronometroMemoria() {
        clearInterval(intervaloCronometro);
    }

    window.detenerCronometroMemoria = detenerCronometroMemoria;

    function iniciarJuego() {
        cantidadParejas = Number(window.memoryParejas) || 4;
        tablero.innerHTML = "";
        primeraCarta = null;
        segundaCarta = null;
        bloqueoTablero = false;
        intentos = 0;
        parejasEncontradas = 0;
        txtIntentos.textContent = intentos;
        txtParejas.textContent = `0/${cantidadParejas}`;

        cartas = Array.from({ length: cantidadParejas }, (_, indice) => {
            const dino = cartasDino[indice % cartasDino.length];
            return { id: `${dino.id}-${indice}`, img: dino.img };
        });
        cartas = [...cartas, ...cartas].sort(() => Math.random() - 0.5);

        cartas.forEach(dino => {
            const carta = document.createElement("div");
            carta.classList.add("carta-memoria");
            carta.dataset.dinoId = dino.id;

            carta.innerHTML = `
                <div class="cara-dorso">🦖</div>
                <div class="cara-frente">
                    <img src="${dino.img}" alt="Dino">
                </div>
            `;

            carta.addEventListener("click", voltearCarta);
            tablero.appendChild(carta);
        });

            iniciarCronometroMemoria();
    }

    function voltearCarta() {
        if (bloqueoTablero || this === primeraCarta || this.classList.contains("emparejada")) return;

        this.classList.add("volteada");

        if (!primeraCarta) {
            primeraCarta = this;
            return;
        }

        segundaCarta = this;
        intentos++;
        txtIntentos.textContent = intentos;
        verificarCoincidencia();
    }

    function verificarCoincidencia() {
        const esIgual = primeraCarta.dataset.dinoId === segundaCarta.dataset.dinoId;

        if (esIgual) {
            deshabilitarCartas();
        } else {
            desvoltearCartas();
        }
    }

    function deshabilitarCartas() {
        primeraCarta.classList.add("emparejada");
        segundaCarta.classList.add("emparejada");
        parejasEncontradas++;
        txtParejas.textContent = `${parejasEncontradas}/${cantidadParejas}`;

        resetearVariables();

        if (parejasEncontradas === cantidadParejas) {
            detenerCronometroMemoria();
            setTimeout(() => alert(`¡Felicidades! Ganaste en ${intentos} intentos. 🎉`), 500);
        }
    }

    function desvoltearCartas() {
        bloqueoTablero = true;
        setTimeout(() => {
            primeraCarta.classList.remove("volteada");
            segundaCarta.classList.remove("volteada");
            resetearVariables();
        }, 1000);
    }

    function resetearVariables() {
        [primeraCarta, segundaCarta] = [null, null];
        bloqueoTablero = false;
    }

    btnReiniciar.addEventListener("click", iniciarJuego);
    window.iniciarJuegoMemoria = iniciarJuego;
    iniciarJuego();
});