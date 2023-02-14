/**
 * La funcion retorna una carta del deck
 * @param {Array<String>} deck  arreglo de cartas
 * @returns {String} retorna una carta
 */

export const pedirCarta = (deck) => {
    if (! deck || deck.length === 0) {
      throw Error("No hay cartas en el deck");
    }
    return deck.pop();
  };

