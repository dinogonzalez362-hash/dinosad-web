//==================================
// CONTENIDO
//==================================

// Botones
const btnContenido = document.getElementById("btnContenido");
const btnVolverContenido = document.getElementById("btnVolverContenido");

// Secciones
const inicioContenido = document.getElementById("inicio");
const seccionContenido = document.getElementById("seccionContenido");
const btnVerShorts = document.getElementById("btnVerShorts");
const btnVolverShorts = document.getElementById("btnVolverShorts");
const seccionShorts = document.getElementById("seccionShorts");
const btnVerVideos = document.getElementById("btnVerVideos");
const btnVolverVideos = document.getElementById("btnVolverVideos");
const seccionVideos = document.getElementById("seccionVideos");
const tarjetaVerMasTikTok = document.getElementById("tarjetaVerMasTikTok");
const btnVerMasTikTok = document.getElementById("btnVerMasTikTok");
const tarjetaVerMasVideos = document.getElementById("tarjetaVerMasVideos");
const btnVerMasVideos = document.getElementById("btnVerMasVideos");

//----------------------------------
// ABRIR CONTENIDO
//----------------------------------

if(btnContenido){

    btnContenido.onclick = function(){

        inicioContenido.style.display = "none";

        seccionContenido.style.display = "block";

    };

}

//----------------------------------
// VOLVER
//----------------------------------

if(btnVolverContenido){

    btnVolverContenido.onclick = function(){

        seccionContenido.style.display = "none";

        inicioContenido.style.display = "block";

    };

}

if (btnVerShorts && seccionContenido && seccionShorts) {
    btnVerShorts.onclick = function () {
        seccionContenido.style.display = "none";
        seccionShorts.style.display = "block";
        if (window.renderGaleriaShorts) {
            window.renderGaleriaShorts();
        }
    };
}

if (btnVolverShorts && seccionContenido && seccionShorts) {
    btnVolverShorts.onclick = function () {
        seccionShorts.style.display = "none";
        seccionContenido.style.display = "block";
    };
}

if (btnVerVideos && seccionContenido && seccionVideos) {
    btnVerVideos.onclick = function () {
        seccionContenido.style.display = "none";
        seccionVideos.style.display = "block";
        if (window.renderGaleriaVideos) {
            window.renderGaleriaVideos();
        }
    };
}

if (btnVolverVideos && seccionContenido && seccionVideos) {
    btnVolverVideos.onclick = function () {
        seccionVideos.style.display = "none";
        seccionContenido.style.display = "block";
    };
}

function abrirTikTokDinoSad() {
    window.open("https://www.tiktok.com/@dinosad.93", "_blank");
}

if (tarjetaVerMasTikTok) {
    tarjetaVerMasTikTok.onclick = abrirTikTokDinoSad;
    tarjetaVerMasTikTok.onkeydown = function (evento) {
        if (evento.key === "Enter" || evento.key === " ") {
            evento.preventDefault();
            abrirTikTokDinoSad();
        }
    };
}

if (btnVerMasTikTok) {
    btnVerMasTikTok.onclick = function (evento) {
        evento.stopPropagation();
        abrirTikTokDinoSad();
    };
}

if (tarjetaVerMasVideos) {
    tarjetaVerMasVideos.onclick = abrirTikTokDinoSad;
    tarjetaVerMasVideos.onkeydown = function (evento) {
        if (evento.key === "Enter" || evento.key === " ") {
            evento.preventDefault();
            abrirTikTokDinoSad();
        }
    };
}

if (btnVerMasVideos) {
    btnVerMasVideos.onclick = function (evento) {
        evento.stopPropagation();
        abrirTikTokDinoSad();
    };
}