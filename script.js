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
const btnC = document.getElementById("btnC");
const btnFondo = document.getElementById("btnFondo");
const seccionContadorEnergia = document.getElementById("seccionContadorEnergia");
const btnVolverContadorEnergia = document.getElementById("btnVolverContadorEnergia");
const btnTiendaDinoSad = document.getElementById("btnTiendaDinoSad");
const seccionTiendaDinoSad = document.getElementById("seccionTiendaDinoSad");
const btnVolverTiendaDinoSad = document.getElementById("btnVolverTiendaDinoSad");
const btnMoneda = document.getElementById("btnMoneda");
const seccionDinoMonedas = document.getElementById("seccionDinoMonedas");
const btnVolverDinoMonedas = document.getElementById("btnVolverDinoMonedas");
const btnVerFondo = document.getElementById("btnVerFondo");
const seccionElegirFondo = document.getElementById("seccionElegirFondo");
const btnVolverElegirFondo = document.getElementById("btnVolverElegirFondo");
const btnFondoPantalla = document.getElementById("btnFondoPantalla");
const btnFondoChat = document.getElementById("btnFondoChat");
const seccionModosFondo = document.getElementById("seccionModosFondo");
const btnVolverModosFondo = document.getElementById("btnVolverModosFondo");
const btnElegirFondoEstatico = document.getElementById("btnElegirFondoEstatico");
const btnElegirFondoCambiante = document.getElementById("btnElegirFondoCambiante");
const btnVerSonido = document.getElementById("btnVerSonido");
const seccionConfigSonido = document.getElementById("seccionConfigSonido");
const btnVolverConfigSonido = document.getElementById("btnVolverConfigSonido");
const btnVerColeccion = document.getElementById("btnVerColeccion");
const seccionColeccion = document.getElementById("seccionColeccion");
const btnVolverColeccion = document.getElementById("btnVolverColeccion");
const btnColeccionImagenes = document.getElementById("btnColeccionImagenes");
const btnColeccionSkins = document.getElementById("btnColeccionSkins");
const seccionColeccionImagenes = document.getElementById("seccionColeccionImagenes");
const btnVolverColeccionImagenes = document.getElementById("btnVolverColeccionImagenes");
const galeriaFondosColeccion = document.getElementById("galeriaFondosColeccion");
const seccionColeccionSkins = document.getElementById("seccionColeccionSkins");
const btnVolverColeccionSkins = document.getElementById("btnVolverColeccionSkins");
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

if (btnC && inicioDetras && seccionContadorEnergia) {
	btnC.onclick = function () {
		ocultarSeccionesNavegacion();
		inicioDetras.style.display = "none";
		seccionContadorEnergia.style.display = "block";

		if (btnMoneda) {
			btnMoneda.style.display = "none";
		}
	};
}

if (btnVolverContadorEnergia && inicioDetras && seccionContadorEnergia) {
	btnVolverContadorEnergia.onclick = function () {
		ocultarSeccionesNavegacion();
		seccionContadorEnergia.style.display = "none";
		inicioDetras.style.display = "block";
	};
}

const energiaActual = 28.7;
const energiaMeta = 30;
const energiaFill = document.getElementById("energiaFill");
const valorEnergia = document.getElementById("valorEnergia");

if (energiaFill && valorEnergia) {
	const porcentaje = Math.min((energiaActual / energiaMeta) * 100, 100);
	energiaFill.style.width = porcentaje + "%";
	valorEnergia.textContent = energiaActual.toFixed(1);
}

if (btnVerColeccion && seccionConfiguracion && seccionColeccion) {
	btnVerColeccion.onclick = function () {
		seccionConfiguracion.style.display = "none";
		seccionColeccion.style.display = "block";
	};
}

if (btnVolverColeccion && seccionConfiguracion && seccionColeccion) {
	btnVolverColeccion.onclick = function () {
		seccionColeccion.style.display = "none";
		seccionConfiguracion.style.display = "block";
	};
}

function abrirVisorConFondo(fondoUrl, textoAlternativo) {
	const visor = document.getElementById("visor");
	const imagenGrande = document.getElementById("imagenGrande");
	const accionesFondo = document.getElementById("accionesFondoVisor");

	if (!visor || !imagenGrande || !fondoUrl) {
		return;
	}

	if (typeof contenidoAbierto !== "undefined") {
		contenidoAbierto = null;
	}

	imagenGrande.src = fondoUrl;
	imagenGrande.alt = textoAlternativo || "Fondo de colección";
	if (accionesFondo) {
		accionesFondo.style.display = typeof window.esFondoProtegido === "function" && window.esFondoProtegido(fondoUrl)
			? "none"
			: "block";
	}
	visor.style.display = "flex";
}

function ocultarAccionesFondoVisor() {
	const accionesFondo = document.getElementById("accionesFondoVisor");
	if (accionesFondo) accionesFondo.style.display = "none";
}

const btnElegirFondoVisor = document.getElementById("btnElegirFondoVisor");
const btnSacarFondoVisor = document.getElementById("btnSacarFondoVisor");

if (btnElegirFondoVisor) {
	btnElegirFondoVisor.onclick = function (event) {
		event.stopPropagation();
		if (typeof window.elegirFondoPersonalizado === "function") {
			window.elegirFondoPersonalizado(document.getElementById("imagenGrande").src);
		}
	};
}

if (btnSacarFondoVisor) {
	btnSacarFondoVisor.onclick = function (event) {
		event.stopPropagation();
		if (typeof window.sacarFondoPersonalizado === "function") {
			window.sacarFondoPersonalizado();
		}
	};
}

function cerrarVisorColeccion() {
	const visor = document.getElementById("visor");
	if (visor) {
		visor.style.display = "none";
	}
}

if (document.getElementById("visor")) {
	document.getElementById("visor").onclick = function (event) {
		if (event.target === document.getElementById("visor") || event.target === document.getElementById("contenidoVisor")) {
			cerrarVisorColeccion();
		}
	};

	if (document.getElementById("contenidoVisor")) {
		document.getElementById("contenidoVisor").onclick = function (event) {
			event.stopPropagation();
		};
	}
}

function renderGaleriaFondosColeccion() {
	if (!galeriaFondosColeccion) return;

	const fondosDisponibles = Array.isArray(window.fondos) && window.fondos.length
		? window.fondos
		: ["dino.jpg", "dino1.jpg", "dino2.jpg", "dino3.jpg", "dino4.jpg", "dino5.jpg"];

	galeriaFondosColeccion.innerHTML = "";

	fondosDisponibles.forEach(function (fondo, index) {
		const card = document.createElement("div");
		card.className = "card coleccion-imagen-card";
		card.style.cursor = "pointer";

		const numero = document.createElement("div");
		numero.className = "numero-fondo";
		numero.textContent = String(index + 1);

		const imagen = document.createElement("img");
		imagen.className = "miniatura-fondo fondo-coleccion-imagen";
		imagen.src = fondo;
		imagen.alt = "Fondo " + (index + 1);
		imagen.loading = "lazy";
		imagen.style.cursor = "pointer";

		imagen.onclick = function (event) {
			event.stopPropagation();
			abrirVisorConFondo(imagen.src, imagen.alt);
		};

		card.appendChild(numero);
		card.appendChild(imagen);
		galeriaFondosColeccion.appendChild(card);
	});

	function abrirTiendaDesdeColeccion() {
		seccionColeccionImagenes.style.display = "none";
		seccionTiendaDinoSad.style.display = "block";
		if (btnFondo) btnFondo.style.display = "none";
		if (btnMoneda) btnMoneda.style.display = "block";
	}

	const cardMas = document.createElement("div");
	cardMas.className = "card coleccion-imagen-card coleccion-mas-card";
	cardMas.style.cursor = "pointer";
	cardMas.innerHTML = `
		<div class="numero-fondo">+</div>
		<div class="miniatura-fondo miniatura-plus">
			<button class="btn-mas" aria-label="Conseguir más">+</button>
		</div>
		<p class="texto-conseguir-mas">Conseguir más</p>
	`;
	const botonMas = cardMas.querySelector(".btn-mas");
	if (botonMas) {
		botonMas.onclick = function (event) {
			event.stopPropagation();
			abrirTiendaDesdeColeccion();
		};
	}
	cardMas.onclick = function () {
		abrirTiendaDesdeColeccion();
	};
	galeriaFondosColeccion.appendChild(cardMas);
}

if (btnColeccionImagenes && seccionColeccion && seccionColeccionImagenes) {
	btnColeccionImagenes.onclick = function () {
		seccionColeccion.style.display = "none";
		seccionColeccionImagenes.style.display = "block";
		if (btnFondo) btnFondo.style.display = "none";
		renderGaleriaFondosColeccion();
	};
}

if (btnVolverColeccionImagenes && seccionColeccion && seccionColeccionImagenes) {
	btnVolverColeccionImagenes.onclick = function () {
		seccionColeccionImagenes.style.display = "none";
		seccionColeccion.style.display = "block";
		if (btnFondo) btnFondo.style.display = "none";
	};
}

if (btnColeccionSkins && seccionColeccion && seccionColeccionSkins) {
	btnColeccionSkins.onclick = function () {
		seccionColeccion.style.display = "none";
		seccionColeccionSkins.style.display = "block";
	};
}

if (btnVolverColeccionSkins && seccionColeccion && seccionColeccionSkins) {
	btnVolverColeccionSkins.onclick = function () {
		seccionColeccionSkins.style.display = "none";
		seccionColeccion.style.display = "block";
	};
}

if (btnFondo && seccionColeccionImagenes && seccionElegirFondo) {
	btnFondo.onclick = function () {
		seccionColeccionImagenes.style.display = "none";
		seccionElegirFondo.dataset.origen = "imagenes";
		seccionModosFondo.style.display = "none";
		seccionElegirFondo.style.display = "block";
		btnFondo.style.display = "none";
	};
}

if (btnVerFondo && seccionConfiguracion && seccionElegirFondo) {
	btnVerFondo.onclick = function () {
		seccionConfiguracion.style.display = "none";
		seccionElegirFondo.dataset.origen = "configuracion";
		seccionModosFondo.style.display = "none";
		seccionElegirFondo.style.display = "block";
	};
}

if (btnFondoPantalla && seccionElegirFondo && seccionModosFondo) {
	btnFondoPantalla.onclick = function () {
		seccionElegirFondo.style.display = "none";
		seccionModosFondo.style.display = "block";
	};
}

if (btnFondoChat) {
	btnFondoChat.onclick = function () {
		alert("La configuración del fondo del chat estará disponible próximamente.");
	};
}

if (btnVolverModosFondo && seccionElegirFondo && seccionModosFondo) {
	btnVolverModosFondo.onclick = function () {
		seccionModosFondo.style.display = "none";
		seccionElegirFondo.style.display = "block";
	};
}

if (btnVolverElegirFondo && seccionConfiguracion && seccionElegirFondo) {
	btnVolverElegirFondo.onclick = function () {
		seccionElegirFondo.style.display = "none";
		if (seccionElegirFondo.dataset.origen === "imagenes") {
			seccionColeccionImagenes.style.display = "block";
			if (btnFondo) btnFondo.style.display = "none";
		} else {
			seccionConfiguracion.style.display = "block";
		}
	};
}

function volverDesdeSeleccionFondo() {
	seccionModosFondo.style.display = "none";
	seccionElegirFondo.style.display = "none";
	if (seccionElegirFondo.dataset.origen === "imagenes") {
		seccionColeccionImagenes.style.display = "block";
		if (btnFondo) btnFondo.style.display = "none";
	} else {
		seccionConfiguracion.style.display = "block";
	}
}

if (btnElegirFondoEstatico) {
	btnElegirFondoEstatico.onclick = function () {
		if (typeof window.cambiarModoFondo === "function") {
			window.cambiarModoFondo("estatico");
		}
		volverDesdeSeleccionFondo();
	};
}

if (btnElegirFondoCambiante) {
	btnElegirFondoCambiante.onclick = function () {
		if (typeof window.cambiarModoFondo === "function") {
			window.cambiarModoFondo("cambiante");
		}
		volverDesdeSeleccionFondo();
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