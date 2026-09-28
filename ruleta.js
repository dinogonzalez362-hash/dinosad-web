const btnEntrarRuletaDinoSad = document.getElementById("btnEntrarRuletaDinoSad");
const btnVolverRuletaDinoSad = document.getElementById("btnVolverRuletaDinoSad");
const seccionRuletaDinoSad = document.getElementById("seccionRuletaDinoSad");
const seccionTiendaDinoSadRuleta = document.getElementById("seccionTiendaDinoSad");
const ruleta = document.getElementById("ruletaDinoSad");
const btnUnGiro = document.getElementById("btnUnGiro");
const btnTresGiros = document.getElementById("btnTresGiros");
const resultadoRuleta = document.getElementById("resultadoRuleta");

let rotacionRuleta = 0;
let ruletaGirando = false;

function abrirRuletaDinoSad() {
    if (!seccionRuletaDinoSad || !seccionTiendaDinoSadRuleta) {
        return;
    }

    seccionTiendaDinoSadRuleta.style.display = "none";
    seccionRuletaDinoSad.style.display = "block";
    resultadoRuleta.textContent = "Elegí cuántos giros querés hacer.";
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

async function girarRuleta() {
    const numero = Math.floor(Math.random() * 8) + 1;
    const centroNumero = (numero - 1) * 45 + 22.5;
    const rotacionActual = ((rotacionRuleta % 360) + 360) % 360;
    const ajusteAlNumero = (360 - centroNumero - rotacionActual + 360) % 360;

    rotacionRuleta += 1440 + ajusteAlNumero;
    ruleta.style.transform = `rotate(${rotacionRuleta}deg)`;
    await esperar(3900);

    return numero;
}

async function iniciarGiros(cantidad) {
    if (ruletaGirando || !ruleta) {
        return;
    }

    ruletaGirando = true;
    btnUnGiro.disabled = true;
    btnTresGiros.disabled = true;
    resultadoRuleta.textContent = cantidad === 1 ? "La ruleta está girando..." : "Las ruletas están girando...";

    const resultados = [];
    for (let indice = 0; indice < cantidad; indice++) {
        resultados.push(await girarRuleta());
    }

    resultadoRuleta.textContent = cantidad === 1
        ? `Salió el número ${resultados[0]}.`
        : `Salieron los números: ${resultados.join(", ")}.`;
    btnUnGiro.disabled = false;
    btnTresGiros.disabled = false;
    ruletaGirando = false;
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
