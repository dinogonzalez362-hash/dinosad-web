// ===============================
// FONDOS AUTOMÁTICOS
// ===============================

// Lista de fondos
let fondos = [

    "dino.jpg",
    "dino1.jpg",
    "dino2.jpg",
    "dino3.jpg",
    "dino4.jpg",
    "dino5.jpg"

];

window.fondos = fondos;

// Fondo actual
let fondoActual = 0;
let intervaloFondos = null;
let temporizadorCambio = null;
const claveFondosExcluidos = "fondosExcluidos";

// Buscar el div del fondo
let fondo = document.getElementById("fondo");

function obtenerFondosActivos() {
    let excluidos = JSON.parse(localStorage.getItem(claveFondosExcluidos) || "[]");
    return fondos.filter(function(fondoUrl, index) {
        return index === 0 || !excluidos.includes(fondoUrl);
    });
}

function encontrarFondo(url) {
    return fondos.find(function(fondoUrl) {
        return url === fondoUrl || url.endsWith("/" + fondoUrl);
    });
}

window.esFondoProtegido = function(url) {
    return encontrarFondo(url) === fondos[0];
};

function iniciarFondoCambiante() {
    if (!fondo || intervaloFondos) {
        return;
    }

    intervaloFondos = setInterval(function(){
        fondo.style.opacity = "0";

        temporizadorCambio = setTimeout(function(){
            let fondosActivos = obtenerFondosActivos();
            fondoActual++;

            if(fondoActual >= fondosActivos.length){
                fondoActual = 0;
            }

            fondo.style.backgroundImage =
            "url('" + fondosActivos[fondoActual] + "')";
            fondo.style.opacity = "1";
            temporizadorCambio = null;
        },1000);
    },5000);
}

function detenerFondoCambiante() {
    if (temporizadorCambio) {
        clearTimeout(temporizadorCambio);
        temporizadorCambio = null;
    }

    if (intervaloFondos) {
        clearInterval(intervaloFondos);
        intervaloFondos = null;
    }
}

window.cambiarModoFondo = function(modo) {
    if (!fondo) {
        return;
    }

    localStorage.setItem("modoFondo", modo);
    localStorage.removeItem("fondoPantallaPersonalizado");
    fondoActual = 0;
    fondo.style.opacity = "1";
    fondo.style.backgroundImage = "url('" + fondos[0] + "')";

    if (modo === "estatico") {
        detenerFondoCambiante();
    } else {
        iniciarFondoCambiante();
    }
};

window.elegirFondoPersonalizado = function(url) {
    let fondoElegido = encontrarFondo(url);

    if (!fondoElegido) {
        return;
    }

    let excluidos = JSON.parse(localStorage.getItem(claveFondosExcluidos) || "[]");
    localStorage.setItem(
        claveFondosExcluidos,
        JSON.stringify(excluidos.filter(function(fondoUrl) {
            return fondoUrl !== fondoElegido;
        }))
    );
};

window.sacarFondoPersonalizado = function() {
    let url = document.getElementById("imagenGrande")?.src || "";
    let fondoElegido = encontrarFondo(url);

    if (!fondoElegido || window.esFondoProtegido(url)) {
        return;
    }

    let excluidos = JSON.parse(localStorage.getItem(claveFondosExcluidos) || "[]");
    if (!excluidos.includes(fondoElegido)) {
        excluidos.push(fondoElegido);
    }
    localStorage.setItem(claveFondosExcluidos, JSON.stringify(excluidos));
};

let modoFondoGuardado = localStorage.getItem("modoFondo") || "cambiante";
let fondoPersonalizadoGuardado = localStorage.getItem("fondoPantallaPersonalizado");

if (fondoPersonalizadoGuardado) {
    window.elegirFondoPersonalizado(fondoPersonalizadoGuardado);
}
window.cambiarModoFondo(modoFondoGuardado);