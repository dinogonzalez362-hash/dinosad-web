// ===============================
// CONTACTO
// ===============================

// Inicio
let inicioContacto = document.getElementById("inicio");

// Sección Contacto
let seccionContacto = document.getElementById("seccionContacto");

// Botón del menú
let btnContacto = document.getElementById("btnContacto");

// Botón Volver
let btnVolverContacto = document.getElementById("btnVolverContacto");

// ===============================
// ABRIR CONTACTO
// ===============================

if (btnContacto) {

    btnContacto.onclick = function () {

        inicioContacto.style.display = "none";
        seccionContacto.style.display = "block";

    };

}

// ===============================
// VOLVER
// ===============================

if (btnVolverContacto) {

    btnVolverContacto.onclick = function () {

        seccionContacto.style.display = "none";
        inicioContacto.style.display = "block";

    };

}