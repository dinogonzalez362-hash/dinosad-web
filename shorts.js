(function () {

    const galeriaShorts = document.getElementById("galeriaShorts");

    const shorts = [
        "shot1.mp4",
        "shot2.mp4",
        "shot3.mp4",
        "short4.mp4"
    ];

    function nombreShort(url) {
        return url
            .replace(/\.[^/.]+$/, "")
            .replace(/[-_]/g, " ")
            .replace(/\b\w/g, function (letra) { return letra.toUpperCase(); });
    }

    window.renderGaleriaShorts = function () {
        if (!galeriaShorts) {
            return;
        }

        galeriaShorts.querySelectorAll(".short-card").forEach(function (tarjeta) {
            tarjeta.remove();
        });

        shorts.forEach(function (archivo, indice) {
            const tarjeta = document.createElement("div");
            tarjeta.className = "card short-card";

            const video = document.createElement("video");
            video.controls = true;
            video.preload = "metadata";
            video.playsInline = true;
            video.src = archivo;
            video.title = nombreShort(archivo);

            const titulo = document.createElement("h3");
            titulo.textContent = `${indice + 1}. ${nombreShort(archivo)}`;

            tarjeta.appendChild(video);
            tarjeta.appendChild(titulo);
            galeriaShorts.appendChild(tarjeta);
        });

        const tarjetaVerMas = document.getElementById("tarjetaVerMasTikTok");
        if (tarjetaVerMas) {
            galeriaShorts.appendChild(tarjetaVerMas);
        }
    };

})();