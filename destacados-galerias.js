(function () {

    const catalogos = [
        {
            archivos: ["dec1.mp4", "dec2.mp4"],
            galeria: "galeriaDestacadosDec",
            tarjeta: "tarjetaVerMasDestacadosDec"
        },
        {
            archivos: ["mas like1.mp4", "mas  like2.mp4"],
            galeria: "galeriaDestacadosLikes",
            tarjeta: "tarjetaVerMasDestacadosLikes"
        }
    ];

    function nombreVideo(archivo) {
        return archivo
            .replace(/\.[^/.]+$/, "")
            .replace(/[-_]/g, " ")
            .replace(/\s+/g, " ")
            .replace(/\b\w/g, function (letra) { return letra.toUpperCase(); });
    }

    function abrirTikTok() {
        window.open("https://www.tiktok.com/@dinosad.93", "_blank");
    }

    function prepararTarjetaTikTok(idTarjeta, idBoton) {
        const tarjeta = document.getElementById(idTarjeta);
        const boton = document.getElementById(idBoton);

        if (tarjeta) {
            tarjeta.onclick = abrirTikTok;
            tarjeta.onkeydown = function (evento) {
                if (evento.key === "Enter" || evento.key === " ") {
                    evento.preventDefault();
                    abrirTikTok();
                }
            };
        }

        if (boton) {
            boton.onclick = function (evento) {
                evento.stopPropagation();
                abrirTikTok();
            };
        }
    }

    function renderizarCatalogo(catalogo) {
        const galeria = document.getElementById(catalogo.galeria);
        if (!galeria) {
            return;
        }

        galeria.querySelectorAll(".destacado-card").forEach(function (tarjeta) {
            tarjeta.remove();
        });

        catalogo.archivos.forEach(function (archivo, indice) {
            const tarjeta = document.createElement("div");
            tarjeta.className = "card destacado-card";

            const video = document.createElement("video");
            video.controls = true;
            video.preload = "metadata";
            video.playsInline = true;
            video.src = archivo;
            video.title = nombreVideo(archivo);

            const titulo = document.createElement("h3");
            titulo.textContent = `${indice + 1}. ${nombreVideo(archivo)}`;

            tarjeta.appendChild(video);
            tarjeta.appendChild(titulo);
            galeria.appendChild(tarjeta);
        });

        const tarjetaVerMas = document.getElementById(catalogo.tarjeta);
        if (tarjetaVerMas) {
            galeria.appendChild(tarjetaVerMas);
        }
    }

    window.renderGaleriasDestacados = function () {
        catalogos.forEach(renderizarCatalogo);
    };

    const btnVerDec = document.getElementById("btnVerDestacadosDec");
    const btnVerLikes = document.getElementById("btnVerDestacadosLikes");
    const btnVolverDec = document.getElementById("btnVolverDestacadosDec");
    const btnVolverLikes = document.getElementById("btnVolverDestacadosLikes");
    const seccionPrincipal = document.getElementById("seccionDestacados");
    const seccionDec = document.getElementById("seccionDestacadosDec");
    const seccionLikes = document.getElementById("seccionDestacadosLikes");

    if (btnVerDec) {
        btnVerDec.onclick = function () {
            seccionPrincipal.style.display = "none";
            seccionDec.style.display = "block";
            renderizarCatalogo(catalogos[0]);
        };
    }

    if (btnVerLikes) {
        btnVerLikes.onclick = function () {
            seccionPrincipal.style.display = "none";
            seccionLikes.style.display = "block";
            renderizarCatalogo(catalogos[1]);
        };
    }

    if (btnVolverDec) {
        btnVolverDec.onclick = function () {
            seccionDec.style.display = "none";
            seccionPrincipal.style.display = "block";
        };
    }

    if (btnVolverLikes) {
        btnVolverLikes.onclick = function () {
            seccionLikes.style.display = "none";
            seccionPrincipal.style.display = "block";
        };
    }

    prepararTarjetaTikTok("tarjetaVerMasDestacadosDec", "btnVerMasDestacadosDec");
    prepararTarjetaTikTok("tarjetaVerMasDestacadosLikes", "btnVerMasDestacadosLikes");

})();