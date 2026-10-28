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
const btnContacto = document.getElementById("btnContacto");
const seccionContacto = document.getElementById("seccionContacto");
const btnVolverContacto = document.getElementById("btnVolverContacto");
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
const seccionCatalogoTienda = document.getElementById("seccionCatalogoTienda");
const seccionGaleriaCatalogoTiendaNav = document.getElementById("seccionGaleriaTienda");
const btnMoneda = document.getElementById("btnMoneda");
const seccionDinoMonedas = document.getElementById("seccionDinoMonedas");
const btnVolverDinoMonedas = document.getElementById("btnVolverDinoMonedas");
let seccionAnteriorDinoMonedas = seccionTiendaDinoSad;
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
const btnColeccionCartas = document.getElementById("btnColeccionCartas");
const btnColeccionSkinsLista = document.getElementById("btnColeccionSkinsLista");
const btnColeccionAvatar = document.getElementById("btnColeccionAvatar");
const opcionesColeccionItems = document.getElementById("opcionesColeccionItems");
const btnVolverCategoriasColeccion = document.getElementById("btnVolverCategoriasColeccion");
const tituloItemsColeccion = document.getElementById("tituloItemsColeccion");
const galeriaItemsColeccion = document.getElementById("galeriaItemsColeccion");
const controlVolumenMusica = document.getElementById("controlVolumenMusica");
const valorVolumenMusica = document.getElementById("valorVolumenMusica");
const reproductorMusica = document.getElementById("musica");
const seccionesNavegacion = document.querySelectorAll('[id^="seccion"]');

function ocultarSeccionesNavegacion() {
	seccionesNavegacion.forEach(function (seccion) {
		seccion.style.display = "none";
	});
}

function mostrarSeccionNavegacion(seccion) {
	ocultarSeccionesNavegacion();
	if (inicioDetras) {
		inicioDetras.style.display = "none";
	}
	if (seccion) {
		seccion.style.display = "block";
	}
}

if (btnContacto && seccionContacto) {
	btnContacto.onclick = function () {
		mostrarSeccionNavegacion(seccionContacto);
	};
}

if (btnVolverContacto && seccionContacto && inicioDetras) {
	btnVolverContacto.onclick = function () {
		ocultarSeccionesNavegacion();
		inicioDetras.style.display = "block";
	};
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

	const pasoCrearPersonaje = document.getElementById("pasoCrearPersonaje");
	const pasoCaminoCapitulo = document.getElementById("pasoCaminoCapitulo");
	if (pasoCrearPersonaje) pasoCrearPersonaje.style.display = "block";
	if (pasoCaminoCapitulo) pasoCaminoCapitulo.style.display = "none";
}

function abrirMapaHistoria() {
	if (!seccionDetras || !seccionModoHistoria) {
		return;
	}

	seccionDetras.style.display = "none";
	seccionModoHistoria.style.display = "block";

	const pasoCrearPersonaje = document.getElementById("pasoCrearPersonaje");
	const pasoCaminoCapitulo = document.getElementById("pasoCaminoCapitulo");
	if (pasoCrearPersonaje) pasoCrearPersonaje.style.display = "none";
	if (pasoCaminoCapitulo) pasoCaminoCapitulo.style.display = "block";
}

if (btnVerMapa) btnVerMapa.onclick = abrirMapaHistoria;
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
		mostrarSeccionNavegacion(seccionConfiguracion);

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
		seccionAnteriorDinoMonedas = seccionGaleriaCatalogoTiendaNav
			&& seccionGaleriaCatalogoTiendaNav.style.display !== "none"
			? seccionGaleriaCatalogoTiendaNav
			: seccionCatalogoTienda && seccionCatalogoTienda.style.display !== "none"
				? seccionCatalogoTienda
				: seccionTiendaDinoSad;
		seccionTiendaDinoSad.style.display = "none";
		if (seccionCatalogoTienda) {
			seccionCatalogoTienda.style.display = "none";
		}
		if (seccionGaleriaCatalogoTiendaNav) {
			seccionGaleriaCatalogoTiendaNav.style.display = "none";
		}
		seccionDinoMonedas.style.display = "block";
	};
}

if (btnVolverDinoMonedas && seccionTiendaDinoSad && seccionDinoMonedas) {
	btnVolverDinoMonedas.onclick = function () {
		seccionDinoMonedas.style.display = "none";
		seccionAnteriorDinoMonedas.style.display = "block";
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

const energiaActual = 28.6;
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
		mostrarSeccionNavegacion(seccionColeccion);
	};
}

if (btnVolverColeccion && seccionConfiguracion && seccionColeccion) {
	btnVolverColeccion.onclick = function () {
		mostrarSeccionNavegacion(seccionConfiguracion);
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

function abrirTiendaDesdeColeccion() {
	mostrarSeccionNavegacion(seccionTiendaDinoSad);
	if (btnFondo) btnFondo.style.display = "none";
	if (btnMoneda) btnMoneda.style.display = "block";
}

window.abrirVisorColeccion = function (imagenUrl, textoAlternativo) {
	const visor = document.getElementById("visor");
	const imagenGrande = document.getElementById("imagenGrande");

	if (!visor || !imagenGrande || !imagenUrl) {
		return;
	}

	imagenGrande.src = imagenUrl;
	imagenGrande.alt = textoAlternativo || "Imagen de la colección";
	ocultarAccionesFondoVisor();
	visor.style.display = "flex";
};

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

const btnCerrarVisorColeccion = document.getElementById("btnCerrarVisorColeccion");
if (btnCerrarVisorColeccion) {
	btnCerrarVisorColeccion.onclick = cerrarVisorColeccion;
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
		mostrarSeccionNavegacion(seccionColeccionImagenes);
		if (btnFondo) btnFondo.style.display = "none";
		renderGaleriaFondosColeccion();
	};
}

if (btnVolverColeccionImagenes && seccionColeccion && seccionColeccionImagenes) {
	btnVolverColeccionImagenes.onclick = function () {
		mostrarSeccionNavegacion(seccionColeccion);
		if (btnFondo) btnFondo.style.display = "none";
	};
}

if (btnColeccionSkins && seccionColeccion && seccionColeccionSkins) {
	btnColeccionSkins.onclick = function () {
		mostrarSeccionNavegacion(seccionColeccionSkins);
		if (opcionesColeccionItems) opcionesColeccionItems.style.display = "block";
		if (btnVolverCategoriasColeccion) btnVolverCategoriasColeccion.style.display = "none";
		if (tituloItemsColeccion) tituloItemsColeccion.textContent = "";
		if (galeriaItemsColeccion) galeriaItemsColeccion.replaceChildren();
	};
}

if (btnVolverColeccionSkins && seccionColeccion && seccionColeccionSkins) {
	btnVolverColeccionSkins.onclick = function () {
		mostrarSeccionNavegacion(seccionColeccion);
	};
}

function renderItemsColeccion(categoria, titulo, soloAvatares) {
	if (!galeriaItemsColeccion || !tituloItemsColeccion) return;

	if (opcionesColeccionItems) opcionesColeccionItems.style.display = "none";
	if (btnVolverCategoriasColeccion) btnVolverCategoriasColeccion.style.display = "inline-block";
	tituloItemsColeccion.textContent = titulo;
	galeriaItemsColeccion.replaceChildren();

	const productosObtenidos = typeof window.obtenerProductosObtenidosTienda === "function"
		? window.obtenerProductosObtenidosTienda(categoria)
		: [];
	const productos = soloAvatares
		? productosObtenidos.filter(function (producto) {
			return producto.imagen.toLowerCase().startsWith("avatar ");
		})
		: productosObtenidos;

	productos.forEach(function (producto, index) {
		const tarjeta = document.createElement("article");
		tarjeta.className = "card coleccion-imagen-card";

		const numero = document.createElement("span");
		numero.className = "numero-fondo";
		numero.textContent = String(index + 1);

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
		galeriaItemsColeccion.appendChild(tarjeta);
	});

	if (productos.length === 0) {
		const tarjetaConseguir = document.createElement("article");
		tarjetaConseguir.className = "card coleccion-imagen-card coleccion-mas-card";

		const numero = document.createElement("span");
		numero.className = "numero-fondo";
		numero.textContent = "+";

		const vista = document.createElement("div");
		vista.className = "miniatura-fondo miniatura-plus";

		const botonConseguir = document.createElement("button");
		botonConseguir.className = "btn-mas";
		botonConseguir.type = "button";
		botonConseguir.setAttribute("aria-label", "Conseguir " + titulo.toLowerCase());
		botonConseguir.textContent = "+";
		botonConseguir.addEventListener("click", function (evento) {
			evento.stopPropagation();
			abrirTiendaDesdeColeccion();
		});

		const texto = document.createElement("p");
		texto.className = "texto-conseguir-mas";
		texto.textContent = "Conseguir";

		vista.appendChild(botonConseguir);
		tarjetaConseguir.append(numero, vista, texto);
		tarjetaConseguir.addEventListener("click", abrirTiendaDesdeColeccion);
		galeriaItemsColeccion.appendChild(tarjetaConseguir);
	}
}

if (btnVolverCategoriasColeccion) {
	btnVolverCategoriasColeccion.onclick = function () {
		if (opcionesColeccionItems) opcionesColeccionItems.style.display = "block";
		btnVolverCategoriasColeccion.style.display = "none";
		tituloItemsColeccion.textContent = "";
		if (galeriaItemsColeccion) galeriaItemsColeccion.replaceChildren();
	};
}

if (btnColeccionCartas) {
	btnColeccionCartas.onclick = function () {
		renderItemsColeccion("cartas", "Tus cartas", false);
	};
}

if (btnColeccionSkinsLista) {
	btnColeccionSkinsLista.onclick = function () {
		renderItemsColeccion("skins", "Tus skins", false);
	};
}

if (btnColeccionAvatar) {
	btnColeccionAvatar.onclick = function () {
		renderItemsColeccion("ropa", "Tus avatares", true);
	};
}

if (btnFondo && seccionColeccionImagenes && seccionElegirFondo) {
	btnFondo.onclick = function () {
		seccionElegirFondo.dataset.origen = "imagenes";
		seccionModosFondo.style.display = "none";
		mostrarSeccionNavegacion(seccionElegirFondo);
		btnFondo.style.display = "none";
	};
}

if (btnVerFondo && seccionConfiguracion && seccionElegirFondo) {
	btnVerFondo.onclick = function () {
		seccionElegirFondo.dataset.origen = "configuracion";
		seccionModosFondo.style.display = "none";
		mostrarSeccionNavegacion(seccionElegirFondo);
	};
}

if (btnFondoPantalla && seccionElegirFondo && seccionModosFondo) {
	btnFondoPantalla.onclick = function () {
		mostrarSeccionNavegacion(seccionModosFondo);
	};
}

if (btnFondoChat) {
	btnFondoChat.onclick = function () {
		alert("La configuración del fondo del chat estará disponible próximamente.");
	};
}

if (btnVolverModosFondo && seccionElegirFondo && seccionModosFondo) {
	btnVolverModosFondo.onclick = function () {
		mostrarSeccionNavegacion(seccionElegirFondo);
	};
}

if (btnVolverElegirFondo && seccionConfiguracion && seccionElegirFondo) {
	btnVolverElegirFondo.onclick = function () {
		if (seccionElegirFondo.dataset.origen === "imagenes") {
			mostrarSeccionNavegacion(seccionColeccionImagenes);
			if (btnFondo) btnFondo.style.display = "none";
		} else {
			mostrarSeccionNavegacion(seccionConfiguracion);
		}
	};
}

function volverDesdeSeleccionFondo() {
	if (seccionElegirFondo.dataset.origen === "imagenes") {
		mostrarSeccionNavegacion(seccionColeccionImagenes);
		if (btnFondo) btnFondo.style.display = "none";
	} else {
		mostrarSeccionNavegacion(seccionConfiguracion);
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
		mostrarSeccionNavegacion(seccionConfigSonido);

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
		mostrarSeccionNavegacion(seccionConfiguracion);
	};
}