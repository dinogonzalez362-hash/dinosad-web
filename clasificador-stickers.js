(function () {

    const input = document.getElementById("inputStickersNuevos");
    const estado = document.getElementById("estadoClasificadorStickers");
    const resultados = document.getElementById("resultadoClasificadorStickers");
    const almacenamiento = "dinosad-stickers-nuevos";

    const colecciones = {
        1: { nombre: "Ale", contenedor: "paginaStickersAle1" },
        2: { nombre: "Leo", contenedor: "paginaStickersLeo1" },
        3: { nombre: "Nico", contenedor: "paginaStickersNico1" },
        4: { nombre: "Theys Dinos", contenedor: "paginaStickersTheys1" }
    };

    if (!input || !estado || !resultados) {
        return;
    }

    function leerStickersGuardados() {
        try {
            return JSON.parse(localStorage.getItem(almacenamiento)) || [];
        } catch (error) {
            return [];
        }
    }

    function guardarStickers(stickers) {
        localStorage.setItem(almacenamiento, JSON.stringify(stickers));
    }

    function detectarNumero(nombreArchivo) {
        const coincidencia = nombreArchivo.match(/(?:^|[^0-9])([1-4])(?:[^0-9]|$)/);
        return coincidencia ? Number(coincidencia[1]) : null;
    }

    function crearTarjeta(sticker) {
        const tarjeta = document.createElement("div");
        tarjeta.className = "card stickerCard stickerNuevo";
        tarjeta.dataset.stickerNuevo = sticker.id;
        tarjeta.innerHTML = `
            <div class="stickerImagen">
                <img src="${sticker.imagen}" alt="Sticker nuevo de ${sticker.nombre}" class="sticker">
            </div>
            <h3>Sticker nuevo de ${sticker.nombre}</h3>
            <button class="verde btnDescargarStickerNuevo" type="button">⬇️ Descargar</button>
        `;
        return tarjeta;
    }

    function mostrarSticker(sticker) {
        const coleccion = colecciones[sticker.numero];
        const contenedor = document.getElementById(coleccion.contenedor);
        if (!contenedor || contenedor.querySelector(`[data-sticker-nuevo="${sticker.id}"]`)) {
            return;
        }
        contenedor.appendChild(crearTarjeta(sticker));
    }

    function mostrarGuardados() {
        leerStickersGuardados().forEach(mostrarSticker);
    }

    function mostrarResultado(sticker, mensaje) {
        const tarjeta = document.createElement("div");
        tarjeta.className = "resultadoSticker";
        tarjeta.innerHTML = `<img src="${sticker.imagen}" alt=""><span>${mensaje}</span>`;
        resultados.appendChild(tarjeta);
    }

    async function clasificarArchivo(archivo) {
        estado.textContent = `Revisando el nombre de ${archivo.name}...`;
        const numero = detectarNumero(archivo.name);
        const imagen = await convertirADataUrl(archivo);

        if (!numero) {
            mostrarResultado({ imagen: imagen }, `${archivo.name}: el nombre debe incluir un número del 1 al 4.`);
            return;
        }

        const coleccion = colecciones[numero];
        const sticker = {
            id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
            imagen: imagen,
            numero: numero,
            nombre: coleccion.nombre
        };
        const guardados = leerStickersGuardados();
        guardados.push(sticker);
        guardarStickers(guardados);
        mostrarSticker(sticker);
        mostrarResultado(sticker, `${archivo.name}: enviado a ${coleccion.nombre}.`);
    }

    function convertirADataUrl(archivo) {
        return new Promise(function (resolver, rechazar) {
            const lector = new FileReader();
            lector.onload = function () { resolver(lector.result); };
            lector.onerror = rechazar;
            lector.readAsDataURL(archivo);
        });
    }

    input.addEventListener("change", async function () {
        const archivos = Array.from(input.files || []);
        if (!archivos.length) {
            return;
        }

        input.disabled = true;
        resultados.innerHTML = "";
        for (const archivo of archivos) {
            try {
                await clasificarArchivo(archivo);
            } catch (error) {
                mostrarResultado({ imagen: URL.createObjectURL(archivo) }, `${archivo.name}: no se pudo leer.`);
            }
        }
        input.disabled = false;
        estado.textContent = "Proceso terminado. Los stickers nuevos quedaron guardados.";
        input.value = "";
    });

    document.addEventListener("click", function (evento) {
        const boton = evento.target.closest(".btnDescargarStickerNuevo");
        if (!boton) {
            return;
        }
        const tarjeta = boton.closest("[data-sticker-nuevo]");
        const sticker = leerStickersGuardados().find(function (item) {
            return item.id === tarjeta.dataset.stickerNuevo;
        });
        if (!sticker) {
            return;
        }
        const enlace = document.createElement("a");
        enlace.href = sticker.imagen;
        enlace.download = `sticker-${sticker.nombre.toLowerCase().replace(/ /g, "-")}.png`;
        enlace.click();
    });

    mostrarGuardados();

})();