import { crearDeck, pedirCarta, valorCarta, determinarGanador, crearCartaHTML } from "./blackjack/usecases/index.js";

let deck = [];
const tipos = ["C", "D", "H", "S"],
  especiales = ["A", "J", "Q", "K"],
  botonPedir = document.querySelector("#botonPedir"),
  botonDetener = document.querySelector("#botonDetener"),
  botonIniciar = document.querySelector("#botonIniciar"),
  puntosHTML = document.querySelectorAll("small"),
  divCartasComputadora = document.querySelector("#cartas-computadora"),
  divCartasJugador = document.querySelector("#cartas-jugador");

let puntosJugadores = [];

const inicializarJuego = (numeroJugadores = 2) => {
  deck = crearDeck(tipos, especiales);
  puntosJugadores = [];
  for (let index = 0; index < numeroJugadores; index++) {
    puntosJugadores.push(0);
  }
  puntosHTML.forEach((elemento) => (elemento.innerText = 0));
  divCartasComputadora.innerHTML = '';
  divCartasJugador.innerHTML = '';
  botonDetener.disabled = false;
  botonPedir.disabled = false;
};

const acumularPuntos = (turno, carta) => {
  puntosJugadores[turno] += valorCarta(carta);
  puntosHTML[turno].innerText = puntosJugadores[turno];
  return puntosJugadores[turno];
};

const turnoComputadora = (puntosMinimos) => {
  let puntosComputadora = 0;
  do {
    const carta = pedirCarta(deck);
    puntosComputadora = acumularPuntos(puntosJugadores.length - 1, carta);
    const imagenHTML = crearCartaHTML(carta);
    divCartasComputadora.appendChild(imagenHTML);
  } while (puntosMinimos > puntosComputadora && puntosMinimos <= 21);

  determinarGanador(puntosJugadores);

};

// eventos
botonPedir.addEventListener("click", () => {
  const carta = pedirCarta(deck);
  const puntosJugador = acumularPuntos(0, carta);
  const imageHTML = crearCartaHTML(carta);
  divCartasJugador.appendChild(imageHTML);

  if (puntosJugador > 21) {
    turnoComputadora(puntosJugador);
    botonPedir.disabled = true;
    botonDetener.disabled = true;
  } else if (puntosJugador === 21) {
    turnoComputadora(puntosJugador);
    botonPedir.disabled = true;
    botonDetener.disabled = true;
  }
});

botonDetener.addEventListener("click", () => {
  botonPedir.disabled = true;
  botonDetener.disabled = true;
  turnoComputadora(puntosJugadores[0]);
});

botonIniciar.addEventListener("click", () => {
  inicializarJuego();
});
