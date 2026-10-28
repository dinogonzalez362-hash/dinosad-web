// Para sumar un producto, agregá { imagen, nombre } a la categoría.
// Cada sección fija su precioMonedas; un producto puede definir el suyo.
window.catalogoTienda = {
    fondos: {
        titulo: "🖼️ Fondos",
        descripcion: "Todos los fondos disponibles en la página.",
        precioMonedas: 100,
        productos: [
            { imagen: "dino.jpg", nombre: "Fondo DinoSad" },
            { imagen: "dino1.jpg", nombre: "Fondo 1" },
            { imagen: "dino2.jpg", nombre: "Fondo 2" },
            { imagen: "dino3.jpg", nombre: "Fondo 3" },
            { imagen: "dino4.jpg", nombre: "Fondo 4" },
            { imagen: "dino5.jpg", nombre: "Fondo 5" }
        ]
    },
    ropa: {
        titulo: "👕 Ropa para el modo historia",
        descripcion: "Vistas del avatar y opciones de cabello disponibles.",
        precioMonedas: 150,
        productos: [
            { imagen: "avatar de frente.jpg", nombre: "Avatar de frente" },
            { imagen: "avatar de costado .jpg", nombre: "Avatar de costado" },
            { imagen: "avatar de espaldas.jpg", nombre: "Avatar de espaldas" },
            { imagen: "cabellero_corto.jpg", nombre: "Cabello corto" },
            { imagen: "cabello corto.png", nombre: "Cabello corto (PNG)" },
            { imagen: "cabello en punta.png", nombre: "Cabello en punta" },
            { imagen: "cabello largo.png", nombre: "Cabello largo" },
            { imagen: "cabello-largo.png", nombre: "Cabello largo (alternativo)" },
            { imagen: "cabello_ con puntas.png", nombre: "Cabello con puntas" }
        ]
    },
    cartas: {
        titulo: "🃏 Cartas",
        descripcion: "Mirá todas las cartas que forman parte de la colección.",
        precioMonedas: 50,
        productos: [
            { imagen: "stiker1.png", nombre: "Carta 1" },
            { imagen: "stiker2.png", nombre: "Carta 2" },
            { imagen: "stiker3.png", nombre: "Carta 3" },
            { imagen: "stiker4.png", nombre: "Carta 4" },
            { imagen: "stiker5.png", nombre: "Carta 5" },
            { imagen: "stiker6.png", nombre: "Carta 6" }
        ]
    },
    rompecabezas: {
        titulo: "🧩 Imágenes para rompecabezas",
        descripcion: "Imágenes disponibles para jugar al rompecabezas.",
        precioMonedas: 80,
        productos: [
            { imagen: "puzzle1.png", nombre: "Imagen de rompecabezas 1" },
            { imagen: "puzzle2.png", nombre: "Imagen de rompecabezas 2" }
        ]
    },
    skins: {
        titulo: "🎨 Skins para fichas",
        descripcion: "Imágenes de muestra para las skins de fichas.",
        precioMonedas: 120,
        productos: [
            { imagen: "dino3.jpg", nombre: "Skin Dino 1" },
            { imagen: "dino4.jpg", nombre: "Skin Dino 2" },
            { imagen: "dino5.jpg", nombre: "Skin Dino 3" },
            { imagen: "stiker1.png", nombre: "Skin de ficha 1" },
            { imagen: "stiker2.png", nombre: "Skin de ficha 2" },
            { imagen: "stiker3.png", nombre: "Skin de ficha 3" },
            { imagen: "stiker4.png", nombre: "Skin de ficha 4" },
            { imagen: "stiker5.png", nombre: "Skin de ficha 5" },
            { imagen: "stiker6.png", nombre: "Skin de ficha 6" }
        ]
    }
};
