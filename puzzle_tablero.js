//==================================
// TABLERO DEL ROMPECABEZAS
//==================================

//----------------------------------
// INICIAR TABLERO
//----------------------------------

function iniciarPuzzle(){

    tablero = [];

    let cantidad = TAM * TAM;

    for(let i = 0; i < cantidad - 1; i++){

        tablero.push(i);

    }

    tablero.push(-1);

    indiceVacio = cantidad - 1;

    seleccionarImagenPuzzle();

    mezclarPuzzle();

    dibujarPuzzle();

    iniciarCronometro();

}

//----------------------------------
// MEZCLAR
//----------------------------------

function mezclarPuzzle(){

    for(let i = 0; i < movimientosMezcla; i++){

        let vecinos = obtenerVecinos(indiceVacio);

        let aleatorio = Math.floor(Math.random()*vecinos.length);

        moverPieza(vecinos[aleatorio]);

    }

}

//----------------------------------
// VECINOS
//----------------------------------

function obtenerVecinos(posicion){

    let vecinos=[];

    let fila=Math.floor(posicion/TAM);
    let columna=posicion%TAM;

    if(fila>0) vecinos.push(posicion-TAM);

    if(fila<TAM-1) vecinos.push(posicion+TAM);

    if(columna>0) vecinos.push(posicion-1);

    if(columna<TAM-1) vecinos.push(posicion+1);

    return vecinos;

}

//----------------------------------
// MOVER PIEZA
//----------------------------------

function moverPieza(posicion){

    let temporal = tablero[posicion];

    tablero[posicion] = tablero[indiceVacio];

    tablero[indiceVacio] = temporal;

    indiceVacio = posicion;

    requestAnimationFrame(function(){

        dibujarPuzzle();

    });

}

//----------------------------------
// DIBUJAR
//----------------------------------

function dibujarPuzzle(){

    puzzle.innerHTML="";

    puzzle.style.gridTemplateColumns=`repeat(${TAM},1fr)`;
    puzzle.style.gridTemplateRows=`repeat(${TAM},1fr)`;

    let anchoTablero=puzzle.clientWidth;
    let altoTablero=puzzle.clientHeight;

    let anchoPieza=anchoTablero/TAM;
    let altoPieza=altoTablero/TAM;

    for(let i=0;i<tablero.length;i++){

        let valor=tablero[i];

        let pieza=document.createElement("div");

        pieza.className="pieza";

        pieza.style.width=anchoPieza+"px";
        pieza.style.height=altoPieza+"px";

        if(valor==-1){

            pieza.style.background="#111";

        }else{

            let columna=valor%TAM;
            let fila=Math.floor(valor/TAM);

            pieza.style.backgroundImage="url('"+imagenActual+"')";
            pieza.style.backgroundRepeat="no-repeat";

            pieza.style.backgroundSize=
                anchoTablero+"px "+altoTablero+"px";

            pieza.style.backgroundPosition=
                (-columna*anchoPieza)+"px "+
                (-fila*altoPieza)+"px";

            pieza.onclick=function(){

                tocarPieza(i);

            };

        }

        puzzle.appendChild(pieza);

    }

}

//----------------------------------
// TOCAR
//----------------------------------

function tocarPieza(posicion){

    let vecinos=obtenerVecinos(indiceVacio);

    if(vecinos.indexOf(posicion)==-1){

        return;

    }

    moverPieza(posicion);

    setTimeout(function(){

        comprobarVictoria();

    },300);

}