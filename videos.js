(function () {

    const galeriaVideos = document.getElementById("galeriaVideos");

    const videos = [
        "capitulo2.mp4"
    ];

    function nombreVideo(url) {
        return url
            .replace(/\.[^/.]+$/, "")
            .replace(/[-_]/g, " ")
            .replace(/\b\w/g, function (letra) { return letra.toUpperCase(); });
    }

    window.renderGaleriaVideos = function () {
        if (!galeriaVideos) {
            return;
        }

        galeriaVideos.querySelectorAll(".video-card").forEach(function (tarjeta) {
            tarjeta.remove();
        });

        videos.slice(0, 5).forEach(function (archivo, indice) {
            const tarjeta = document.createElement("div");
            tarjeta.className = "card video-card";

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
            galeriaVideos.appendChild(tarjeta);
        });

        const tarjetaVerMas = document.getElementById("tarjetaVerMasVideos");
        if (tarjetaVerMas) {
            galeriaVideos.appendChild(tarjetaVerMas);
        }
    };

})();