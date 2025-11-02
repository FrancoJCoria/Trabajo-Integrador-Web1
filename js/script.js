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

let informaciones = [
    `<h2>Animales Fantasticos <br> Los Crimenes <br>de Grindelwald</h2>
                <p>Un festín visual con un diseño <br> de producción exquisito,<br> totalmente ahogado por <br> un guion
                    sobrecargado
                    y caótico. <br> Yates expande el universo, <br> pero olvida la estructura narrativa. <br> Es todo
                    setup y cero
                    recompensa; <br> un interludio estético <br> pero frustrantemente vacío. <br><br>
                    ★ 8/10</p>`,

    // Índice 1
    `<h2>Mision Imposible <br> Repercusión</h2>
                <p>Es cine de acción en su estado más puro. <br> McQuarrie y Cruise entregan <br>la mejor secuela <br>
                    de la saga con
                    set pieces <br>(la pelea en el baño, el helicóptero) <br> absolutamente brutales y <br> filmadas con
                    una claridad <br>
                    y tensión asombrosas. <br><br>
                    ★ 9/10</p>`,

    // Índice 2
    `<h2>Ready Player <br> One</h2>
                <p>Un bombardeo de nostalgia visualmente <br> espectacular y técnicamente brillante. <br>Es un parque de
                    diversiones <br> dirigido por Spielberg, <br> pero con una trama y personajes tan <br>superficiales
                    como un skin
                    de videojuego. <br> Divertidísima de ver, fácil de olvidar. <br><br>
                    ★ 8/10</p>`,

    // Índice 3
    `<h2>Scream 7</h2>
                <p>Esta nueva entrega de Bettinelli-Olpin <br> y Gillett ofrece un enfoque fresco <br>y moderno de la
                    saga. <br> Logra
                    una mezcla emocionante <br> de nostalgia y novedad, <br>uniendo personajes <br>clásicos con nuevos
                    giros.
                    <br><br>
                    ★ 7.5/10
                </p>`,

    // Índice 4
    `<h2>Dead Man's Wire</h2>
                <p>Un tenso y áspero thriller de rehenes <br> de Gus Van Sant con un <br> estilo setentero impecable.
                    <br>Bill
                    Skarsgård está <br>magnético como el secuestrador,<br> en lo que se siente como <br> una Tarde de
                    Perros moderna. <br>
                    Pura tensión. <br><br>
                    ★ 7/10
                </p>`,

    // Índice 5
    `  <h2>Frontier: Crucible</h2>
                <p>Un western brutalmente sucio y <br> descarnado sobre la supervivencia. <br> Promete ser un thriller
                    tenso,<br>
                    violento y moralmente ambiguo,<br> sin héroes claros. Pura pólvora. <br><br>
                    ★ 8/10</p>`,

    // Índice 6
    `<h2>Alien: Romulus</h2>
                <p>Un regreso visceral al slasher <br> claustrofóbico de la original. <br> Fede Álvarez abandona la
                    teología <br>
                    fallida y entrega un ejercicio <br> de tensión pura y terror práctico <br>que une perfectamente el
                    horror de <br>
                    Scott con la acción de Cameron. <br> Los xenomorfos vuelven a dar miedo.<br><br>
                    ★ 8.5/10</p>`,

    // Índice 7
    `  <h2>Black Phone 2</h2>
                <p>Una secuela que expande la mitología <br> pero pierde la tensión de la original. <br> Se inclina
                    demasiado a lo
                    fantástico, <br> sacrificando el terror tangible <br> por jump scares y una trama predecible. <br>
                    Madeleine McGraw
                    destaca, pero <br> la película se siente forzada e innecesaria. <br><br>
                    ★ 7.5/10</p>`,

    // Índice 8
    ` <h2>Late Night <br> with the Devil</h2>
                <p>Una recreación perfecta de <br>un caótico show de TV de los 7 <br> que desciende en vivo  <br>hacia el
                    terror
                    demoníaco. <br> David Dastmalchian está magnético, <br> y el formato found footage <br> construye una
                    tensión
                    insoportable.<br> Ejecutada con precisión diabólica.
                    <br><br>
                    ★ 7/10
                </p>`,

    // Índice 9
    `<h2>Tron: Ares</h2>
                <p>Un festín visual de neón, <br> espectacular pero hueco. <br> La estética hipnotiza, pero <br>la trama
                    es predecible
                    y superficial.br <br> Más demo técnica que película.
                    <br><br>
                    ★ 8/10
                </p>`,

    // Índice 10
    ` <h2>28 Years Later</h2>
                <p>Una secuela contemplativa y <br> artísticamente cruda. Cambia la furia <br> visceral del original por
                    una
                    <br>melancolía estilo The Road. <br>Es menos terror y más una meditación <br>sobre el legado y el
                    aislamiento. <br>
                    Una evolución que dividirá opiniones.
                    <br><br>
                    ★ 8.5/10
                </p>`,

    // Índice 11
    ` <h2>One Battle <br>After Another</h2>
                <p>Un thriller de acción caótico <br> y paranoico de Paul Thomas Anderson. <br> Es como si The Big Lebowski se <br>
                    fusionara con una película de los Coen. <br> Un viaje tenso, divertido e hipnótico, <br>con DiCaprio
                    brillando <br> como un revolucionario acabado.<br><br>
                    ★ 9/10</p>`
]


let infoSlot1 = document.getElementById("info-slot-1");
let infoSlot2 = document.getElementById("info-slot-2");
let infoSlot3 = document.getElementById("info-slot-3");
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


