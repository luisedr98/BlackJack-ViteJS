
/**
 * Funcion que determina quien gano
 * @param {Array<Number>} puntosJugadores arreglo que contiene la puntuación
 * @returns {Promise} determina si el jugador o la computadora gano
 */

export const determinarGanador = (puntosJugadores) => new Promise((resolve, reject) => {
  if (!puntosJugadores || puntosJugadores.length === 0 )
    reject(new Error('puntosJugadores es un campo Obligatorio'))

  let mensaje = null;
  const [puntosMinimos, puntosComputadora] = puntosJugadores;
  puntosMinimos === puntosComputadora
    ? mensaje = "¡Empate nadie gana!"
    : puntosMinimos > 21
      ? mensaje = "!La Computadora gana¡"
      : puntosComputadora > 21
        ? mensaje = "!El jugador gana!"
        : mensaje = "!La computadora gana!";
  resolve({ mensaje });
});
