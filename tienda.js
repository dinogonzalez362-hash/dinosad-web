const btnEntrarTiendaDinoSad = document.getElementById("btnEntrarTiendaDinoSad");
const btnVolverCatalogoTienda = document.getElementById("btnVolverCatalogoTienda");
const btnVolverGaleriaTienda = document.getElementById("btnVolverGaleriaTienda");
const seccionCatalogoDinoSad = document.getElementById("seccionCatalogoTienda");
const seccionGaleriaTienda = document.getElementById("seccionGaleriaTienda");
const seccionInicioTiendaDinoSad = document.getElementById("seccionTiendaDinoSad");
const tituloGaleriaTienda = document.getElementById("tituloGaleriaTienda");
const descripcionGaleriaTienda = document.getElementById("descripcionGaleriaTienda");
const galeriaProductosTienda = document.getElementById("galeriaProductosTienda");
const coleccionesTienda = window.catalogoTienda;
const resumenColeccionTienda = document.getElementById("resumenColeccionTienda");
const filtrosTienda = document.querySelectorAll("[data-filtro-tienda]");
const filtrosTiendaContenedor = document.getElementById("filtrosTienda");
const saldoDinoMonedas = document.getElementById("saldoDinoMonedas");
const saldoDinoMonedasBoton = document.getElementById("saldoDinoMonedasBoton");
const ticketsTienda = document.getElementById("ticketsTienda");
const claveEstadoTienda = "dinosadTiendaEstado";
const claveObtenidosTiendaAnterior = "dinosadTiendaObtenidos";
const claveSaldoDinoMonedasAnterior = "dinosadDinoMonedas";
let filtroTiendaActual = "todos";

function leerEstadoTienda() {
    try {
        const estadoGuardado = localStorage.getItem(claveEstadoTienda);
        if (estadoGuardado) {
            const estado = JSON.parse(estadoGuardado);
            if (Array.isArray(estado.obtenidos) && Number.isSafeInteger(estado.monedas) && estado.monedas >= 0) {
                return {
                    monedas: estado.monedas,
                    obtenidos: new Set(estado.obtenidos),
                    recompensas: new Set(Array.isArray(estado.recompensas) ? estado.recompensas : []),
                    tickets: Number.isSafeInteger(estado.tickets) && estado.tickets >= 0 ? estado.tickets : 0,
                    ruleta: estado.ruleta && Number.isSafeInteger(estado.ruleta.inicioPeriodo)
                        && Number.isSafeInteger(estado.ruleta.usos) && estado.ruleta.usos >= 0
                        ? {
                            inicioPeriodo: estado.ruleta.inicioPeriodo,
                            usos: estado.ruleta.usos,
                            giroGratisUsado: estado.ruleta.giroGratisUsado === true
                        }
                        : { inicioPeriodo: 0, usos: 0, giroGratisUsado: false }
                };
            }
            throw new TypeError("El estado guardado de la tienda no tiene un formato válido.");
        }

        const obtenidosAnteriores = JSON.parse(localStorage.getItem(claveObtenidosTiendaAnterior) || "[]");
        const monedasAnteriores = Number.parseInt(localStorage.getItem(claveSaldoDinoMonedasAnterior) || "0", 10);
        return {
            monedas: Number.isSafeInteger(monedasAnteriores) && monedasAnteriores >= 0 ? monedasAnteriores : 0,
            obtenidos: new Set(Array.isArray(obtenidosAnteriores) ? obtenidosAnteriores : []),
            recompensas: new Set(),
            tickets: 0,
            ruleta: { inicioPeriodo: 0, usos: 0, giroGratisUsado: false }
        };
    } catch (error) {
        console.error("No se pudo leer el inventario de DinoSad.", error);
        return {
            monedas: 0,
            obtenidos: new Set(),
            recompensas: new Set(),
            tickets: 0,
            ruleta: { inicioPeriodo: 0, usos: 0, giroGratisUsado: false }
        };
    }
}

const estadoTienda = leerEstadoTienda();

window.obtenerProductosObtenidosTienda = function (categoria) {
    const coleccion = coleccionesTienda[categoria];
    if (!coleccion || !Array.isArray(coleccion.productos)) {
        return [];
    }

    return coleccion.productos.filter(function (producto) {
        return estadoTienda.obtenidos.has(categoria + ":" + producto.imagen);
    });
};

function persistirEstadoTienda(
    monedas,
    obtenidos,
    recompensas,
    tickets = estadoTienda.tickets,
    ruleta = estadoTienda.ruleta
) {
    localStorage.setItem(claveEstadoTienda, JSON.stringify({
        monedas: monedas,
        obtenidos: Array.from(obtenidos),
        recompensas: Array.from(recompensas),
        tickets: tickets,
        ruleta: ruleta
    }));
}

window.otorgarRecompensaDinoSad = function (claveUnica) {
    if (typeof claveUnica === "string" && estadoTienda.recompensas.has(claveUnica)) {
        return 0;
    }

    const premios = [10, 30, 50, 100];
    const monedasGanadas = premios[Math.floor(Math.random() * premios.length)];
    const saldoNuevo = estadoTienda.monedas + monedasGanadas;
    const recompensasNuevas = new Set(estadoTienda.recompensas);

    if (!Number.isSafeInteger(saldoNuevo)) {
        throw new RangeError("El saldo de Dino monedas superaría el límite seguro.");
    }
    if (typeof claveUnica === "string") {
        recompensasNuevas.add(claveUnica);
    }

    try {
        persistirEstadoTienda(saldoNuevo, estadoTienda.obtenidos, recompensasNuevas);
    } catch (error) {
        console.error("No se pudo guardar la recompensa de DinoSad.", error);
        return null;
    }

    estadoTienda.monedas = saldoNuevo;
    estadoTienda.recompensas = recompensasNuevas;
    actualizarSaldoDinoMonedas();
    return monedasGanadas;
};

window.obtenerEstadoRuletaDinoSad = function () {
    const periodoVencido = !estadoTienda.ruleta.inicioPeriodo
        || Date.now() - estadoTienda.ruleta.inicioPeriodo >= 24 * 60 * 60 * 1000;
    const ruletaActual = periodoVencido
        ? { usos: 0, giroGratisUsado: false, inicioPeriodo: 0 }
        : estadoTienda.ruleta;

    return {
        monedas: estadoTienda.monedas,
        tickets: estadoTienda.tickets,
        usos: ruletaActual.usos,
        giroGratisUsado: ruletaActual.giroGratisUsado,
        inicioPeriodo: ruletaActual.inicioPeriodo
    };
};

window.iniciarGiroRuletaDinoSad = function (cantidad) {
    if (cantidad !== 1 && cantidad !== 3) {
        return { ok: false, motivo: "cantidad" };
    }

    const ahora = Date.now();
    const periodoVencido = !estadoTienda.ruleta.inicioPeriodo
        || ahora - estadoTienda.ruleta.inicioPeriodo >= 24 * 60 * 60 * 1000;
    const ruletaActual = periodoVencido
        ? { inicioPeriodo: ahora, usos: 0, giroGratisUsado: false }
        : estadoTienda.ruleta;

    if (ruletaActual.usos >= 3) {
        return { ok: false, motivo: "limite", usos: ruletaActual.usos };
    }

    const esGratis = cantidad === 1 && !ruletaActual.giroGratisUsado;
    const costo = esGratis ? 0 : cantidad === 1 ? 50 : 100;
    if (estadoTienda.monedas < costo) {
        return { ok: false, motivo: "saldo", costo: costo, monedas: estadoTienda.monedas };
    }

    const ruletaNueva = {
        inicioPeriodo: ruletaActual.inicioPeriodo,
        usos: ruletaActual.usos + 1,
        giroGratisUsado: ruletaActual.giroGratisUsado || esGratis
    };
    const saldoNuevo = estadoTienda.monedas - costo;

    try {
        persistirEstadoTienda(saldoNuevo, estadoTienda.obtenidos, estadoTienda.recompensas, estadoTienda.tickets, ruletaNueva);
    } catch (error) {
        console.error("No se pudo guardar el uso de la ruleta DinoSad.", error);
        return { ok: false, motivo: "guardado" };
    }

    estadoTienda.monedas = saldoNuevo;
    estadoTienda.ruleta = ruletaNueva;
    actualizarSaldoDinoMonedas();
    return { ok: true, costo: costo, usos: ruletaNueva.usos, gratis: esGratis };
};

window.aplicarPremioRuletaDinoSad = function (premio) {
    const premiosMonedas = [10, 30, 50, 100];
    let monedasNuevas = estadoTienda.monedas;
    let ticketsNuevos = estadoTienda.tickets;
    const obtenidosNuevos = new Set(estadoTienda.obtenidos);
    let descripcion;

    if (premio.tipo === "monedas" && premiosMonedas.includes(premio.cantidad)) {
        monedasNuevas += premio.cantidad;
        descripcion = premio.cantidad + " Dino monedas";
    } else if (premio.tipo === "ticket") {
        ticketsNuevos++;
        descripcion = "1 ticket de canje";
    } else if (premio.tipo === "fondo" || premio.tipo === "skin") {
        const categoria = premio.tipo === "fondo" ? "fondos" : "skins";
        const coleccion = window.catalogoTienda && window.catalogoTienda[categoria];
        const producto = coleccion && coleccion.productos.find(function (elemento) {
            return elemento.imagen === premio.imagen;
        });

        if (!producto) {
            return { ok: false };
        }

        const identificador = categoria + ":" + producto.imagen;
        if (obtenidosNuevos.has(identificador)) {
            ticketsNuevos++;
            descripcion = producto.nombre + " ya estaba obtenido; recibiste 1 ticket de canje";
        } else {
            obtenidosNuevos.add(identificador);
            descripcion = producto.nombre + (premio.tipo === "fondo" ? " agregado a tus fondos" : " desbloqueada");
        }
    } else {
        return { ok: false };
    }

    if (!Number.isSafeInteger(monedasNuevas) || !Number.isSafeInteger(ticketsNuevos)) {
        return { ok: false };
    }

    try {
        persistirEstadoTienda(monedasNuevas, obtenidosNuevos, estadoTienda.recompensas, ticketsNuevos, estadoTienda.ruleta);
    } catch (error) {
        console.error("No se pudo guardar el premio de la ruleta DinoSad.", error);
        return { ok: false };
    }

    estadoTienda.monedas = monedasNuevas;
    estadoTienda.tickets = ticketsNuevos;
    estadoTienda.obtenidos = obtenidosNuevos;
    actualizarSaldoDinoMonedas();
    return { ok: true, descripcion: descripcion };
};

function actualizarSaldoDinoMonedas() {
    if (saldoDinoMonedas) {
        saldoDinoMonedas.textContent = String(estadoTienda.monedas);
    }
    if (saldoDinoMonedasBoton) {
        saldoDinoMonedasBoton.textContent = String(estadoTienda.monedas);
    }
    if (ticketsTienda) {
        ticketsTienda.textContent = String(estadoTienda.tickets);
    }
}

function actualizarResumenYFiltroTienda() {
    const tarjetas = Array.from(galeriaProductosTienda.children);
    const obtenidos = tarjetas.filter(function (tarjeta) {
        return tarjeta.dataset.obtenido === "true";
    }).length;

    tarjetas.forEach(function (tarjeta) {
        const mostrar = filtroTiendaActual === "todos"
            || (filtroTiendaActual === "obtenidos" && tarjeta.dataset.obtenido === "true")
            || (filtroTiendaActual === "pendientes" && tarjeta.dataset.obtenido !== "true");
        tarjeta.hidden = !mostrar;
    });

    filtrosTienda.forEach(function (boton) {
        const activo = boton.dataset.filtroTienda === filtroTiendaActual;
        boton.setAttribute("aria-pressed", String(activo));
        boton.classList.toggle("filtro-tienda-activo", activo);
    });

    if (resumenColeccionTienda) {
        resumenColeccionTienda.textContent = obtenidos + " obtenidos · "
            + (tarjetas.length - obtenidos) + " no obtenidos";
    }
}

function mostrarErrorCompra(contenedor, mensaje) {
    const aviso = document.createElement("p");
    aviso.className = "mensaje-compra-tienda";
    aviso.setAttribute("role", "status");
    aviso.textContent = mensaje;
    contenedor.replaceChildren(aviso);
}

function mostrarSaldoInsuficiente(contenedor, precio) {
    const aviso = document.createElement("p");
    aviso.className = "mensaje-compra-tienda";
    aviso.setAttribute("role", "status");
    aviso.textContent = "Te faltan " + (precio - estadoTienda.monedas)
        + " Dino monedas. Tu saldo es " + estadoTienda.monedas + ".";
    contenedor.replaceChildren(aviso);
}

function confirmarCompra(contenedor, identificador, producto, precioBase, porcentajeDescuento) {
    if (![0, 10, 20, 50].includes(porcentajeDescuento)) {
        mostrarErrorCompra(contenedor, "El descuento seleccionado no es válido. No se realizó la compra.");
        return;
    }

    const descuento = porcentajeDescuento > 0 ? Math.round(precioBase * porcentajeDescuento / 100) : 0;
    const precio = precioBase - descuento;
    const ticketsPosteriores = estadoTienda.tickets - (porcentajeDescuento > 0 ? 1 : 0);
    const saldoPosterior = estadoTienda.monedas - precio;
    const obtenidosPosteriores = new Set(estadoTienda.obtenidos);
    obtenidosPosteriores.add(identificador);

    if (ticketsPosteriores < 0) {
        mostrarErrorCompra(contenedor, "No tenés tickets disponibles para aplicar ese descuento.");
        return;
    }
    if (estadoTienda.monedas < precio) {
        mostrarSaldoInsuficiente(contenedor, precio);
        return;
    }

    try {
        persistirEstadoTienda(
            saldoPosterior,
            obtenidosPosteriores,
            estadoTienda.recompensas,
            ticketsPosteriores,
            estadoTienda.ruleta
        );
    } catch (error) {
        console.error("No se pudo guardar la compra de " + producto + ".", error);
        mostrarErrorCompra(contenedor, "No se pudo guardar la compra. No se descontaron monedas ni tickets.");
        return;
    }

    estadoTienda.monedas = saldoPosterior;
    estadoTienda.tickets = ticketsPosteriores;
    estadoTienda.obtenidos.add(identificador);
    const tarjeta = contenedor.closest(".item-tienda-card");
    if (tarjeta) {
        tarjeta.dataset.obtenido = "true";
    }
    actualizarSaldoDinoMonedas();
    contenedor.replaceChildren();
    contenedor.classList.add("producto-obtenido");
    contenedor.textContent = "✓ Obtenido";
    actualizarResumenYFiltroTienda();
}

function agregarOpcionCompra(tarjeta, identificador, nombreProducto, precio) {
    const acciones = document.createElement("div");
    acciones.className = "acciones-compra-tienda";

    if (estadoTienda.obtenidos.has(identificador)) {
        tarjeta.dataset.obtenido = "true";
        acciones.className += " producto-obtenido";
        acciones.textContent = "✓ Obtenido";
        tarjeta.appendChild(acciones);
        return;
    }

    tarjeta.dataset.obtenido = "false";
    const estadoNoObtenido = document.createElement("span");
    estadoNoObtenido.className = "estado-no-obtenido-tienda";
    estadoNoObtenido.textContent = "○ No obtenido";

    const botonComprar = document.createElement("button");
    botonComprar.type = "button";
    botonComprar.className = "boton-comprar-tienda";
    botonComprar.textContent = "Comprar por " + precio + " 🪙";
    botonComprar.setAttribute("aria-label", "Comprar " + nombreProducto + " por " + precio + " Dino monedas");

    botonComprar.addEventListener("click", function () {
        const confirmacion = document.createElement("div");
        confirmacion.className = "confirmacion-compra-tienda";

        const pregunta = document.createElement("p");
        const avisoSaldo = document.createElement("p");
        avisoSaldo.className = "mensaje-compra-tienda";
        avisoSaldo.setAttribute("role", "status");
        const selectorDescuento = document.createElement("select");
        selectorDescuento.className = "descuento-ticket-tienda";
        selectorDescuento.setAttribute("aria-label", "Descuento con ticket para " + nombreProducto);

        const opcionSinDescuento = document.createElement("option");
        opcionSinDescuento.value = "0";
        opcionSinDescuento.textContent = "Sin descuento";
        selectorDescuento.appendChild(opcionSinDescuento);

        if (estadoTienda.tickets > 0) {
            [10, 20, 50].forEach(function (porcentaje) {
                const opcion = document.createElement("option");
                opcion.value = String(porcentaje);
                opcion.textContent = porcentaje + "% de descuento · 1 ticket";
                selectorDescuento.appendChild(opcion);
            });
        }

        const actualizarPregunta = function () {
            const porcentaje = Number(selectorDescuento.value);
            const precioFinal = precio - Math.round(precio * porcentaje / 100);
            pregunta.textContent = porcentaje > 0
                ? "¿Comprar " + nombreProducto + " por " + precioFinal + " Dino monedas? (ahorrás "
                    + Math.round(precio * porcentaje / 100) + " monedas)"
                : "¿Comprar " + nombreProducto + " por " + precio + " Dino monedas?";
            aceptar.disabled = estadoTienda.monedas < precioFinal;
            if (aceptar.disabled) {
                avisoSaldo.textContent = "Te faltan " + (precioFinal - estadoTienda.monedas)
                    + " Dino monedas. Tu saldo es " + estadoTienda.monedas + ".";
                if (!confirmacion.contains(avisoSaldo)) {
                    confirmacion.append(avisoSaldo);
                }
            } else {
                avisoSaldo.remove();
            }
        };

        const aceptar = document.createElement("button");
        aceptar.type = "button";
        aceptar.className = "verde";
        aceptar.textContent = "Confirmar compra";
        aceptar.addEventListener("click", function () {
            confirmarCompra(
                acciones,
                identificador,
                nombreProducto,
                precio,
                Number(selectorDescuento.value)
            );
        });
        selectorDescuento.addEventListener("change", actualizarPregunta);

        const cancelar = document.createElement("button");
        cancelar.type = "button";
        cancelar.className = "azul";
        cancelar.textContent = "Cancelar";
        cancelar.addEventListener("click", function () {
            acciones.replaceChildren(estadoNoObtenido, botonComprar);
        });

        confirmacion.append(pregunta);
        if (selectorDescuento.options.length > 1) {
            confirmacion.appendChild(selectorDescuento);
        }
        confirmacion.append(aceptar, cancelar);
        acciones.replaceChildren(confirmacion);
        actualizarPregunta();
    });

    acciones.append(estadoNoObtenido, botonComprar);
    tarjeta.appendChild(acciones);
}

function crearTarjetaProductoTienda(categoria, coleccion, producto, indice) {
    const tarjeta = document.createElement("article");
    tarjeta.className = "card coleccion-imagen-card item-tienda-card";

    const numero = document.createElement("span");
    numero.className = "numero-fondo";
    numero.textContent = String(indice + 1);

    const imagen = document.createElement("img");
    imagen.className = "miniatura-fondo imagen-producto-tienda";
    imagen.src = producto.imagen;
    imagen.alt = producto.nombre;
    imagen.loading = "lazy";
    imagen.tabIndex = 0;
    imagen.setAttribute("role", "button");
    imagen.setAttribute("aria-label", "Ampliar " + producto.nombre);
    imagen.addEventListener("click", function () {
        window.abrirVisorColeccion(imagen.src, producto.nombre);
    });
    imagen.addEventListener("keydown", function (evento) {
        if (evento.key === "Enter" || evento.key === " ") {
            evento.preventDefault();
            window.abrirVisorColeccion(imagen.src, producto.nombre);
        }
    });

    const nombre = document.createElement("p");
    nombre.className = "texto-conseguir-mas";
    nombre.textContent = producto.nombre;

    tarjeta.append(numero, imagen, nombre);
    agregarOpcionCompra(
        tarjeta,
        categoria + ":" + producto.imagen,
        producto.nombre,
        producto.precioMonedas || coleccion.precioMonedas
    );
    return tarjeta;
}

function renderizarVistasPreviasTienda() {
    document.querySelectorAll("[data-vista-previa]").forEach(function (contenedor) {
        const coleccion = coleccionesTienda[contenedor.dataset.vistaPrevia];
        if (!coleccion) {
            return;
        }

        contenedor.replaceChildren();
        coleccion.productos.slice(0, 3).forEach(function (elemento) {
            const imagen = document.createElement("img");
            imagen.src = elemento.imagen;
            imagen.alt = elemento.nombre;
            imagen.loading = "lazy";
            contenedor.appendChild(imagen);
        });
    });
}

function actualizarBotonesFiltroTienda() {
    filtrosTienda.forEach(function (boton) {
        const activo = boton.dataset.filtroTienda === filtroTiendaActual;
        boton.setAttribute("aria-pressed", String(activo));
        boton.classList.toggle("filtro-tienda-activo", activo);
    });
}

function abrirCategoriaTienda(categoria) {
    const coleccion = coleccionesTienda[categoria];
    if (!coleccion || !galeriaProductosTienda) {
        return;
    }

    tituloGaleriaTienda.textContent = coleccion.titulo;
    descripcionGaleriaTienda.textContent = coleccion.descripcion;
    galeriaProductosTienda.replaceChildren();
    filtroTiendaActual = "todos";
    filtrosTiendaContenedor.hidden = false;
    resumenColeccionTienda.hidden = false;
    coleccion.productos.forEach(function (producto, indice) {
        galeriaProductosTienda.appendChild(crearTarjetaProductoTienda(categoria, coleccion, producto, indice));
    });
    actualizarResumenYFiltroTienda();

    seccionCatalogoDinoSad.style.display = "none";
    seccionGaleriaTienda.style.display = "block";
}

if (btnEntrarTiendaDinoSad && seccionCatalogoDinoSad && seccionInicioTiendaDinoSad) {
    btnEntrarTiendaDinoSad.onclick = function () {
        seccionInicioTiendaDinoSad.style.display = "none";
        seccionCatalogoDinoSad.style.display = "block";
    };
}

if (btnVolverCatalogoTienda && seccionCatalogoDinoSad && seccionInicioTiendaDinoSad) {
    btnVolverCatalogoTienda.onclick = function () {
        seccionCatalogoDinoSad.style.display = "none";
        seccionInicioTiendaDinoSad.style.display = "block";
    };
}

document.querySelectorAll(".btnVerCategoriaTienda").forEach(function (boton) {
    boton.addEventListener("click", function () {
        abrirCategoriaTienda(boton.dataset.categoria);
    });
});

if (btnVolverGaleriaTienda && seccionGaleriaTienda && seccionCatalogoDinoSad) {
    btnVolverGaleriaTienda.onclick = function () {
        seccionGaleriaTienda.style.display = "none";
        seccionCatalogoDinoSad.style.display = "block";
    };
}

filtrosTienda.forEach(function (boton) {
    boton.addEventListener("click", function () {
        filtroTiendaActual = boton.dataset.filtroTienda;
        actualizarResumenYFiltroTienda();
    });
});

actualizarSaldoDinoMonedas();
renderizarVistasPreviasTienda();
