// =====================================
// DINO SAD WEB
// SCRIPT PRINCIPAL
// =====================================

// Bienvenido al proyecto DinoSad Web 🦖
//
// Este archivo se utilizará únicamente para
// funciones generales del proyecto.
//
// Cada función importante tiene su propio archivo:
//
// redes.js   → Redes sociales
// musica.js  → Música
// fondos.js  → Fondos automáticos
// stickers.js → Sección de stickers
//
// Así mantenemos el proyecto ordenado y fácil
// de seguir creciendo.

// =====================================
// INICIO DEL PROYECTO
// =====================================

console.log("🦖 DinoSad Web iniciado correctamente.");

// =====================================
// DETRAS DE DINOSAD
// =====================================

const inicioDetras = document.getElementById("inicio");
const btnProceso = document.getElementById("btnProceso");
const seccionDetras = document.getElementById("seccionDetras");
const btnVolverDetras = document.getElementById("btnVolverDetras");
const btnVerMapa = document.getElementById("btnVerMapa");
const btnComenzarProgreso = document.getElementById("btnComenzarProgreso");
const seccionModoHistoria = document.getElementById("seccionModoHistoria");
const btnMemory = document.getElementById("btnMemory");
const menuJuegosDinoSad = document.getElementById("seccionJuegosDinoSad");
const seccionMemoryNiveles = document.getElementById("seccionMemoryNiveles");
const btnVolverMemory = document.getElementById("btnVolverMemory");
const nivelMemoryFacil = document.getElementById("nivelMemoryFacil");
const nivelMemoryNormal = document.getElementById("nivelMemoryNormal");
const nivelMemoryDificil = document.getElementById("nivelMemoryDificil");
const seccionJuegoMemoria = document.getElementById("seccionJuegoMemoria");
const btnVolverJuegoMemoria = document.getElementById("btnVolverJuegoMemoria");
const btnTatetiDino = document.getElementById("btnTatetiDino");
const seccionTatetiNiveles = document.getElementById("seccionTatetiNiveles");
const btnVolverTatetiNiveles = document.getElementById("btnVolverTatetiNiveles");
const nivelTatetiFacil = document.getElementById("nivelTatetiFacil");
const nivelTatetiDificil = document.getElementById("nivelTatetiDificil");
const seccionTaTeTi = document.getElementById("seccionTaTeTi");
const btnConfiguracion = document.getElementById("btnConfiguracion");
const seccionConfiguracion = document.getElementById("seccionConfiguracion");
const btnVolverConfiguracion = document.getElementById("btnVolverConfiguracion");
const btnTiendaDinoSad = document.getElementById("btnTiendaDinoSad");
const seccionTiendaDinoSad = document.getElementById("seccionTiendaDinoSad");
const btnVolverTiendaDinoSad = document.getElementById("btnVolverTiendaDinoSad");
const btnMoneda = document.getElementById("btnMoneda");
const seccionDinoMonedas = document.getElementById("seccionDinoMonedas");
const btnVolverDinoMonedas = document.getElementById("btnVolverDinoMonedas");
const btnVerFondo = document.getElementById("btnVerFondo");
const seccionElegirFondo = document.getElementById("seccionElegirFondo");
const btnVolverElegirFondo = document.getElementById("btnVolverElegirFondo");
const btnVerSonido = document.getElementById("btnVerSonido");
const seccionConfigSonido = document.getElementById("seccionConfigSonido");
const btnVolverConfigSonido = document.getElementById("btnVolverConfigSonido");
const controlVolumenMusica = document.getElementById("controlVolumenMusica");
const valorVolumenMusica = document.getElementById("valorVolumenMusica");
const reproductorMusica = document.getElementById("musica");
const seccionesNavegacion = document.querySelectorAll('[id^="seccion"]');

function ocultarSeccionesNavegacion() {
	seccionesNavegacion.forEach(function (seccion) {
		seccion.style.display = "none";
	});
}

if (reproductorMusica) {
	const volumenGuardado = localStorage.getItem("volumenMusica");

	if (volumenGuardado !== null) {
		reproductorMusica.volume = Number(volumenGuardado) / 100;
	}
}

if (btnProceso && seccionDetras) {
	btnProceso.onclick = function () {
		if (inicioDetras) {
			inicioDetras.style.display = "none";
		}

		seccionDetras.style.display = "block";
	};
}

if (btnVolverDetras && seccionDetras) {
	btnVolverDetras.onclick = function () {
		seccionDetras.style.display = "none";

		if (inicioDetras) {
			inicioDetras.style.display = "block";
		}
	};
}

function abrirModoHistoria() {
	if (!seccionDetras || !seccionModoHistoria) {
		return;
	}

	seccionDetras.style.display = "none";
	seccionModoHistoria.style.display = "block";
}

if (btnVerMapa) btnVerMapa.onclick = abrirModoHistoria;
if (btnComenzarProgreso) btnComenzarProgreso.onclick = abrirModoHistoria;

if (btnMemory && menuJuegosDinoSad && seccionMemoryNiveles) {
	btnMemory.onclick = function () {
		menuJuegosDinoSad.style.display = "none";
		seccionMemoryNiveles.style.display = "block";
	};
}

if (btnVolverMemory && menuJuegosDinoSad && seccionMemoryNiveles) {
	btnVolverMemory.onclick = function () {
		seccionMemoryNiveles.style.display = "none";
		menuJuegosDinoSad.style.display = "block";
	};
}

function iniciarMemory(parejas) {
	if (!seccionMemoryNiveles || !seccionJuegoMemoria) {
		return;
	}

	seccionMemoryNiveles.style.display = "none";
	seccionJuegoMemoria.style.display = "block";
	window.memoryParejas = parejas;

	if (window.iniciarJuegoMemoria) {
		window.iniciarJuegoMemoria();
	}
}

if (nivelMemoryFacil) nivelMemoryFacil.onclick = function () {
		iniciarMemory(4);
	};
if (nivelMemoryNormal) nivelMemoryNormal.onclick = function () {
		iniciarMemory(8);
	};
if (nivelMemoryDificil) nivelMemoryDificil.onclick = function () {
		iniciarMemory(16);
	};

if (btnVolverJuegoMemoria && seccionJuegoMemoria && seccionMemoryNiveles) {
	btnVolverJuegoMemoria.onclick = function () {
		if (window.detenerCronometroMemoria) {
			window.detenerCronometroMemoria();
		}
		seccionJuegoMemoria.style.display = "none";
		seccionMemoryNiveles.style.display = "block";
	};
}

if (btnTatetiDino && menuJuegosDinoSad && seccionTatetiNiveles) {
	btnTatetiDino.onclick = function () {
		menuJuegosDinoSad.style.display = "none";
		seccionTatetiNiveles.style.display = "block";
	};
}

if (btnVolverTatetiNiveles && menuJuegosDinoSad && seccionTatetiNiveles) {
	btnVolverTatetiNiveles.onclick = function () {
		seccionTatetiNiveles.style.display = "none";
		menuJuegosDinoSad.style.display = "block";
	};
}

function abrirTateti(dificultad) {
	if (!seccionTatetiNiveles || !seccionTaTeTi) {
		return;
	}

	seccionTatetiNiveles.style.display = "none";
	seccionTaTeTi.style.display = "block";

	const botonDificultad = document.getElementById(
		dificultad === "facil" ? "btnTatetiFacil" : "btnTatetiDificil"
	);

	if (botonDificultad) {
		botonDificultad.click();
	}
}

if (nivelTatetiFacil) nivelTatetiFacil.onclick = function () {
	abrirTateti("facil");
};

if (nivelTatetiDificil) nivelTatetiDificil.onclick = function () {
	abrirTateti("dificil");
};

if (btnConfiguracion && inicioDetras && seccionConfiguracion) {
	btnConfiguracion.onclick = function () {
		ocultarSeccionesNavegacion();
		inicioDetras.style.display = "none";
		seccionConfiguracion.style.display = "block";

		if (btnMoneda) {
			btnMoneda.style.display = "none";
		}
	};
}

if (btnVolverConfiguracion && inicioDetras && seccionConfiguracion) {
	btnVolverConfiguracion.onclick = function () {
		ocultarSeccionesNavegacion();
		seccionConfiguracion.style.display = "none";
		inicioDetras.style.display = "block";
	};
}

if (btnTiendaDinoSad && inicioDetras && seccionTiendaDinoSad) {
	btnTiendaDinoSad.onclick = function () {
		inicioDetras.style.display = "none";
		seccionTiendaDinoSad.style.display = "block";

		if (btnMoneda) {
			btnMoneda.style.display = "block";
		}
	};
}

if (btnVolverTiendaDinoSad && inicioDetras && seccionTiendaDinoSad) {
	btnVolverTiendaDinoSad.onclick = function () {
		seccionTiendaDinoSad.style.display = "none";
		inicioDetras.style.display = "block";

		if (btnMoneda) {
			btnMoneda.style.display = "none";
		}
	};
}

if (btnMoneda && seccionTiendaDinoSad && seccionDinoMonedas) {
	btnMoneda.onclick = function () {
		seccionTiendaDinoSad.style.display = "none";
		seccionDinoMonedas.style.display = "block";
	};
}

if (btnVolverDinoMonedas && seccionTiendaDinoSad && seccionDinoMonedas) {
	btnVolverDinoMonedas.onclick = function () {
		seccionDinoMonedas.style.display = "none";
		seccionTiendaDinoSad.style.display = "block";
	};
}

if (btnVerFondo && seccionConfiguracion && seccionElegirFondo) {
	btnVerFondo.onclick = function () {
		seccionConfiguracion.style.display = "none";
		seccionElegirFondo.style.display = "block";
	};
}

if (btnVolverElegirFondo && seccionConfiguracion && seccionElegirFondo) {
	btnVolverElegirFondo.onclick = function () {
		seccionElegirFondo.style.display = "none";
		seccionConfiguracion.style.display = "block";
	};
}

if (btnVerSonido && seccionConfiguracion && seccionConfigSonido) {
	btnVerSonido.onclick = function () {
		seccionConfiguracion.style.display = "none";
		seccionConfigSonido.style.display = "block";

		if (controlVolumenMusica && reproductorMusica) {
			let volumenGuardado = localStorage.getItem("volumenMusica");
			let volumen = volumenGuardado === null
				? reproductorMusica.volume * 100
				: Number(volumenGuardado);

			controlVolumenMusica.value = volumen;
			valorVolumenMusica.textContent = Math.round(volumen) + "%";
		}
	};
}

if (controlVolumenMusica && reproductorMusica && valorVolumenMusica) {
	controlVolumenMusica.oninput = function () {
		let volumen = Number(controlVolumenMusica.value);

		reproductorMusica.volume = volumen / 100;
		valorVolumenMusica.textContent = volumen + "%";
		localStorage.setItem("volumenMusica", volumen);
	};
}

if (btnVolverConfigSonido && seccionConfiguracion && seccionConfigSonido) {
	btnVolverConfigSonido.onclick = function () {
		seccionConfigSonido.style.display = "none";
		seccionConfiguracion.style.display = "block";
	};
}