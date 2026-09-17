document.addEventListener("DOMContentLoaded", () => {

    // Variables de Estado
    let dificultad = "facil"; // "facil" o "dificil"
    let modoJuego = "1vs1";  // "1vs1" o "torneo"
    let dinoJugador = "Ale";
    let dinoIA = "Leo";
    let victoriasConsecutivas = 0;
    let probabilidadIA = 0.5; // Comienza al 50% en fácil

    let puntosJugador = 0;
    let puntosIA = 0;
    let tableroState = ["", "", "", "", "", "", "", "", ""];
    let juegoActivo = false;

    // Elementos del DOM
    const pasoDificultad = document.getElementById("tatetiPasoDificultad");
    const pasoModo = document.getElementById("tatetiPasoModo");
    const pasoDino = document.getElementById("tatetiPasoDino");
    const contenedorJuego = document.getElementById("tatetiJuego");
    
    const celdas = document.querySelectorAll(".celda-tateti");
    const txtPuntosJugador = document.getElementById("puntosJugador");
    const txtPuntosIA = document.getElementById("puntosIA");
    const txtDinoElegido = document.getElementById("txtDinoElegido");
    const txtDinoIA = document.getElementById("txtDinoIA");
    const txtInfoModo = document.getElementById("txtInfoModo");
    const mensajeTateti = document.getElementById("mensajeTateti");

    // Combinaciones de victoria
    const combosGanadores = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    function elegirDinoIA() {
        const dinosDisponibles = ["Ale", "Leo", "Nico"];
        const otrosDinos = dinosDisponibles.filter(dino => dino !== dinoJugador);
        dinoIA = otrosDinos[Math.floor(Math.random() * otrosDinos.length)];
    }

    // --- SELECCIÓN DE OPCIONES ---

    document.getElementById("btnTatetiFacil").addEventListener("click", () => {
        dificultad = "facil";
        pasoDificultad.style.display = "none";
        pasoModo.style.display = "block";
    });

    document.getElementById("btnTatetiDificil").addEventListener("click", () => {
        dificultad = "dificil";
        probabilidadIA = 1.0; // 100% inteligente
        // Selección automática
        const dinos = ["Ale", "Leo", "Nico"];
        const modos = ["1vs1", "torneo"];
        dinoJugador = dinos[Math.floor(Math.random() * dinos.length)];
        elegirDinoIA();
        modoJuego = modos[Math.floor(Math.random() * modos.length)];
        
        pasoDificultad.style.display = "none";
        iniciarPartidaCompleta();
    });

    document.getElementById("btnModo1vs1").addEventListener("click", () => {
        modoJuego = "1vs1";
        pasoModo.style.display = "none";
        pasoDino.style.display = "block";
    });

    document.getElementById("btnModoTorneo").addEventListener("click", () => {
        modoJuego = "torneo";
        pasoModo.style.display = "none";
        pasoDino.style.display = "block";
    });

    ["Ale", "Leo", "Nico"].forEach(dino => {
        const btn = document.getElementById(`btnDino${dino}`);
        if(btn) {
            btn.addEventListener("click", () => {
                dinoJugador = dino;
                elegirDinoIA();
                pasoDino.style.display = "none";
                iniciarPartidaCompleta();
            });
        }
    });

    // --- INICIO Y LÓGICA DE JUEGO ---

    function iniciarPartidaCompleta() {
        puntosJugador = 0;
        puntosIA = 0;
        txtPuntosJugador.textContent = 0;
        txtPuntosIA.textContent = 0;
        txtDinoElegido.textContent = dinoJugador;
        txtDinoIA.textContent = dinoIA;
        txtInfoModo.textContent = `Dificultad: ${dificultad.toUpperCase()} | Modo: ${modoJuego.toUpperCase()}`;
        contenedorJuego.style.display = "block";
        iniciarRonda();
    }

    function iniciarRonda() {
        tableroState = ["", "", "", "", "", "", "", "", ""];
        juegoActivo = true;
        mensajeTateti.textContent = "Tu turno (X)";
        celdas.forEach(c => {
            c.textContent = "";
            c.classList.remove("ocupada");
        });
    }

    celdas.forEach(celda => {
        celda.addEventListener("click", () => {
            const index = celda.dataset.i;
            if (tableroState[index] !== "" || !juegoActivo) return;

            hacerMovimiento(index, "X");

            if (verificarFinRonda("X")) return;

            // Turno IA
            juegoActivo = false;
            mensajeTateti.textContent = `Turno de ${dinoIA} (O)...`;
            setTimeout(turnoIA, 500);
        });
    });

    function hacerMovimiento(index, marca) {
        tableroState[index] = marca;
        celdas[index].textContent = marca;
        celdas[index].classList.add("ocupada");
    }

    function turnoIA() {
        let eleccion;
        const hacerInteligente = Math.random() < probabilidadIA;

        if (hacerInteligente) {
            eleccion = obtenerMejorMovimiento();
        } else {
            // Movimiento aleatorio
            let vacias = tableroState.map((val, idx) => val === "" ? idx : null).filter(val => val !== null);
            eleccion = vacias[Math.floor(Math.random() * vacias.length)];
        }

        if (eleccion !== undefined) {
            hacerMovimiento(eleccion, "O");
        }

        if (!verificarFinRonda("O")) {
            juegoActivo = true;
            mensajeTateti.textContent = "Tu turno (X)";
        }
    }

    function verificarFinRonda(jugadorActual) {
        let hayGanador = combosGanadores.some(combo => {
            return combo.every(idx => tableroState[idx] === jugadorActual);
        });

        if (hayGanador) {
            juegoActivo = false;
            if (jugadorActual === "X") {
                puntosJugador++;
                txtPuntosJugador.textContent = puntosJugador;
                victoriasConsecutivas++;
                
                // Aumento de dificultad progresivo en Modo Fácil
                if (dificultad === "facil" && victoriasConsecutivas % 5 === 0 && probabilidadIA < 1.0) {
                    probabilidadIA = Math.min(1.0, probabilidadIA + 0.10);
                }
                mensajeTateti.textContent = `¡Ganaste la ronda! 🎉`;
            } else {
                puntosIA++;
                txtPuntosIA.textContent = puntosIA;
                victoriasConsecutivas = 0; // Reinicia racha
                mensajeTateti.textContent = `¡Ganó ${dinoIA}! 🎉`;
            }

            evaluarEstadoJuego();
            return true;
        }

        // Verificar Empate
        if (!tableroState.includes("")) {
            juegoActivo = false;
            mensajeTateti.textContent = "¡Empate! Se repite la ronda...";
            setTimeout(iniciarRonda, 1500);
            return true;
        }

        return false;
    }

    function evaluarEstadoJuego() {
        setTimeout(() => {
            if (modoJuego === "1vs1") {
                alert(puntosJugador > puntosIA ? "¡Felicidades, ganaste el 1vs1! 🏆" : `${dinoIA} ganó el 1vs1. 🎉`);
                resetearMenu();
            } else if (modoJuego === "torneo") {
                if (puntosJugador >= 2) {
                    alert("¡CAMPEÓN DEL TORNEO! 🏆🎉");
                    resetearMenu();
                } else if (puntosIA >= 2) {
                    alert(`${dinoIA} ha ganado el Torneo. 🎉`);
                    resetearMenu();
                } else {
                    iniciarRonda();
                }
            }
        }, 1000);
    }

    function obtenerMejorMovimiento() {
        // Bloquear victoria del rival o ganar si es posible
        for (let marca of ["O", "X"]) {
            for (let combo of combosGanadores) {
                let marcasCombo = combo.map(i => tableroState[i]);
                if (marcasCombo.filter(m => m === marca).length === 2 && marcasCombo.includes("")) {
                    return combo[marcasCombo.indexOf("")];
                }
            }
        }
        // Tomar el centro si está libre
        if (tableroState[4] === "") return 4;

        // Si no, cualquier celda libre
        let vacias = tableroState.map((val, idx) => val === "" ? idx : null).filter(val => val !== null);
        return vacias[Math.floor(Math.random() * vacias.length)];
    }

    function resetearMenu() {
        contenedorJuego.style.display = "none";
        pasoModo.style.display = "none";
        pasoDino.style.display = "none";
        pasoDificultad.style.display = "block";
    }

    document.getElementById("btnVolverTaTeTiJuego").addEventListener("click", () => {
        resetearMenu();
        document.getElementById("seccionTaTeTi").style.display = "none";
        document.getElementById("seccionJuegosDinoSad").style.display = "block";
    });
});