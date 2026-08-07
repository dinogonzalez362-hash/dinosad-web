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

            alert(
                "🎉 ¡Felicitaciones!\n\n" +
                "Completaste el rompecabezas en:\n" +
                document.getElementById("cronometro").innerText
            );

        },150);

    }

}