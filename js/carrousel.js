// js/carrousel.js
document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById("carrouselContenedor");
    const imagenes = Array.from(document.querySelectorAll(".carrousel-imagen"));
    const btnSiguiente = document.querySelector(".carrousel-boton.siguiente");
    const btnAnterior = document.querySelector(".carrousel-boton.anterior");


    const imagenesPorPaso = 3; // <-- cuántas imágenes querés mover por clic
    let indice = 0;            // índice de la imagen visible más a la izquierda


    btnSiguiente.addEventListener("click", () => {
        if (indice < imagenes.length - imagenesPorPaso) {
            indice += imagenesPorPaso;
        } else {
            indice = 0; // vuelve al inicio
        }
        contenedor.style.transform = `translateX(-${(100 / imagenesPorPaso) * indice}%)`;
    });


    btnAnterior.addEventListener("click", () => {
        if (indice > 0) {
            indice -= imagenesPorPaso;
            contenedor.style.transform = `translateX(-${(100 / imagenesPorPaso) * indice}%)`;
        } else {
            indice = imagenes.length - imagenesPorPaso; // va al final
            contenedor.style.transform = `translateX(-${(100 / imagenesPorPaso) * indice}%)`;
        }
    });


});
