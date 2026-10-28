//==================================
// VICTORIA DEL ROMPECABEZAS
//==================================

//----------------------------------
// COMPROBAR VICTORIA
//----------------------------------

function comprobarVictoria(){

    let ultima = TAM * TAM - 1;

    // Verificar que todas las piezas estén en su lugar
    for(let i = 0; i < ultima; i++){

        if(tablero[i] != i){

            return;

        }

    }

    // Verificar que el espacio vacío sea el último
    if(tablero[ultima] == -1){

        // Mostrar la última pieza
        tablero[ultima] = ultima;

        // Redibujar el rompecabezas completo
        dibujarPuzzle();

        // Detener cronómetro
        detenerCronometro();

        // Mensaje de victoria
        setTimeout(function(){

            const monedasGanadas = window.otorgarRecompensaDinoSad();
            const mensajeRecompensa = monedasGanadas > 0
                ? "Ganaste " + monedasGanadas + " Dino monedas. 🪙"
                : "No se pudo guardar la recompensa. Intentá nuevamente.";
            alert(
                "🎉 ¡Felicitaciones!\n\n" +
                "Completaste el rompecabezas en:\n" +
                document.getElementById("cronometro").innerText +
                "\n\n" + mensajeRecompensa
            );

        },150);

    }

}