const btnEntrarRuletaDinoSad = document.getElementById("btnEntrarRuletaDinoSad");
const btnVolverRuletaDinoSad = document.getElementById("btnVolverRuletaDinoSad");
const seccionRuletaDinoSad = document.getElementById("seccionRuletaDinoSad");
const seccionTiendaDinoSadRuleta = document.getElementById("seccionTiendaDinoSad");
const ruleta = document.getElementById("ruletaDinoSad");
const btnUnGiro = document.getElementById("btnUnGiro");
const btnTresGiros = document.getElementById("btnTresGiros");
const resultadoRuleta = document.getElementById("resultadoRuleta");
const saldoRuleta = document.getElementById("saldoRuleta");
const ticketsRuleta = document.getElementById("ticketsRuleta");
const usosRuleta = document.getElementById("usosRuleta");
const modalPremioRuleta = document.getElementById("modalPremioRuleta");
const mensajePremioRuleta = document.getElementById("mensajePremioRuleta");
const premiosObtenidosRuleta = document.getElementById("premiosObtenidosRuleta");
const btnCerrarPremioRuleta = document.getElementById("btnCerrarPremioRuleta");
const btnAceptarPremioRuleta = document.getElementById("btnAceptarPremioRuleta");

let rotacionRuleta = 0;
let ruletaGirando = false;
const premiosRuleta = [
    { tipo: "monedas", cantidad: 10 },
    { tipo: "fondo", imagen: "dino.jpg" },
    { tipo: "monedas", cantidad: 30 },
    { tipo: "ticket" },
    { tipo: "monedas", cantidad: 50 },
    { tipo: "skin", imagen: "stiker1.png" },
    { tipo: "monedas", cantidad: 100 },
    { tipo: "ticket" }
];

function actualizarEstadoRuleta() {
    const estado = window.obtenerEstadoRuletaDinoSad();
    saldoRuleta.textContent = String(estado.monedas);
    ticketsRuleta.textContent = String(estado.tickets);
    usosRuleta.textContent = String(Math.max(0, 3 - estado.usos));

    const limiteAlcanzado = estado.usos >= 3;
    btnUnGiro.disabled = ruletaGirando || limiteAlcanzado;
    btnTresGiros.disabled = ruletaGirando || limiteAlcanzado;
    btnUnGiro.textContent = estado.giroGratisUsado
        ? "1 giro · 50 monedas"
        : "1 giro · gratis";
    btnTresGiros.textContent = "3 giros · 100 monedas";
}

function abrirRuletaDinoSad() {
    if (!seccionRuletaDinoSad || !seccionTiendaDinoSadRuleta) {
        return;
    }

    seccionTiendaDinoSadRuleta.style.display = "none";
    seccionRuletaDinoSad.style.display = "block";
    resultadoRuleta.textContent = "El primer giro individual es gratis. Tenés hasta 3 usos cada 24 horas.";
    actualizarEstadoRuleta();
}

function volverTiendaDesdeRuleta() {
    if (!seccionRuletaDinoSad || !seccionTiendaDinoSadRuleta) {
        return;
    }

    seccionRuletaDinoSad.style.display = "none";
    seccionTiendaDinoSadRuleta.style.display = "block";
}

function esperar(milisegundos) {
    return new Promise(function (resolver) {
        setTimeout(resolver, milisegundos);
    });
}

function mostrarPremiosRuleta(premios) {
    premiosObtenidosRuleta.replaceChildren();
    mensajePremioRuleta.textContent = premios.length === 1
        ? "¡Mirá lo que conseguiste!"
        : `¡Conseguiste ${premios.length} premios!`;

    premios.forEach(function (resultado) {
        const tarjeta = document.createElement("div");
        tarjeta.className = "tarjetaPremioRuleta";

        const esDuplicado = resultado.descripcion.includes("ya estaba obtenido");
        if (resultado.premio.tipo === "monedas") {
            const icono = document.createElement("span");
            icono.className = "iconoPremioRuleta";
            icono.textContent = "🪙";
            tarjeta.append(icono);
        } else if (resultado.premio.tipo === "ticket" || esDuplicado) {
            const icono = document.createElement("span");
            icono.className = "iconoPremioRuleta";
            icono.textContent = "🎟️";
            tarjeta.append(icono);
        } else {
            const imagen = document.createElement("img");
            imagen.src = resultado.premio.imagen;
            imagen.alt = "";
            tarjeta.append(imagen);
        }

        const descripcion = document.createElement("span");
        descripcion.textContent = resultado.descripcion;
        tarjeta.append(descripcion);
        premiosObtenidosRuleta.append(tarjeta);
    });

    if (!modalPremioRuleta.open) {
        modalPremioRuleta.showModal();
    }
}

async function girarRuleta() {
    const indicePremio = Math.floor(Math.random() * premiosRuleta.length);
    const centroPremio = indicePremio * 45 + 22.5;
    const rotacionActual = ((rotacionRuleta % 360) + 360) % 360;
    const ajusteAlPremio = (360 - centroPremio - rotacionActual + 360) % 360;

    rotacionRuleta += 1440 + ajusteAlPremio;
    ruleta.style.transform = `rotate(${rotacionRuleta}deg)`;
    await esperar(3900);

    return premiosRuleta[indicePremio];
}

async function iniciarGiros(cantidad) {
    if (ruletaGirando || !ruleta) {
        return;
    }

    const inicio = window.iniciarGiroRuletaDinoSad(cantidad);
    if (!inicio.ok) {
        resultadoRuleta.textContent = inicio.motivo === "limite"
            ? "Ya usaste tus 3 intentos de hoy. Volvé dentro de 24 horas."
            : inicio.motivo === "saldo"
                ? `Te faltan monedas. Necesitás ${inicio.costo} y tenés ${inicio.monedas}.`
                : inicio.motivo === "guardado"
                    ? "No se pudo guardar el giro. Revisá el almacenamiento del navegador e intentá otra vez."
                    : "No se pudo iniciar la ruleta.";
        actualizarEstadoRuleta();
        return;
    }

    ruletaGirando = true;
    actualizarEstadoRuleta();
    resultadoRuleta.textContent = inicio.gratis
        ? "Tu giro gratis está girando..."
        : `La ruleta está girando. Se descontaron ${inicio.costo} monedas.`;

    const resultados = [];
    for (let indice = 0; indice < cantidad; indice++) {
        const premio = await girarRuleta();
        const resultadoPremio = window.aplicarPremioRuletaDinoSad(premio);
        if (!resultadoPremio.ok) {
            resultadoRuleta.textContent = "No se pudo guardar un premio. Revisá el almacenamiento del navegador.";
            ruletaGirando = false;
            actualizarEstadoRuleta();
            return;
        }
        resultados.push({ premio: premio, descripcion: resultadoPremio.descripcion });
    }

    resultadoRuleta.textContent = cantidad === 1
        ? `¡Premio: ${resultados[0].descripcion}!`
        : `¡Premios: ${resultados.map(function (resultado) { return resultado.descripcion; }).join(" · ")}.`;
    ruletaGirando = false;
    actualizarEstadoRuleta();
    mostrarPremiosRuleta(resultados);
}

if (btnEntrarRuletaDinoSad) {
    btnEntrarRuletaDinoSad.onclick = abrirRuletaDinoSad;
}

if (btnVolverRuletaDinoSad) {
    btnVolverRuletaDinoSad.onclick = volverTiendaDesdeRuleta;
}

if (btnUnGiro) {
    btnUnGiro.onclick = function () {
        iniciarGiros(1);
    };
}

if (btnTresGiros) {
    btnTresGiros.onclick = function () {
        iniciarGiros(3);
    };
}

function cerrarModalPremioRuleta() {
    if (modalPremioRuleta.open) {
        modalPremioRuleta.close();
    }
}

if (btnCerrarPremioRuleta) {
    btnCerrarPremioRuleta.onclick = cerrarModalPremioRuleta;
}

if (btnAceptarPremioRuleta) {
    btnAceptarPremioRuleta.onclick = cerrarModalPremioRuleta;
}

if (modalPremioRuleta) {
    modalPremioRuleta.addEventListener("click", function (evento) {
        if (evento.target === modalPremioRuleta) {
            cerrarModalPremioRuleta();
        }
    });
}
