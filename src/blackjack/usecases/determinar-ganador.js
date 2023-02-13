
/**
 * 
 * @param {puntosJugadores<Number>} puntosJugadores arreglo que contiene la puntuación
 *  
 */

export const determinarGanador = (puntosJugadores) => {

    const [puntosMinimos, puntosComputadora] = puntosJugadores;
    setTimeout(() => {
      puntosMinimos === puntosComputadora
        ? alert("Nadie gana")
        : puntosMinimos > 21
          ? alert("Computadora gana")
          : puntosComputadora > 21
            ? alert("juagador Gana")
            : alert("Computadora gana");
    }, 200);
  }

