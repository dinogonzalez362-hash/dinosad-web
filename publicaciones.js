//==================================
// PUBLICACIONES
//==================================

// Botones
const btnPublicaciones = document.getElementById("btnPublicaciones");
const btnVolverPublicaciones = document.getElementById("btnVolverPublicaciones");
const btnMirarNovedades = document.getElementById("btnMirarNovedades");
const btnConocerDinoSad = document.getElementById("btnConocerDinoSad");
const btnVerAnuncios = document.getElementById("btnVerAnuncios");
const btnVolverDetallePublicaciones = document.getElementById("btnVolverDetallePublicaciones");
const btnVolverDetalleDinoSad = document.getElementById("btnVolverDetalleDinoSad");
const btnVerTikTokPublicaciones = document.getElementById("btnVerTikTokPublicaciones");
const btnVerInstagramPublicaciones = document.getElementById("btnVerInstagramPublicaciones");
const btnVerYoutubePublicaciones = document.getElementById("btnVerYoutubePublicaciones");

// Secciones
const inicioPublicaciones = document.getElementById("inicio");
const seccionPublicaciones = document.getElementById("seccionPublicaciones");
const tarjetasPublicaciones = document.getElementById("tarjetasPublicaciones");
const detalleNovedades = document.getElementById("detalleNovedades");
const detalleDinoSad = document.getElementById("detalleDinoSad");

function mostrarTarjetasPublicaciones() {
    tarjetasPublicaciones.style.display = "flex";
    detalleNovedades.style.display = "none";
    detalleDinoSad.style.display = "none";
}

function abrirDetalle(detalle) {
    tarjetasPublicaciones.style.display = "none";
    detalleNovedades.style.display = "none";
    detalleDinoSad.style.display = "none";
    detalle.style.display = "block";
}

//----------------------------------
// ABRIR PUBLICACIONES
//----------------------------------

if(btnPublicaciones){

    btnPublicaciones.onclick = function(){

        inicioPublicaciones.style.display = "none";

        seccionPublicaciones.style.display = "block";

    };

}

//----------------------------------
// VOLVER
//----------------------------------

if(btnVolverPublicaciones){

    btnVolverPublicaciones.onclick = function(){

        mostrarTarjetasPublicaciones();
        seccionPublicaciones.style.display = "none";

        inicioPublicaciones.style.display = "block";

    };

}

if (btnMirarNovedades) {
    btnMirarNovedades.onclick = function () {
        abrirDetalle(detalleNovedades);
    };
}

if (btnConocerDinoSad) {
    btnConocerDinoSad.onclick = function () {
        abrirDetalle(detalleDinoSad);
    };
}

if (btnVerAnuncios) {
    btnVerAnuncios.onclick = function () {
        alert("Próximamente");
    };
}

if (btnVolverDetallePublicaciones) {
    btnVolverDetallePublicaciones.onclick = mostrarTarjetasPublicaciones;
}

if (btnVolverDetalleDinoSad) {
    btnVolverDetalleDinoSad.onclick = mostrarTarjetasPublicaciones;
}

if (btnVerTikTokPublicaciones) {
    btnVerTikTokPublicaciones.onclick = function () {
        window.open("https://www.tiktok.com/@dinosad.93", "_blank");
    };
}

if (btnVerInstagramPublicaciones) {
    btnVerInstagramPublicaciones.onclick = function () {
        window.open("https://www.instagram.com/dinosad.93/", "_blank");
    };
}

if (btnVerYoutubePublicaciones) {
    btnVerYoutubePublicaciones.onclick = function () {
        window.open(enlaceYoutubeDinoSad, "_blank");
    };
}