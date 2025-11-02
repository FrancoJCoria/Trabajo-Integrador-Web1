// js/carrousel.js
let index = 0;
let imagenes = [
    "./img/fantastic_beasts_the_crimes_of_grindelwald_ver20.jpg",
    "./img/mission_impossible__fallout.jpg",
    "./img/ready_player_one_ver2.jpg",
    "./img/scream_seven.jpg",
    "./img/dead_mans_wire.jpg",
    "./img/frontier_crucible.jpg",
    "./img/alien_romulus_ver2.jpg",
    "./img/black_phone_two.jpg",
    "./img/late_night_with_the_devil_ver2.jpg",
    "./img/tron_ares_ver2.jpg",
    "./img/twenty_eight_years_later.jpg",
    "./img/one_battle_after_another_ver10.jpg"
]

let imgSlot1 = document.getElementById("img-slot-1");
let imgSlot2 = document.getElementById("img-slot-2");
let imgSlot3 = document.getElementById("img-slot-3");
let totalImages = imagenes.length;
let botonSiguiente = document.querySelector(".carrousel-boton.siguiente");
let botonAnterior = document.querySelector(".carrousel-boton.anterior");

function actualizarImagenes() {
    imgSlot1.src = imagenes[index];
    imgSlot2.src = imagenes[index + 1];
    imgSlot3.src = imagenes[index + 2];
    infoSlot1.innerHTML = informaciones[index];
    infoSlot2.innerHTML = informaciones[index + 1];
    infoSlot3.innerHTML = informaciones[index + 2];

}
function siguienteImagen() {
    index = index + 3;

    if (index >= totalImages) {
        index = 0;
    }
    actualizarImagenes();

}
function anteriorImagen() {
    index = index - 3;
    if (index < 0) {
        index = totalImages - 3;
    }
    actualizarImagenes();
}

botonSiguiente.addEventListener("click", siguienteImagen);
botonAnterior.addEventListener("click", () => anteriorImagen());


